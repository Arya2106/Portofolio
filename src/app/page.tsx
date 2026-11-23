"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Lanyard from "@/components/Lanyard";
import LocalTime from "@/components/LocalTime";
import ProjectCard from "@/components/ProjectCard";
import ThemeToggle from "@/components/ThemeToggle";
import {
  featuredProject,
  projects,
  skillGroups,
  experiences,
  sosmed,
} from "../../constanta";

const EMAIL = "maryasaputra2106@gmail.com";
const totalProjects = projects.length + 1;
const allSkills = skillGroups.flatMap((g) => g.items);

const navItems = [
  { href: "#projects", label: "Project" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#skills", label: "Skill" },
  { href: "#contact", label: "Kontak" },
];

function Reveal({
  children,
  className,
  delay = 0,
}: Readonly<{ children: React.ReactNode; className?: string; delay?: number }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  label,
  title,
  aside,
}: Readonly<{ label: string; title: string; aside?: string }>) {
  return (
    <Reveal className="mb-14 border-t border-line pt-6 md:mb-20">
      <div className="flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-faint">
        <span>{label}</span>
        {aside && <span>{aside}</span>}
      </div>
      <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight text-fg md:text-7xl">
        {title}
      </h2>
    </Reveal>
  );
}

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu mobile: kunci scroll halaman saat terbuka, tutup dengan Esc atau saat layar jadi desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    const formData = new FormData(formRef.current);

    try {
      await emailjs.send(
        "service_t0kgkmf",
        "template_3qc652j",
        {
          from_name: formData.get("from_name"),
          from_email: formData.get("from_email"),
          message: formData.get("message"),
          time: new Date().toLocaleString("id-ID", {
            dateStyle: "long",
            timeStyle: "short",
            timeZone: "Asia/Jakarta",
          }),
        },
        "6J_9eqyv0zkCKWLIp"
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            arya<span className="text-signal">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-dim md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-fg">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 font-mono text-xs text-dim">
            <span className="hidden sm:inline">
              Bogor · <LocalTime />
            </span>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex items-center gap-2 uppercase tracking-widest text-fg md:hidden"
            >
              <span className="relative block h-2.5 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 h-px w-4 bg-fg transition-transform duration-300 ${
                    menuOpen ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 transition-transform duration-300 ${
                    menuOpen ? "top-1/2 -rotate-45 bg-fg" : "bottom-0 bg-signal"
                  }`}
                />
              </span>
              {menuOpen ? "Tutup" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col justify-between bg-bg px-5 pb-10 pt-8 md:hidden"
          >
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-5xl font-semibold tracking-tight transition-colors group-active:text-signal">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs text-dim"
            >
              <span>
                Bogor · <LocalTime />
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero */}
        <section id="home" ref={heroRef} className="scroll-mt-14 relative flex min-h-screen flex-col md:block">
          {/* pointer-events-none supaya area kosong di sini tidak menghalangi drag kartu lanyard */}
          <div className="pointer-events-none relative z-10 md:select-none mx-auto flex w-full max-w-6xl flex-col px-5 pb-20 pt-[64svh] md:min-h-screen md:justify-between md:px-8 md:pb-10 md:pt-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto md:max-w-[58%]"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-dim">
                Muhammad Arya Saputra
              </p>
              <h1 className="mt-6 font-display text-[clamp(3.25rem,9vw,8rem)] font-bold leading-[0.88] tracking-[-0.04em]">
                Web developer
                <br />
                dari Bogor<span className="text-signal">.</span>
              </h1>
              <ul className="mt-8 flex flex-col gap-1 text-base text-dim md:text-lg">
                <li>
                  Web Developer at <span className="text-fg">PT FourBest Synergi</span>
                </li>
                <li>
                  Developer of{" "}
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-signal"
                  >
                    Ngalenyap
                  </a>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-line bg-surface py-2 pl-3 pr-5 text-sm transition-colors hover:border-signal"
                >
                  <span className="rounded-full bg-signal px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-bg">
                    Live
                  </span>
                  {featuredProject.domain}
                  <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
                <a href="#projects" className="text-sm text-dim underline-offset-4 transition-colors hover:text-fg hover:underline">
                  Lihat semua project ↓
                </a>
              </div>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pointer-events-auto mt-16 hidden grid-cols-3 gap-6 border-t border-line pt-6 md:grid md:max-w-[58%]"
            >
              {[
                { k: "Project", v: String(totalProjects).padStart(2, "0") },
                { k: "Live di production", v: "01" },
                { k: "Status", v: "Open to work" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-faint">{s.k}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold">{s.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Lanyard: kanvasnya menimpa teks (z-20) supaya kartu tidak terpotong saat ditarik.
              Desktop: selebar hero, kartu di kanan. Mobile: setinggi satu layar, kartu menggantung
              dari header di atas teks (teks diberi padding atas 64svh).
              Event diambil dari section hero, jadi kanvas tembus klik dan link di bawahnya tetap bisa diklik.
              Header tetap paling atas (z-50). */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-svh md:inset-0 md:h-full">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              mobileFov={22}
              mobileAnchorY={1.2}
              eventSource={heroRef}
              anchorX={0.22}
            />
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-line py-6" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-4xl font-semibold md:text-6xl">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={i} className={i % 2 === 0 ? "text-outline" : "text-faint"}>
                {s} <span className="text-signal">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <section id="projects" className="scroll-mt-14 mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
          <SectionHeading label="Project" title="Yang pernah saya buat" aside={`${totalProjects} total`} />

          {/* Featured: Ngalenyap */}
          <Reveal className="grid gap-10 md:grid-cols-12 md:gap-12">
            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block md:col-span-7"
            >
              <div className="overflow-hidden rounded-lg border border-line bg-surface transition-colors group-hover:border-signal/60">
                <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-faint/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-faint/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-faint/60" />
                  </div>
                  <div className="flex flex-1 items-center gap-2 rounded bg-bg px-3 py-1 font-mono text-xs text-dim">
                    <i className="fa-solid fa-lock text-[10px] text-faint" />
                    {featuredProject.domain}
                  </div>
                </div>
                <div className="relative aspect-16/10">
                  <Image
                    src={featuredProject.image}
                    alt={`Tampilan halaman utama ${featuredProject.domain}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </a>

            <div className="flex flex-col md:col-span-5">
              <div className="flex items-baseline justify-between font-mono text-xs text-faint">
                <span>01</span>
                <span className="flex items-center gap-2 text-signal">
                  <span className="h-1.5 w-1.5 bg-signal" />
                  LIVE DI PRODUCTION
                </span>
              </div>
              <h3 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-fg/80">{featuredProject.tagline}</p>
              <p className="mt-5 text-sm leading-relaxed text-dim">{featuredProject.description}</p>

              <ul className="mt-6 flex flex-col border-t border-line">
                {featuredProject.features.map((f) => (
                  <li key={f} className="flex gap-3 border-b border-line py-2.5 text-sm text-dim">
                    <span className="text-faint">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                {featuredProject.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                Kunjungi situsnya
                <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </a>
            </div>
          </Reveal>

          {/* Project lainnya */}
          <div className="mt-28 grid gap-x-12 gap-y-20 md:mt-40 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} className="md:even:mt-28" delay={(i % 2) * 0.1}>
                <ProjectCard
                  index={i + 2}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  year={project.year}
                  stack={project.stack}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-14 mx-auto max-w-6xl px-5 pb-28 md:px-8 md:pb-40">
          <SectionHeading label="Pengalaman" title="Tempat saya belajar" />
          <div className="border-t border-line">
            {experiences.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.08}>
                <div className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-faint md:col-span-3 md:pt-2">
                    {exp.duration}
                  </p>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{exp.position}</h3>
                    <p className="mt-1 text-sm text-signal">{exp.company}</p>
                  </div>
                  {exp.description && (
                    <p className="text-sm leading-relaxed text-dim md:col-span-5 md:pt-1">{exp.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-14 mx-auto max-w-6xl px-5 pb-28 md:px-8 md:pb-40">
          <SectionHeading label="Skill" title="Alat kerja sehari-hari" />
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.08}>
                <p className="font-mono text-xs uppercase tracking-widest text-faint">{group.label}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-display text-2xl font-medium tracking-tight text-fg/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-14 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-faint">Kontak</p>
              <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
                Punya ide project?
                <br />
                <span className="text-dim">Ayo ngobrol.</span>
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-12">
              <Reveal className="flex flex-col gap-10 md:col-span-5">
                <div>
                  <p className="max-w-sm text-sm leading-relaxed text-dim">
                    Terbuka untuk freelance, kolaborasi, atau sekadar ngobrol soal web development.
                    Kirim email langsung atau lewat form ini.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="break-all font-display text-xl font-semibold underline decoration-signal decoration-2 underline-offset-[6px] md:text-2xl"
                    >
                      {EMAIL}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-fg"
                    >
                      {copied ? "Tersalin ✓" : "Salin"}
                    </button>
                  </div>
                </div>

                <ul className="border-t border-line">
                  {sosmed.map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border-b border-line py-4 text-sm transition-colors hover:text-signal"
                      >
                        {s.title}
                        <span className="text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {[
                    { name: "from_name", label: "Nama", type: "text", placeholder: "Nama kamu" },
                    { name: "from_email", label: "Email", type: "email", placeholder: "nama@email.com" },
                  ].map((f) => (
                    <label key={f.name} className="flex flex-col gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-faint">{f.label}</span>
                      <input
                        type={f.type}
                        name={f.name}
                        required
                        placeholder={f.placeholder}
                        className="border-b border-line bg-transparent pb-3 text-lg text-fg placeholder-faint transition-colors focus:border-signal focus:outline-none"
                      />
                    </label>
                  ))}
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-faint">Pesan</span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Ceritakan sedikit soal project-nya…"
                      className="resize-none border-b border-line bg-transparent pb-3 text-lg text-fg placeholder-faint transition-colors focus:border-signal focus:outline-none"
                    />
                  </label>

                  <div className="flex flex-wrap items-center gap-5">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="rounded-full bg-fg px-7 py-3 text-sm font-semibold text-bg transition-colors hover:bg-signal disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "loading" ? "Mengirim…" : "Kirim pesan →"}
                    </button>
                    <p className="text-sm text-dim" role="status" aria-live="polite">
                      {status === "success" && "Pesan terkirim. Terima kasih!"}
                      {status === "error" && "Gagal mengirim, coba lagi atau email langsung."}
                    </p>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-xs text-faint md:flex-row md:items-center md:justify-between md:px-8">
          <span suppressHydrationWarning>© {new Date().getFullYear()} Muhammad Arya Saputra</span>
          <span>Dibuat pakai Next.js, di Bogor</span>
          <a href="#home" className="transition-colors hover:text-fg">
            Kembali ke atas ↑
          </a>
        </div>
      </footer>
    </>
  );
}
