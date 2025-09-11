import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiMail as Mail, FiGithub as Github, FiLinkedin as Linkedin, FiDownload as Download, FiArrowRight as ArrowRight, FiExternalLink as ExternalLink, FiMapPin as MapPin } from "react-icons/fi";
import TechnicalSkillsSection from "./TechnicalSkillsSection";


// Uses existing avatar at public/assets/my-image.JPG. Update path if needed.
const AVATAR_SRC = "/assets/my-image.JPG";


const DATA = {
 name: "Arsenii Stolbov",
 title: "Software Engineer • Product‑minded",
 location: "Vancouver, BC",
 email: "arsenys46@gmail.com",
 phone: "+1 604 802 8582",
 linkedin: "https://www.linkedin.com/in/arsenii-stolbov-43415931a/",
 github: "https://github.com/Arseny15",
 resumeEngineerHref: "ArseniiStolbov_Resume_SE.pdf",
 resumeProjectHref: "ArseniiStolbov_Resume_PM.pdf",
 summary:
   "A skilled and driven software development professional with nearly two years of hands-on experience creating innovative software solutions, leading complex technical projects, and integrating technical expertise with product-focused strategies. Leveraging a robust academic background in Computer Science along with proven leadership skills cultivated through elite athletics and entrepreneurial experience, I bring a unique blend of technical proficiency and strategic thinking. Eager to apply my development expertise and product management capabilities to drive meaningful innovation in the IT industry.",
 skills: {
   languages: [
     "C++",
     "Python",
     "Java",
     "C",
     "TypeScript",
     "JavaScript",
     "SQL",
     "R",
     "Assembly",
     "HTML",
     "Tailwind CSS",
   ],
   frameworks: ["React", "Angular", "Node.js", "scikit‑learn", "LLM apps", "Git", "Oracle DB"],
   other: ["Oracle SQL", "RAG development", "Project Management (Google Cert)", "Abacus (WebMO)"]
 },
 experience: [
   {
     role: "AI Software Developer (Summer Internship)",
     company: "Buffoli Industries — Brescia, Italy",
     date: "May 2025 – Aug 2025",
     start: "2025-05",
     bullets: [
       "Built a RAG chatbot (Qwen‑2.5‑VL + ChromaDB) with query analysis & vector search.",
       "Reduced web‑search over‑reliance, improving accuracy on internal docs.",
       "Optimized CSV/MSG ingestion for large files; added role‑based access control.",
       "Developed Angular components for upload & chat; initiated GraphRAG integration.",
     ],
   },
   {
     role: "Software Engineer (Intern)",
     company: "Gidrolock — Moscow, Russia",
     date: "Jan 2023 – Jan 2024",
     start: "2023-01",
     bullets: [
       "Embedded firmware for Wi‑Fi/ZigBee/LoRa devices on PIC microcontrollers.",
       "Low‑power radio sensors (−25% battery) via sleep scheduling & interrupts.",
       "Real‑time leak detection with dual‑valve coordination (−40% failures).",
       "Designed RS485 support and custom protocols for secure sensor networks.",
     ],
   },
   {
     role: "Business Development Manager (Summer Internship)",
     company: "Delumo — Salzburg, Austria",
     date: "Apr 2024 – Jul 2024",
     start: "2024-04",
     bullets: [
       "Launched the English/German website; traffic up ~65%; ~18 inbound leads/month after launch.",
       "Held 20+ conversations with insurance partners in Europe and China; received 2 partnership interest letters and built ~C$55K in likely deals.",
       "Organized 3 conferences with bronze-level sponsorships; collected 32 qualified leads at ~C$28 per potential customer.",
       "Built a simple sales pipeline in the CRM; kept deal notes clean and up to date; cut time from first email to first meeting by ~5 days.",
       "Created sales materials (decks, one-pagers) tailored for English and German audiences.",
     ],
   },
   {
     role: "Founder & Product/Operations Lead — Cross-border Supply Chain (China–Russia)",
     company: "Vancouver / Remote",
     date: "May 2021 – Feb 2022",
     start: "2021-05",
     bullets: [
       "Bootstrapped a CN→RU logistics venture (unincorporated sole proprietorship). Hit ~C$10K GMV/month in 3 months; later transferred the supplier network & SOPs to a buyer.",
       "Built supplier, 3PL, and broker network; negotiated rates/SLAs.",
       "Standardized Incoterms + HS codes to reduce clearance issues.",
       "Ran end-to-end ops: sourcing, QA, consolidation, freight, customs, last-mile.",
       "Managed a Telegram customer channel; replies <24h; WISMO inquiries down.",
       "Set up chat→order pipeline + KPI dashboard (GMV, on-time, lead time).",
     ],
   },
 ],
 projects: [
   {
     name: "Real‑time Trading Platform",
     period: "Oct 2024 – Dec 2024",
     desc: "Node.js REST API on OracleDB with pooling; complex SQL aggregation; web UI for CRUD over market data.",
     links: [],
     tags: ["Node.js", "OracleDB", "SQL", "HTML/JS"],
   },
   {
     name: "Python‑based Bayesian Optimization in Organic Synthesis",
     period: "Sep 2024 – Jan 2025",
     desc: "Compared BO vs. MLR to maximize reaction yield; EI acquisition cut experiments while raising accuracy.",
     links: [],
     tags: ["Python", "Bayesian Opt", "ChemInformatics"],
   },
   {
     name: "Snake Game (C++/SFML)",
     period: "Nov 2024 – Dec 2024",
     desc: "Responsive loop, collision & scoring logic; polished remake of classic Nokia Snake.",
     links: [],
     tags: ["C++17", "SFML"],
   },
   {
     name: "Car Shop Application (Java)",
     period: "Jan 2022 – Apr 2022",
     desc: "JSON‑backed GUI to search/compare cars; Singleton pattern for resource mgmt & logging.",
     links: [],
     tags: ["Java", "Swing/FX", "Design Patterns"],
   },
 ],
 education: [
   {
     school: "University of British Columbia — B.Sc. Computer Science (Combined Major in Science)",
     date: "Sep 2021 – Dec 2025",
     bullets: [
       "Relevant coursework: Data Structures & Algorithms, OS, ML, Software Engineering, DB Systems, Computational Chemistry, Economics & Business.",
     ],
   },
   { school: "Google (Coursera) — Certificate in Project Management", date: "Aug 2025", bullets: ["Planning, agile/waterfall, execution, stakeholder comms."] },
 ],
 extras: [
   { title: "Former Professional Ice Hockey Player (2007–2021)", bullets: ["Gold medalist — Hockey Championship of Moscow (U16); 10+ international tournaments."] },
   { title: "Logistics Startup Founder", bullets: ["Ran CN→RU transport ops; led a small team; end‑to‑end execution & negotiations."] },
 ],
};




