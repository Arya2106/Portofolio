"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { projects, skill, experiences, sosmed } from "../../constanta";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Transition } from "framer-motion";

const floatTransition: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: [0.42, 0, 0.58, 1],
};

const breatheTransition: Transition = {
  duration: 8,
  repeat: Infinity,
  ease: [0.42, 0, 0.58, 1],
};

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: floatTransition,
  },
};

const breathe = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: breatheTransition,
  },
};

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        time: formData.get("time"),
      },
      "6J_9eqyv0zkCKWLIp"
    );
    setStatus("success");
    formRef.current.reset();
  } catch {
    setStatus("error");
  }
};

  return (
    <>
      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          {...breathe}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3], transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-green-500/5 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.5, 0.2], transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 } }}
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-1/2 -translate-x-1/2 z-50 bottom-8 md:bottom-auto md:top-5"
      >
        <div className="flex items-center gap-4 px-4 py-2.5 rounded-full border border-white/30 bg-white/15 backdrop-blur-xl">
          {[
           { href: "#home", icon: "fa-house", title: "Home", active: true },
  { href: "#projects", icon: "fa-briefcase", title: "Projects" },
  { href: "#experience", icon: "fa-user-tie", title: "Experience" },
  { href: "#contact", icon: "fa-envelope", title: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              title={item.title}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                item.active
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:bg-white/10 hover:text-white"
              }`}
            >
              <i className={`fa-solid ${item.icon}`}></i>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="flex justify-center items-center min-h-screen sm:flex-row flex-col gap-10 px-8" id="home">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <motion.div {...float}>
            <Image
              src="/assets/images/avatar1.png"
              alt="Avatar"
              width={300}
              height={300}
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="xl:text-4xl md:text-3xl text-2xl space-y-1">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              Hi, I'm
            </motion.p>
            <motion.h1 className="font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              Muhammad Arya
            </motion.h1>
            <motion.h1 className="font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              Saputra
            </motion.h1>
            <motion.p className="text-lg text-neutral-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              Web Developer
            </motion.p>
          </div>

          <motion.div
            className="mt-6 flex gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="border border-white/10 py-2 px-5 rounded-full bg-white/5 backdrop-blur-sm flex items-center gap-2 text-sm">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              Open To Work
            </div>
            <div className="border border-white/10 py-2 px-5 rounded-full bg-white/5 backdrop-blur-sm text-sm">
              {projects.length} Projects
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full h-px bg-white/10 origin-left" />
      </div>

      {/* Projects */}
      <section className="flex flex-col items-center px-8 py-24" id="projects">
        <div className="w-full max-w-5xl">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-mono tracking-widest text-neutral-500 mb-2">01 —</p>
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-neutral-400 mt-2">Hal Yang Pernah Saya Buat</p>
          </motion.div>
          <motion.div {...fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  desc={project.description}
                  image={project.image}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full h-px bg-white/10 origin-left" />
      </div>

      {/* Experience */}
      <section className="flex flex-col items-center px-8 py-24" id="experience">
        <div className="w-full max-w-4xl">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-mono tracking-widest text-neutral-500 mb-2">02 —</p>
            <h2 className="text-4xl font-bold">Experience</h2>
            <p className="text-neutral-400 mt-2">Pengalaman Saya</p>
          </motion.div>
          <motion.div {...fadeUp}>
            <div className="relative">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 pb-12 border-l border-white/10 last:pb-0">
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-300 ring-4 ring-emerald-500/20"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono text-neutral-500 tracking-widest">{exp.duration}</span>
                    <h3 className="font-bold text-lg">{exp.position}</h3>
                    <p className="text-emerald-300 text-sm">{exp.company}</p>
                    <p className="text-neutral-400 text-sm mt-1">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full h-px bg-white/10 origin-left" />
      </div>

      {/* Skills */}
      <section className="flex flex-col items-center px-8 py-24" id="skills">
        <div className="w-full max-w-4xl">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-mono tracking-widest text-neutral-500 mb-2">03 —</p>
            <h2 className="text-4xl font-bold">Skills</h2>
            <p className="text-neutral-400 mt-2">Technologies I work with</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {skill.map((s, index) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                animate={{ y: [0, -4, 0], rotate: [0, index % 2 === 0 ? 0.4 : -0.4, 0] }}
                whileHover={{ y: -6, scale: 1.04, rotate: 0, transition: { duration: 0.2 } }}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/25 hover:bg-white/10 transition-colors duration-300 cursor-default overflow-hidden"
                style={{ animation: `idle-float ${3.5 + (index % 3) * 0.8}s ease-in-out ${index * 0.2}s infinite` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/8 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-center justify-between relative z-10">
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                    className="w-2.5 h-2.5 rounded-full bg-green-400"
                  />
                  <span className="text-[10px] font-mono text-neutral-500 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="font-semibold text-sm text-white relative z-10">{s.title}</p>
                <div className="h-0.5 w-full rounded-full bg-white/5 relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${70 + (index % 3) * 10}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.3, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full h-px bg-white/10 origin-left" />
      </div>

      {/* Contact */}
      <section className="flex flex-col items-center px-8 py-24 pb-32 md:pb-24" id="contact">
        <div className="w-full max-w-4xl">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-xs font-mono tracking-widest text-neutral-500 mb-2">04 —</p>
            <h2 className="text-4xl font-bold">Contact</h2>
            <p className="text-neutral-400 mt-2">Hubungi saya</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div {...fadeUp}>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-neutral-400">NAMA</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Muhammad Arya"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-200"
                  />
                </div>
<input 
  type="hidden" 
  name="time" 
  value={new Date().toLocaleString("id-ID", { 
    dateStyle: "long", 
    timeStyle: "short",
    timeZone: "Asia/Jakarta"
  })} 
/>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-neutral-400">EMAIL</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="nama@gmail.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono tracking-widest text-neutral-400">PESAN</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tinggalkan pesan..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-200 resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Mengirim..." : status === "success" ? "Terkirim ✓" : status === "error" ? "Gagal, coba lagi" : "Kirim Pesan →"}
                </motion.button>
              </form>
            </motion.div>

            {/* Info + Sosmed */}
            <motion.div {...fadeUp} className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Terbuka untuk project freelance, kolaborasi, atau sekadar ngobrol soal web development. Jangan ragu buat reach out!
                </p>
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    { label: "Email", value: "maryasaputra2106@gmail.com", icon: "fa-envelope" },
                    { label: "Location", value: "Indonesia", icon: "fa-location-dot" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-sm text-neutral-400">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <i className={`fa-solid ${item.icon} text-xs`}></i>
                      </div>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sosmed */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-mono tracking-widest text-neutral-500">FIND ME ON</p>
                <div className="flex gap-3 flex-wrap">
                  {sosmed.map((s, index) => (
                    <motion.a
                      key={s.title}
                      href={s.link}
                      target="_blank"
                      title={s.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      animate={{
                        y: [0, -6, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                          repeatDelay: 2,
                        },
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, -5, 5, 0],
                        transition: { duration: 0.4 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex justify-center items-center hover:bg-white/15 hover:border-white/25 transition-colors duration-200"
                    >
                      <Image src={s.image} alt={s.title} width={20} height={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}