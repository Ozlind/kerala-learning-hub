"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Brain, Calculator, Check, ChevronDown, ChevronRight, Clock3, Compass, FlaskConical, Globe2, GraduationCap, Languages, Leaf, LibraryBig, Menu, NotebookPen, Search, ShieldCheck, Sparkles, Target, X, Zap } from "lucide-react";

type SchoolClass = { id:string; title:string; phase:string; detail:string; lessons:number; icon:string };
const classes:SchoolClass[] = [
 {id:"1",title:"Class 1",phase:"Primary",detail:"Build strong basics",lessons:8,icon:"✳"},
 {id:"2",title:"Class 2",phase:"Primary",detail:"Learn by exploring",lessons:8,icon:"◒"},
 {id:"3",title:"Class 3",phase:"Primary",detail:"Curiosity grows here",lessons:8,icon:"✿"},
 {id:"4",title:"Class 4",phase:"Primary",detail:"Connect the ideas",lessons:8,icon:"◈"},
 {id:"5",title:"Class 5",phase:"Upper Primary",detail:"Ready for new ideas",lessons:8,icon:"✦"},
 {id:"6",title:"Class 6",phase:"Upper Primary",detail:"Think a little deeper",lessons:8,icon:"⬡"},
 {id:"7",title:"Class 7",phase:"Upper Primary",detail:"Make knowledge stick",lessons:8,icon:"❋"},
 {id:"8",title:"Class 8",phase:"High School",detail:"Strengthen your skills",lessons:8,icon:"◇"},
 {id:"9",title:"Class 9",phase:"High School",detail:"Prepare with confidence",lessons:8,icon:"✧"},
 {id:"10",title:"Class 10",phase:"High School",detail:"Plan your next step",lessons:8,icon:"★"},
 {id:"11",title:"Plus One",phase:"Higher Secondary",detail:"Explore your stream",lessons:6,icon:"↗"},
 {id:"12",title:"Plus Two",phase:"Higher Secondary",detail:"Get exam-ready",lessons:6,icon:"✓"},
];
const subjects = [
 {name:"Mathematics",desc:"Concepts, worked examples and practice problems.",icon:Calculator,tag:"Practice",tone:"math"},
 {name:"Science",desc:"Understand the world through clear explanations.",icon:FlaskConical,tag:"Explore",tone:"science"},
 {name:"English",desc:"Reading, writing, grammar and communication.",icon:BookOpen,tag:"Language",tone:"english"},
 {name:"Malayalam",desc:"Language skills, literature and comprehension.",icon:Languages,tag:"Language",tone:"malayalam"},
 {name:"Social Science",desc:"History, geography, civics and economics.",icon:Globe2,tag:"Discover",tone:"social"},
 {name:"ICT & Digital Skills",desc:"Build confidence with technology and digital thinking.",icon:Brain,tag:"Skills",tone:"ict"},
];
const tools = [
 {title:"Study planner",desc:"Turn a big syllabus into manageable daily steps.",icon:NotebookPen,action:"Create a simple study plan"},
 {title:"Revision checklist",desc:"Keep track of topics you have revised.",icon:Check,action:"Start a revision checklist"},
 {title:"Focus session",desc:"Set one clear goal and study without distractions.",icon:Clock3,action:"Start a 25-minute focus session"},
 {title:"Find a topic",desc:"Search for a class, subject or topic to study next.",icon:Search,action:"Jump to the class finder"},
];
const filters = ["All classes","Primary","Upper Primary","High School","Higher Secondary"];
export default function Home(){
 const [query,setQuery]=useState(""); const [filter,setFilter]=useState("All classes"); const [selected,setSelected]=useState("1"); const [menuOpen,setMenuOpen]=useState(false); const [toast,setToast]=useState("");
 const filtered=useMemo(()=>classes.filter(c=>(filter==="All classes"||c.phase===filter)&&(`${c.title} ${c.phase} ${c.detail}`).toLowerCase().includes(query.toLowerCase().trim())),[filter,query]);
 const chosen=classes.find(c=>c.id===selected)??classes[0];
 function notify(message:string){setToast(message);window.setTimeout(()=>setToast(""),3000)}
 function jumpToClasses(){document.getElementById("classes")?.scrollIntoView({behavior:"smooth"});setMenuOpen(false)}
 function handleTool(action:string){if(action==="Jump to the class finder"){jumpToClasses();return}notify(action+" — ready to set up. Choose your class above to personalise your study space.")}
 return <main className="app-shell">
  <header className="topbar"><a className="brand" href="#" aria-label="Kerala Learning Hub home"><span className="brand-mark"><GraduationCap size={21}/></span><span>Kerala <span style={{color:"var(--green)"}}>Learning Hub</span></span></a>
   <nav className="navlinks" aria-label="Main navigation"><a href="#classes">Explore classes</a><a href="#subjects">Subjects</a><a href="#study-tools">Study tools</a><a href="#about">Our approach</a></nav>
   <div className="top-actions"><button className="pill-btn" onClick={()=>notify("Your learning journey starts with choosing a class.")}>My learning</button><button className="pill-btn primary" onClick={jumpToClasses}>Start learning <ArrowRight size={15}/></button><button className="mobile-menu" aria-label="Open menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={19}/>:<Menu size={19}/>}</button></div>
  </header>
  {menuOpen&&<div className="mobile-drawer" onClick={()=>setMenuOpen(false)}><div className="drawer-panel" onClick={e=>e.stopPropagation()}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontWeight:800}}>Explore <button className="mobile-menu" aria-label="Close menu" onClick={()=>setMenuOpen(false)}><X size={18}/></button></div><a href="#classes">Explore classes</a><a href="#subjects">Subjects</a><a href="#study-tools">Study tools</a><a href="#about">Our approach</a><button className="pill-btn primary" onClick={jumpToClasses}>Start learning <ArrowRight size={15}/></button></div></div>}
  <section className="hero"><div><div className="eyebrow"><span className="eyebrow-dot"/> A clearer way to learn</div><h1>Your next big idea starts <em>here.</em></h1><p className="hero-copy">A calmer, more organised place for Kerala students to explore subjects, strengthen the basics and build confidence — one small step at a time.</p><div className="hero-ctas"><button className="pill-btn primary" onClick={jumpToClasses}>Explore your class <ArrowRight size={16}/></button><a className="pill-btn" href="#study-tools"><Sparkles size={15}/> Discover study tools</a></div><div style={{display:"flex",gap:18,marginTop:25,flexWrap:"wrap",color:"var(--muted)",fontSize:11,fontWeight:700}}><span style={{display:"flex",alignItems:"center",gap:6}}><ShieldCheck size={15} color="var(--green)"/> Student-friendly design</span><span style={{display:"flex",alignItems:"center",gap:6}}><Leaf size={15} color="var(--green)"/> Learn at your own pace</span></div></div>
   <div className="hero-visual" aria-label="Illustration of a learning dashboard"><div className="visual-card"><div className="visual-top"><span style={{display:"flex",alignItems:"center",gap:7}}><span className="lesson-icon"><BookOpen size={16}/></span> Your learning space</span><span style={{color:"var(--green)",fontSize:10}}>PREVIEW</span></div><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:18}}><div><div className="mini-label">A little progress, every day</div><h3>Keep going. You’ve got this.</h3></div><div className="progress-ring"/></div><div className="lesson-row"><span className="lesson-icon"><Calculator size={16}/></span><span>Practice a concept<small>Small steps make a difference</small></span><ChevronRight size={16} style={{marginLeft:"auto",color:"#9ca99f"}}/></div><div className="lesson-row"><span className="lesson-icon" style={{background:"#fff3d7",color:"#956e18"}}><Target size={16}/></span><span>Choose today’s goal<small>Make time for what matters</small></span><ChevronRight size={16} style={{marginLeft:"auto",color:"#9ca99f"}}/></div></div><div className="floating-note"><span style={{color:"#24794f"}}><Sparkles size={16}/></span> Progress over perfection</div></div>
  </section>
  <section className="section" id="classes"><div className="section-head"><div><div className="section-kicker">Find your starting point</div><h2>What class are you in?</h2><p className="section-sub">Choose a class to make your learning journey more relevant.</p></div><div className="search-wrap"><Search size={17}/><input className="search-input" aria-label="Search classes" placeholder="Search class or level..." value={query} onChange={e=>setQuery(e.target.value)}/></div></div>
   <div className="filter-row" role="group" aria-label="Filter by school level">{filters.map(f=><button key={f} className={`filter-chip ${filter===f?"active":""}`} onClick={()=>setFilter(f)}>{f}</button>)}</div>
   <div className="class-grid">{filtered.length?filtered.map(c=><button key={c.id} className={`class-card ${selected===c.id?"selected":""}`} onClick={()=>{setSelected(c.id);notify(`${c.title} selected. Subject suggestions updated below.`)}} aria-pressed={selected===c.id}><div className="card-top"><span className="class-number">{c.title}</span><span className="class-bubble">{c.icon}</span></div><p>{c.detail}</p><div className="card-bottom"><span>{c.phase}</span><strong>Explore <ArrowRight size={12} style={{verticalAlign:"middle"}}/></strong></div></button>):<div className="empty-state">No matching classes. Try another search or choose “All classes”.</div>}</div>
   <div className="subjects-area" id="subjects"><div className="section-head"><div><div className="section-kicker">Your learning toolkit</div><h2>Explore subjects</h2><p className="section-sub">A starting point for {chosen.title}. Subject availability and curriculum coverage should be verified against the current Kerala syllabus.</p></div><span className="pill-btn" style={{pointerEvents:"none"}}><GraduationCap size={15}/> {chosen.title} selected <ChevronDown size={14}/></span></div>
    <div className="subject-grid">{subjects.map(s=>{const Icon=s.icon;return <article className="subject-card" key={s.name}><div className="subject-icon"><Icon size={20}/></div><div><h3>{s.name}</h3><p>{s.desc}</p><div className="subject-meta"><span className="tiny-tag">{s.tag}</span><span className="tiny-tag">{chosen.title}</span></div></div></article>})}</div>
   </div>
   <div className="study-strip"><div><div className="eyebrow" style={{color:"#b7e3c7"}}><span className="eyebrow-dot" style={{background:"#8ed4a7",boxShadow:"0 0 0 4px #ffffff12"}}/> Make learning manageable</div><h3>Small sessions. Real progress.</h3><p>Pick one topic, set a realistic goal and come back to it regularly. A steady routine beats last-minute cramming.</p></div><button className="pill-btn" onClick={()=>handleTool("Create a simple study plan")}>Plan a study session <ArrowRight size={15}/></button></div>
  </section>
  <section className="section" id="study-tools" style={{paddingTop:4}}><div className="section-head"><div><div className="section-kicker">Built for everyday study</div><h2>Useful tools, less overwhelm.</h2><p className="section-sub">Simple ways to organise your next learning session.</p></div></div><div className="tools-grid">{tools.map(t=>{const Icon=t.icon;return <article className="tool-card" key={t.title}><div className="subject-icon"><Icon size={19}/></div><h3>{t.title}</h3><p>{t.desc}</p><button className="tool-link" onClick={()=>handleTool(t.action)}>{t.title==="Find a topic"?"Browse classes":"Get started"} <ArrowRight size={13}/></button></article>})}</div></section>
  <div className="feature-band" id="about"><section className="section"><div className="section-head"><div><div className="section-kicker">Thoughtfully designed</div><h2>Learning should feel possible.</h2></div></div><div className="feature-list"><div className="feature"><span className="feature-check"><Check size={16}/></span><div><h3>Clear, not cluttered</h3><p>Simple navigation helps students find the next useful thing without feeling overwhelmed.</p></div></div><div className="feature"><span className="feature-check"><Zap size={16}/></span><div><h3>Made for small screens</h3><p>A responsive layout designed to work on phones, tablets and desktops.</p></div></div><div className="feature"><span className="feature-check"><Compass size={16}/></span><div><h3>Progress at your pace</h3><p>Build your routine gradually, revisit concepts and keep your goals realistic.</p></div></div></div></section></div>
  <footer className="footer"><div className="footer-brand"><span className="brand-mark" style={{width:27,height:27,borderRadius:9}}><GraduationCap size={16}/></span> Kerala Learning Hub</div><span>Made to make learning feel a little easier.</span><span>Educational support · Verify syllabus with official sources</span></footer>
  {toast&&<div className="toast" role="status" aria-live="polite">{toast}</div>}
 </main>;
}