function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
 return (
   <section id={id} className={`scroll-mt-24 py-20 ${className}`}>
     <div className="mx-auto max-w-6xl px-4">{children}</div>
   </section>
 );
}


function ExperienceTimeline({ items }: { items: any[] }) {
 const getSortKey = (job: any) => job.end || job.start || "";
 const sorted = [...items].sort((a, b) => getSortKey(b).localeCompare(getSortKey(a)));


 return (
   <div className="relative">
     <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-sky-300/40 via-white/15 to-transparent" />
     <div className="space-y-10">
       {sorted.map((job) => (
         <div key={job.company + job.role} className="relative pl-20">
           <div className="absolute left-8 top-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-300 ring-2 ring-sky-200/40" />
           <div className="absolute right-full top-5 -translate-y-1/2 pr-4 select-none text-base font-semibold text-sky-200 whitespace-nowrap">
             {job.date}
           </div>
           <Card className="bg-slate-900/60">
             <CardHeader>
               <CardTitle className="text-base leading-snug text-left">
                 <span className="font-semibold">{job.role}</span>
                 <span className="text-slate-400"> — {job.company}</span>
               </CardTitle>
               <p className="text-sm text-slate-400 text-left">{job.date}</p>
             </CardHeader>
             <CardContent className="text-left">
               <ul className="list-disc space-y-2 text-sm text-slate-300 text-left pl-5">
                 {job.bullets.map((b: string, i: number) => (
                   <li key={i} className="text-left">{b}</li>
                 ))}
               </ul>
             </CardContent>
           </Card>
         </div>
       ))}
     </div>
   </div>
 );
}




