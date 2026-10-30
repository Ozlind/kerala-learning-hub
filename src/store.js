import fs from 'node:fs';
import path from 'node:path';

const emptyState = () => ({ runs: [], memories: [], approvals: [], schedules: [], tasks: [], projects: [], notes: [] });

export class Store {
  constructor(root = process.env.OPERATOR_DATA_DIR || path.resolve('data')) {
    this.root = root;
    fs.mkdirSync(root, { recursive: true });
    this.stateFile = path.join(root, 'state.json');
    this.auditFile = path.join(root, 'audit.jsonl');
    if (!fs.existsSync(this.stateFile)) fs.writeFileSync(this.stateFile, JSON.stringify(emptyState(), null, 2));
    const state = this.read();
    for (const key of Object.keys(emptyState())) if (!Array.isArray(state[key])) state[key] = [];
    this.write(state);
  }
  read() { return JSON.parse(fs.readFileSync(this.stateFile, 'utf8')); }
  write(state) {
    const tmp = `${this.stateFile}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(state, null, 2), { mode: 0o600 });
    fs.renameSync(tmp, this.stateFile);
  }
  audit(event) { fs.appendFileSync(this.auditFile, JSON.stringify({ at: new Date().toISOString(), ...event }) + '\n', { mode: 0o600 }); }
  addRun(run) { const s = this.read(); s.runs.unshift(run); s.runs = s.runs.slice(0, 100); this.write(s); this.audit({ type: 'run', id: run.id, status: run.status }); }
  addMemory(memory) { const s = this.read(); s.memories.unshift(memory); s.memories = s.memories.slice(0, 500); this.write(s); this.audit({ type: 'memory', id: memory.id }); }
  deleteMemory(id) { const s = this.read(); const before = s.memories.length; s.memories = s.memories.filter(x => x.id !== id); if (s.memories.length === before) return false; this.write(s); this.audit({ type: 'memory_deleted', id }); return true; }
  addApproval(item) { const s = this.read(); s.approvals.unshift(item); this.write(s); this.audit({ type: 'approval_requested', id: item.id, action: item.action }); }
  updateApproval(id, status) { const s = this.read(); const item = s.approvals.find(x => x.id === id); if (!item) return null; item.status = status; item.updatedAt = new Date().toISOString(); this.write(s); this.audit({ type: 'approval_status', id, status }); return item; }
  addSchedule(item) { const s = this.read(); s.schedules.unshift(item); this.write(s); this.audit({ type: 'schedule_created', id: item.id }); }
  updateSchedule(id, patch) { const s = this.read(); const item = s.schedules.find(x => x.id === id); if (!item) return null; Object.assign(item, patch); this.write(s); this.audit({ type: 'schedule_updated', id }); return item; }
  addTask(item) { const s = this.read(); s.tasks.unshift(item); s.tasks = s.tasks.slice(0, 300); this.write(s); this.audit({ type: 'task_created', id: item.id }); return item; }
  updateTask(id, patch) { const s = this.read(); const item = s.tasks.find(x => x.id === id); if (!item) return null; Object.assign(item, patch); item.updatedAt = new Date().toISOString(); this.write(s); this.audit({ type: 'task_updated', id, status: item.status }); return item; }
  deleteTask(id) { const s = this.read(); const before = s.tasks.length; s.tasks = s.tasks.filter(x => x.id !== id); if (s.tasks.length === before) return false; this.write(s); this.audit({ type: 'task_deleted', id }); return true; }
  addProject(item) { const s=this.read(); s.projects.unshift(item); s.projects=s.projects.slice(0,100); this.write(s); this.audit({type:'project_created',id:item.id}); return item; }
  updateProject(id, patch) { const s=this.read(); const item=s.projects.find(x=>x.id===id); if(!item)return null; Object.assign(item,patch,{updatedAt:new Date().toISOString()}); this.write(s); this.audit({type:'project_updated',id}); return item; }
  deleteProject(id) { const s=this.read(); const before=s.projects.length; s.projects=s.projects.filter(x=>x.id!==id); if(before===s.projects.length)return false; s.notes=s.notes.filter(x=>x.projectId!==id); this.write(s); this.audit({type:'project_deleted',id}); return true; }
  addNote(item) { const s=this.read(); s.notes.unshift(item); s.notes=s.notes.slice(0,500); this.write(s); this.audit({type:'note_created',id:item.id,projectId:item.projectId}); return item; }
  updateNote(id, patch) { const s=this.read(); const item=s.notes.find(x=>x.id===id); if(!item)return null; Object.assign(item,patch,{updatedAt:new Date().toISOString()}); this.write(s); this.audit({type:'note_updated',id}); return item; }
  deleteNote(id) { const s=this.read(); const before=s.notes.length; s.notes=s.notes.filter(x=>x.id!==id); if(before===s.notes.length)return false; this.write(s); this.audit({type:'note_deleted',id}); return true; }
}
