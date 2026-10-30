import './env.js';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Store } from './store.js';
import { OperatorEngine } from './engine.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const store = new Store(path.join(root, 'data'));
const engine = new OperatorEngine(store);
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8' };
const send = (res, code, body, type='application/json; charset=utf-8') => { res.writeHead(code, { 'Content-Type': type, 'X-Content-Type-Options':'nosniff', 'Cache-Control':'no-store', 'Referrer-Policy':'no-referrer', 'X-Frame-Options':'DENY', 'Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'", 'Permissions-Policy':'camera=(), microphone=(), geolocation=()' }); res.end(type.startsWith('application/json') ? JSON.stringify(body) : body); };
const readBody = async req => { let raw=''; for await (const chunk of req) { raw += chunk; if (raw.length > 12000) throw new Error('Request too large.'); } return raw ? JSON.parse(raw) : {}; };
const rate = new Map();
function allowedRequest(req) {
  const host = req.headers.host || '';
  if (!/^localhost(?::\d+)?$|^127\.0\.0\.1(?::\d+)?$/.test(host)) return false;
  const origin = req.headers.origin;
  return !origin || origin === `http://${host}`;
}
function rateLimited(req) {
  const key = req.socket.remoteAddress || 'local'; const now = Date.now(); const entry = rate.get(key) || { start: now, count: 0 };
  if (now - entry.start > 60_000) { entry.start = now; entry.count = 0; }
  entry.count++; rate.set(key, entry); return entry.count > 30;
}
function createSchedule(goal, everyMinutes) {
  if (typeof goal !== 'string' || !goal.trim() || goal.length > 3000) throw new Error('Schedule goal must contain 1–3000 characters.');
  const minutes = Number(everyMinutes); if (!Number.isInteger(minutes) || minutes < 15 || minutes > 10080) throw new Error('Interval must be between 15 minutes and 7 days.');
  const item = { id: crypto.randomUUID(), goal: goal.trim(), everyMinutes: minutes, enabled: true, createdAt: new Date().toISOString(), nextRunAt: new Date(Date.now() + minutes * 60_000).toISOString(), lastRunAt: null };
  store.addSchedule(item); return item;
}
const server = http.createServer(async (req, res) => {
  try {
    if (!allowedRequest(req)) return send(res, 403, { error: 'Local access only.' });
    const url = new URL(req.url, 'http://localhost');
    if (req.method === 'GET' && url.pathname === '/api/health') return send(res, 200, { ok:true, status:engine.status(), providerCheck:await engine.checkProvider() });
    if (req.method === 'GET' && url.pathname === '/api/runs') return send(res, 200, { runs:store.read().runs.slice(0,30) });
    if (req.method === 'GET' && url.pathname === '/api/memories') return send(res, 200, { memories:store.read().memories.slice(0,50) });
    if (req.method === 'DELETE' && url.pathname.startsWith('/api/memories/')) { const removed=store.deleteMemory(url.pathname.split('/').pop()); return removed?send(res,200,{deleted:true}):send(res,404,{error:'Memory not found.'}); }
    if (req.method === 'GET' && url.pathname === '/api/approvals') return send(res, 200, { approvals:store.read().approvals.slice(0,50) });
    if (req.method === 'GET' && url.pathname === '/api/schedules') return send(res, 200, { schedules:store.read().schedules });
    if (req.method === 'GET' && url.pathname === '/api/tasks') return send(res, 200, { tasks:store.read().tasks || [] });
    if (req.method === 'GET' && url.pathname === '/api/projects') return send(res,200,{projects:store.read().projects||[]});
    if (req.method === 'POST' && url.pathname === '/api/projects') { const body=await readBody(req); const name=String(body.name||'').trim(), description=String(body.description||'').trim(); if(!name||name.length>100||description.length>1000)return send(res,400,{error:'Project name is required (max 100 chars); description max 1,000 chars.'}); if((store.read().projects||[]).length>=100)return send(res,409,{error:'Project limit reached.'}); const project={id:crypto.randomUUID(),name,description,status:'active',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}; store.addProject(project); return send(res,201,{project}); }
    if (req.method === 'PATCH' && url.pathname.startsWith('/api/projects/')) { const body=await readBody(req),patch={}; if(body.name!==undefined){const name=String(body.name).trim();if(!name||name.length>100)return send(res,400,{error:'Project name must contain 1–100 characters.'});patch.name=name;} if(body.description!==undefined){const description=String(body.description).trim();if(description.length>1000)return send(res,400,{error:'Description exceeds 1,000 characters.'});patch.description=description;} if(body.status!==undefined){if(!['active','paused','archived'].includes(body.status))return send(res,400,{error:'Invalid project status.'});patch.status=body.status;} const project=store.updateProject(url.pathname.split('/').pop(),patch);return project?send(res,200,{project}):send(res,404,{error:'Project not found.'}); }
    if (req.method === 'DELETE' && url.pathname.startsWith('/api/projects/')) { const removed=store.deleteProject(url.pathname.split('/').pop());return removed?send(res,200,{deleted:true,notesDeleted:true}):send(res,404,{error:'Project not found.'}); }
    if (req.method === 'GET' && url.pathname === '/api/notes') { const projectId=url.searchParams.get('projectId');const notes=store.read().notes||[];return send(res,200,{notes:projectId?notes.filter(x=>x.projectId===projectId):notes}); }
    if (req.method === 'POST' && url.pathname === '/api/notes') { const body=await readBody(req),title=String(body.title||'').trim(),content=String(body.content||'').trim(),projectId=String(body.projectId||'');if(!title||title.length>160||!content||content.length>12000)return send(res,400,{error:'Note title (1–160 chars) and content (1–12,000 chars) are required.'});if(projectId&&!store.read().projects.some(x=>x.id===projectId))return send(res,404,{error:'Project not found.'});const note={id:crypto.randomUUID(),projectId:projectId||null,title,content,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};store.addNote(note);return send(res,201,{note}); }
    if (req.method === 'PATCH' && url.pathname.startsWith('/api/notes/')) { const body=await readBody(req),patch={};if(body.title!==undefined){const title=String(body.title).trim();if(!title||title.length>160)return send(res,400,{error:'Note title must contain 1–160 characters.'});patch.title=title;}if(body.content!==undefined){const content=String(body.content).trim();if(!content||content.length>12000)return send(res,400,{error:'Note content must contain 1–12,000 characters.'});patch.content=content;}const note=store.updateNote(url.pathname.split('/').pop(),patch);return note?send(res,200,{note}):send(res,404,{error:'Note not found.'}); }
    if (req.method === 'DELETE' && url.pathname.startsWith('/api/notes/')) {const removed=store.deleteNote(url.pathname.split('/').pop());return removed?send(res,200,{deleted:true}):send(res,404,{error:'Note not found.'});}
    if (req.method === 'GET' && url.pathname === '/api/search') { const q=(url.searchParams.get('q')||'').trim().toLowerCase();if(q.length>200)return send(res,400,{error:'Search query is too long.'});if(!q)return send(res,200,{results:[]});const state=store.read(),contains=x=>JSON.stringify(x).toLowerCase().includes(q);const results=[...state.projects.filter(contains).map(x=>({type:'project',id:x.id,title:x.name,detail:x.description})),...state.notes.filter(contains).map(x=>({type:'note',id:x.id,title:x.title,detail:x.content.slice(0,180)})),...state.tasks.filter(contains).map(x=>({type:'task',id:x.id,title:x.title,detail:x.details})),...state.memories.filter(contains).map(x=>({type:'memory',id:x.id,title:x.category,detail:x.content})),...state.runs.filter(contains).map(x=>({type:'run',id:x.id,title:x.goal,detail:x.summary}))].slice(0,50);return send(res,200,{results}); }
    if (req.method === 'GET' && url.pathname === '/api/export') { const state=store.read(); const payload={ exportedAt:new Date().toISOString(), version:2, state, audit:fs.existsSync(store.auditFile)?fs.readFileSync(store.auditFile,'utf8').split('\n').filter(Boolean).slice(-500):[] }; res.writeHead(200,{'Content-Type':'application/json; charset=utf-8','Content-Disposition':'attachment; filename=ai-studio-operator-export.json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}); return res.end(JSON.stringify(payload,null,2)); }
    if (req.method === 'GET' && url.pathname === '/api/audit') { const file=path.join(root,'data','audit.jsonl'); const lines=fs.existsSync(file)?fs.readFileSync(file,'utf8').trim().split('\n').filter(Boolean).slice(-100):[]; return send(res,200,{events:lines.map(x=>JSON.parse(x)).reverse()}); }
    if (req.method === 'POST' && rateLimited(req)) return send(res, 429, { error:'Too many requests. Wait one minute and retry.' });
    if (req.method === 'POST' && url.pathname === '/api/run') { const body=await readBody(req); const result=await engine.run(body.goal); return send(res,result.status==='failed'?502:200,result); }
    if (req.method === 'POST' && url.pathname === '/api/schedules') { const body=await readBody(req); return send(res,201,{ schedule:createSchedule(body.goal,body.everyMinutes) }); }
    if (req.method === 'POST' && url.pathname === '/api/tasks') { const body=await readBody(req); const title=String(body.title||'').trim(), details=String(body.details||'').trim(); if(!title||title.length>180||details.length>2000) return send(res,400,{error:'Task title is required (max 180 chars); details max 2,000 chars.'}); if((store.read().tasks||[]).length>=300) return send(res,409,{error:'Task board is full. Remove completed tasks before adding more.'}); const priority=['low','normal','high'].includes(body.priority)?body.priority:'normal'; const task={id:crypto.randomUUID(),title,details,priority,status:'todo',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}; store.addTask(task); return send(res,201,{task}); }
    if (req.method === 'PATCH' && url.pathname.startsWith('/api/tasks/')) { const body=await readBody(req); const patch={}; if(body.status!==undefined){if(!['todo','doing','done'].includes(body.status)) return send(res,400,{error:'Invalid task status.'});patch.status=body.status;} if(body.priority!==undefined){if(!['low','normal','high'].includes(body.priority)) return send(res,400,{error:'Invalid task priority.'});patch.priority=body.priority;} if(body.title!==undefined){const title=String(body.title).trim();if(!title||title.length>180)return send(res,400,{error:'Task title must contain 1–180 characters.'});patch.title=title;} if(body.details!==undefined){const details=String(body.details).trim();if(details.length>2000)return send(res,400,{error:'Task details exceed 2,000 characters.'});patch.details=details;} const task=store.updateTask(url.pathname.split('/').pop(),patch); return task?send(res,200,{task}):send(res,404,{error:'Task not found.'}); }
    if (req.method === 'DELETE' && url.pathname.startsWith('/api/tasks/')) { const removed=store.deleteTask(url.pathname.split('/').pop()); return removed?send(res,200,{deleted:true}):send(res,404,{error:'Task not found.'}); }
    if (req.method === 'POST' && url.pathname.startsWith('/api/schedules/')) { const body=await readBody(req); const schedule=store.updateSchedule(url.pathname.split('/').pop(),{ enabled:Boolean(body.enabled) }); return schedule?send(res,200,{schedule}):send(res,404,{error:'Schedule not found.'}); }
    if (req.method === 'POST' && url.pathname.startsWith('/api/approvals/')) { const body=await readBody(req); if (!['approved','rejected'].includes(body.status)) return send(res,400,{error:'Status must be approved or rejected.'}); const item=store.updateApproval(url.pathname.split('/').pop(),body.status); return item?send(res,200,{approval:item,note:'Approval status recorded. The requested action was not executed.'}):send(res,404,{error:'Approval not found.'}); }
    if (req.method === 'GET' && url.pathname === '/') return send(res,200,fs.readFileSync(path.join(root,'public','index.html'),'utf8'),mime['.html']);
    if (req.method === 'GET' && ['/app.js','/style.css'].includes(url.pathname)) { const file=path.join(root,'public',url.pathname.slice(1)); return send(res,200,fs.readFileSync(file,'utf8'),mime[path.extname(file)]); }
    return send(res,404,{error:'Not found'});
  } catch (error) { return send(res,400,{error:error.message || 'Request failed.'}); }
});

// Schedules run only while this local process is running. No remote/background service is implied.
const scheduler = setInterval(async () => {
  const now = Date.now();
  for (const item of store.read().schedules.filter(x => x.enabled && Date.parse(x.nextRunAt) <= now)) {
    store.updateSchedule(item.id,{ nextRunAt:new Date(now + item.everyMinutes * 60_000).toISOString(), lastRunAt:new Date().toISOString() });
    try { await engine.run(item.goal); } catch (error) { store.audit({type:'schedule_error',id:item.id,message:error.message}); }
  }
}, 30_000);
scheduler.unref();
const port = Number(process.env.PORT || 8787);
server.listen(port,'127.0.0.1',() => process.stdout.write(`AI Studio Operator listening on http://127.0.0.1:${port}\n`));