function Pill({ children }: { children: React.ReactNode }) {
 return <span className="inline-flex items-center rounded-2xl bg-sky-600/20 px-3 py-1 text-sm text-sky-200 ring-1 ring-inset ring-sky-400/30">{children}</span>;
}


function Button({ children, variant = "primary", href, download, className = "" }: { children: React.ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; href?: string; download?: boolean; className?: string }) {
 const base = "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-300";
 const styles = {
   primary: "bg-sky-600 text-white hover:bg-sky-500",
   secondary: "bg-white text-slate-900 hover:bg-slate-100",
   outline: "border border-white/20 text-slate-100 hover:bg-white/10",
   ghost: "text-sky-200 hover:text-white",
 } as const;
 if (href) {
   return (
     <a href={href} download={download} className={`${base} ${styles[variant]} ${className}`}>
       {children}
     </a>
   );
 }
 return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
}


function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
 return <div className={`rounded-2xl border p-4 sm:p-6 ${className}`}>{children}</div>;
}


function CardHeader({ children }: { children: React.ReactNode }) {
 return <div className="mb-2">{children}</div>;
}


function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
 return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}


function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
 return <div className={className}>{children}</div>;
}




function useTypewriter(words: string[], speed = 26, pause = 900) {
 const [i, setI] = useState(0);
 const [t, setT] = useState("");
 const [dir, setDir] = useState<1 | -1>(1);
 const timer = useRef<number | null>(null);
 const word = words[i % words.length] || "";
 useEffect(() => {
   if (timer.current) window.clearTimeout(timer.current);
   if (dir === 1 && t.length < word.length) timer.current = window.setTimeout(() => setT(word.slice(0, t.length + 1)), speed);
   else if (dir === -1 && t.length > 0) timer.current = window.setTimeout(() => setT(word.slice(0, t.length - 1)), speed / 1.5);
   else {
     timer.current = window.setTimeout(() => { if (dir === 1) setDir(-1); else { setDir(1); setI(v => (v + 1) % words.length); } }, pause);
   }
   return () => { if (timer.current) window.clearTimeout(timer.current); };
 }, [t, dir, i, word, speed, pause, words.length]);
 return t + (Date.now() % 1000 < 500 ? "_" : "");
}


