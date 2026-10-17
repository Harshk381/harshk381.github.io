"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { MotionConfig, motion } from "framer-motion";
import { certifications, education, experience, profile, projects, skills, stats } from "@/data/resume";

const Scene = dynamic(() => import("./Scene"), { ssr: false });
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const links = ["about", "skills", "experience", "projects", "certifications", "contact"];

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

function Tilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={() => ref.current && (ref.current.style.transform = "")} className="h-full transition-transform duration-200 will-change-transform">
      {children}
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <Reveal>
        <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="grad-text">{title}</span>
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

const Chip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{children}</span>
);

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", message: "" });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) setCount(window.innerWidth < 768 ? 400 : 1200);
  }, []);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const btn = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5";

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8" aria-label="Primary">
          <a href="#top" className="font-semibold tracking-tight">HK<span className="text-accent">.</span></a>
          <ul className="hidden gap-7 text-sm text-slate-300 md:flex">
            {links.map((l) => (<li key={l}><a className="capitalize transition hover:text-accent" href={`#${l}`}>{l}</a></li>))}
          </ul>
          <button className="rounded-md p-2 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <span className="block h-0.5 w-6 bg-white" /><span className="mt-1.5 block h-0.5 w-6 bg-white" /><span className="mt-1.5 block h-0.5 w-6 bg-white" />
          </button>
        </nav>
        {open && (
          <ul id="mobile-menu" className="space-y-1 border-t border-white/5 px-5 pb-4 md:hidden">
            {links.map((l) => (<li key={l}><a onClick={() => setOpen(false)} className="block rounded py-2 capitalize text-slate-300" href={`#${l}`}>{l}</a></li>))}
          </ul>
        )}
      </header>

      <main id="main">
        <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_40%,rgba(124,58,237,.25),transparent),radial-gradient(40%_40%_at_20%_80%,rgba(34,211,238,.15),transparent)]" aria-hidden />
          <div className="absolute inset-0" aria-hidden>{count !== null && <Scene count={count} />}</div>
          <div className="pointer-events-none relative mx-auto w-full max-w-6xl px-5 pt-20 sm:px-8">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent">{profile.role}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
              Hi, I&apos;m <span className="grad-text">{profile.name}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-6 max-w-xl text-lg text-slate-300">
              I build automation frameworks and CI/CD pipelines that make enterprise banking and streaming platforms ship with confidence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="pointer-events-auto mt-9 flex flex-wrap gap-3">
              <a href={`${base}/Harsh_Khandelwal.pdf`} download className={`${btn} bg-gradient-to-r from-accent to-violet text-ink`}>Download Resume</a>
              <a href="#contact" className={`${btn} glass`}>Get in touch</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} glass`}>GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} glass`}>LinkedIn</a>
            </motion.div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal><p className="text-lg leading-relaxed text-slate-300 lg:col-span-3">{profile.summary}</p></Reveal>
            <div className="grid grid-cols-2 gap-3 lg:col-span-2">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="glass h-full rounded-2xl p-4">
                    <div className="grad-text text-3xl font-extrabold">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <Tilt>
                  <div className="glass h-full rounded-2xl p-5">
                    <h3 className="mb-3 font-semibold text-white">{g.group}</h3>
                    <div className="flex flex-wrap gap-2">{g.items.map((s) => <Chip key={s}>{s}</Chip>)}</div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Reveal>
            <div className="glass rounded-2xl border-l-4 border-l-accent p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <span className="text-sm text-accent">{experience.period}</span>
              </div>
              <p className="mb-5 text-slate-400">{experience.company}</p>
              <ul className="space-y-3 text-slate-300">
                {experience.bullets.map((b) => (<li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{b}</li>))}
              </ul>
            </div>
          </Reveal>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Tilt>
                  <article className="glass flex h-full flex-col rounded-2xl p-6">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mb-3 text-xs text-accent">{p.meta}</p>
                    <p className="text-sm text-slate-300">{p.desc}</p>
                    <ul className="my-4 space-y-1 text-sm font-medium text-violet">{p.highlights.map((h) => <li key={h}>▸ {h}</li>)}</ul>
                    <div className="mt-auto flex flex-wrap gap-2">{p.tags.map((t) => <Chip key={t}>{t}</Chip>)}</div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications & Education">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <ul className="glass h-full space-y-3 rounded-2xl p-6">
                {certifications.map((c) => (<li key={c} className="flex gap-3 text-slate-300"><span className="text-accent" aria-hidden>✓</span>{c}</li>))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="font-bold">{education.degree}</h3>
                <p className="mt-1 text-slate-300">{education.school}</p>
                <p className="mt-3 text-sm text-accent">{education.period} · {education.grade}</p>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <p className="mb-6 text-lg text-slate-300">Open to Software Engineer and test automation roles in Pune and beyond. The quickest way to reach me is email.</p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className={`${btn} bg-gradient-to-r from-accent to-violet text-ink`}>Email me</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} glass`}>LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} glass`}>GitHub</a>
              </div>
              <p className="mt-6 text-sm text-slate-400">{profile.location} · {profile.email}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <form onSubmit={send} className="glass space-y-4 rounded-2xl p-6">
                <label className="block text-sm">Name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-ink/60 px-3 py-2" />
                </label>
                <label className="block text-sm">Message
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-ink/60 px-3 py-2" />
                </label>
                <button type="submit" className={`${btn} w-full bg-white text-ink`}>Send via email app</button>
              </form>
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</footer>
    </MotionConfig>
  );
}