const Portfolio: React.FC = () => {
 const typed = useTypewriter([
   `Hi, I'm ${DATA.name}.`,
   "I love building reliable systems.",
   "I ship fast and learn faster.",
 ]);
 const year = useMemo(() => new Date().getFullYear(), []);


 return (
   <div className="min-h-screen bg-slate-950 text-slate-100">


<Section id="home" className="pt-20 sm:pt-24">
       <div className="content grid items-center gap-8 sm:gap-10 md:grid-cols-2">
         <div className="text-center md:text-left order-2 md:order-1">
           <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm mb-4">
             <MapPin className="h-4 w-4 text-sky-300" /> {DATA.location}
           </div>
           <div className="max-w-xl mx-auto md:mx-0">
             <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-300 text-center md:text-left leading-tight">
               {DATA.title}
             </h1>
             <p className="mt-3 text-sm sm:text-base text-slate-300 text-center md:text-left leading-relaxed">{DATA.summary}</p>
           </div>
           <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-semibold text-sky-200">{typed}</p>
           <div className="mt-6 sm:mt-8 flex flex-col gap-5 justify-center md:justify-start">
             {/* First row: Action buttons */}
             <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
               <Button href="#projects" className="text-sm sm:text-base px-6 py-3">
                 <span>View Projects</span> <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
               </Button>
               <Button href="#contact" variant="outline" className="text-sm sm:text-base px-6 py-3">Contact</Button>
             </div>
             
             {/* Second row: Resume buttons */}
             <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
               <Button href={DATA.resumeEngineerHref} variant="secondary" className="text-sm sm:text-base px-6 py-3">
                 <Download className="h-4 w-4 sm:h-5 sm:w-5" /> <span className="hidden sm:inline">Resume — Software</span><span className="sm:hidden">Resume SE</span>
               </Button>
               <Button href={DATA.resumeProjectHref} variant="outline" className="text-sm sm:text-base px-6 py-3">
                 <Download className="h-4 w-4 sm:h-5 sm:w-5" /> <span className="hidden sm:inline">Resume — PM</span><span className="sm:hidden">Resume PM</span>
               </Button>
             </div>
             
             {/* Third row: Social links */}
             <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
               <Button href={DATA.linkedin} variant="outline" className="text-sm sm:text-base px-6 py-3">
                 <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" /> <span className="hidden sm:inline">LinkedIn</span>
               </Button>
               <Button href={DATA.github} variant="ghost" className="text-sm sm:text-base px-6 py-3">
                 <Github className="h-4 w-4 sm:h-5 sm:w-5" /> <span className="hidden sm:inline">GitHub</span>
               </Button>
             </div>
           </div>
         </div>
         <div className="relative flex justify-center md:justify-end order-1 md:order-2">
           <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-sky-500/10 via-sky-400/0 to-sky-300/10 blur-2xl" />
           <img
             src={AVATAR_SRC}
             alt="Arsenii Stolbov"
             className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] h-auto rounded-2xl shadow-2xl"
           />
         </div>
       </div>
     </Section>


     <Section id="education">
       <h2 className="text-2xl font-bold text-sky-300">Education</h2>
       <div className="content mt-6">
         <div className="grid gap-6 lg:grid-cols-2">
           <Card className="border-white/10 bg-white/5">
             <CardHeader>
               <CardTitle className="text-lg text-left">Education</CardTitle>
             </CardHeader>
             <CardContent>
               {DATA.education.map((e) => (
                 <div key={e.school} className="mb-6 text-left">
                   <p className="font-bold text-base mb-1">{e.school}</p>
                   <p className="text-sm text-slate-400 mb-3">{e.date}</p>
                   <ul className="list-inside list-disc text-base text-slate-300">
                     {e.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                   </ul>
                 </div>
               ))}
               <div className="mb-6 text-left">
                 <p className="font-bold text-base mb-1">Logos M – Moscow, Russia</p>
                 <p className="text-sm text-slate-400 mb-3">High School Diploma – GPA: 4.3</p>
               </div>
             </CardContent>
           </Card>
           <Card className="border-white/10 bg-white/5">
             <CardHeader>
               <CardTitle className="text-lg text-left">Beyond Code</CardTitle>
             </CardHeader>
             <CardContent>
               {DATA.extras.map((x) => (
                 <div key={x.title} className="mb-6 text-left">
                   <p className="font-bold text-base mb-3">{x.title}</p>
                   <ul className="list-inside list-disc text-base text-slate-300">
                     {x.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                   </ul>
                 </div>
               ))}
               <div className="mb-6 text-left">
                 <p className="font-bold text-base mb-1">International Major Entrance Scholarship</p>
                 <p className="text-sm text-slate-400 mb-3">Issued by The University of British Columbia · Sep 2021</p>
                 <ul className="list-inside list-disc text-base text-slate-300">
                   <li>International Major Entrance Scholarships (IMES) are awarded to exceptional international students entering undergraduate programs at UBC. The number and level of these scholarships awarded each year vary, depending on available funding.</li>
                 </ul>
               </div>
             </CardContent>
           </Card>
         </div>
       </div>
     </Section>
     <Section id="experience" className="bg-white/5">
       <h2 className="text-2xl font-bold text-sky-300">Experience</h2>
      
       <div className="content mt-6">
         <div className="w-full">
           <ExperienceTimeline items={DATA.experience} />
         </div>
       </div>
     </Section>


     <Section id="projects">
       <div className="flex items-center justify-between">
         <h2 className="text-xl sm:text-2xl font-bold text-sky-300">Projects</h2>
       </div>
       <div className="content mt-6 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
         {DATA.projects.map((p) => (
           <div key={p.name} className="group rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 lg:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
             <div className="flex items-start justify-between gap-3 sm:gap-4">
               <div className="flex-1 min-w-0">
                 <p className="text-base sm:text-lg font-semibold tracking-tight text-slate-100">{p.name}</p>
                 <p className="text-xs text-slate-400 mt-1">{p.period}</p>
               </div>
               <div className="rounded-full bg-sky-400/10 px-2 sm:px-3 py-1 text-xs text-sky-200 ring-1 ring-inset ring-sky-400/30 flex-shrink-0">
                 {p.tags[0]}
               </div>
             </div>
             <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.desc}</p>
             <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
               {p.tags.map((t) => (
                 <Pill key={t}>{t}</Pill>
               ))}
             </div>
             {p.links?.length ? (
               <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                 {p.links.map((l: any) => (
                   <a key={l.href} className="inline-flex items-center gap-1 text-sm text-sky-300 hover:underline" href={l.href}>
                     {l.label} <ExternalLink className="h-3 w-3" />
                   </a>
                 ))}
               </div>
             ) : null}
           </div>
         ))}
       </div>
     </Section>


     <TechnicalSkillsSection />
     <Section id="contact" className="bg-white/5">
       <div className="content grid gap-6 lg:grid-cols-2">
         <div>
           <h2 className="text-xl sm:text-2xl font-bold text-sky-300">Contact</h2>
           <p className="mt-2 text-sm sm:text-base text-slate-300">Want to collaborate or chat? Reach out via email or LinkedIn.</p>
           <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
             <Button href={`mailto:${DATA.email}`} className="text-xs sm:text-sm">
               <Mail className="h-3 w-3 sm:h-4 sm:w-4" /> <span>Email Me</span>
             </Button>
             <Button href={DATA.linkedin} variant="outline" className="text-xs sm:text-sm">
               <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" /> <span>LinkedIn</span>
             </Button>
             <Button href={DATA.resumeEngineerHref} variant="outline" download className="text-xs sm:text-sm">
               <Download className="h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Resume — Software</span><span className="sm:hidden">Resume SE</span>
             </Button>
             <Button href={DATA.resumeProjectHref} variant="outline" download className="text-xs sm:text-sm">
               <Download className="h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Resume — PM</span><span className="sm:hidden">Resume PM</span>
             </Button>
           </div>
         </div>
         <Card className="border-white/10 bg-slate-900/60">
           <CardHeader><CardTitle className="text-base sm:text-lg">Quick Links</CardTitle></CardHeader>
           <CardContent className="grid gap-2 sm:gap-3 text-sm">
             <a className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sky-300 hover:bg-white/10 transition-colors duration-200" href={DATA.github}>
               <span className="flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
               <ExternalLink className="h-3 w-3" />
             </a>
             <a className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sky-300 hover:bg-white/10 transition-colors duration-200" href={DATA.linkedin}>
               <span className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</span>
               <ExternalLink className="h-3 w-3" />
             </a>
           </CardContent>
         </Card>
       </div>
     </Section>


     <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-400">
       © {year} {DATA.name}. Built with React + Tailwind.
     </footer>
   </div>
 );
};


export default Portfolio;
