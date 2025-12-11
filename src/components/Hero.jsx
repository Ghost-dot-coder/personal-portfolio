// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

const Hero = ({ isDark, onNavigate }) => {
  const goTo = (id) => {
    if (onNavigate) onNavigate(id);
  };

  return (
    <section
      id="hero"
      className="relative max-w-6xl mx-auto px-4 lg:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16"
    >
      {/* soft background glow */}
      <motion.div
        className="pointer-events-none absolute -z-10 inset-x-0 -top-10 h-52 rounded-full blur-3xl mx-auto max-w-3xl"
        animate={{ opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.35), transparent)",
        }}
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT – circular avatar / badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <motion.div
            className="relative"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            {/* static gradient ring */}
            <div
              className="h-56 w-56 sm:h-64 sm:w-64 rounded-full shadow-2xl shadow-cyan-500/30"
              style={{
                background:
                  "conic-gradient(from 190deg, #22d3ee, #6366f1, #22c55e, #22d3ee)",
              }}
            >
              {/* inner disc */}
              <div className="h-full w-full flex items-center justify-center">
                <div
                  className={`h-[82%] w-[82%] rounded-full border-4 flex flex-col items-center justify-center shadow-xl ${
                    isDark
                      ? "bg-slate-950/95 border-slate-900"
                      : "bg-slate-50 border-white"
                  }`}
                >
                  {/* initials bubble */}
                  <motion.div
                    className={`h-20 w-20 rounded-full flex items-center justify-center text-3xl font-semibold shadow-md ${
                      isDark
                        ? "bg-linear-to-br from-cyan-400 to-emerald-400 text-slate-950"
                        : "bg-linear-to-br from-cyan-500 to-emerald-500 text-slate-950"
                    }`}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    MB
                  </motion.div>
                  <p
                    className={`mt-3 text-sm font-medium ${
                      isDark ? "text-slate-100" : "text-slate-900"
                    }`}
                  >
                    Manu Babychan
                  </p>
                  <p
                    className={`text-[0.8rem] ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Frontend · React · Flutter
                  </p>
                </div>
              </div>
            </div>

            {/* tiny floating spark */}
            <motion.div
              className="absolute -right-3 bottom-8 h-6 w-6 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-500/50"
              animate={{ y: [0, -7, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT – text / bullets / socials */}
        <div className="space-y-6 lg:pl-4">
          <p
            className={`text-[0.8rem] uppercase tracking-[0.28em] flex items-center gap-2 ${
              isDark ? "text-cyan-300" : "text-cyan-700"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            Frontend · React · Flutter
          </p>

          <div className="space-y-2">
            <h1
              className={`text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight tracking-tight ${
                isDark ? "text-slate-50" : "text-slate-900"
              }`}
            >
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Manu
              </span>{" "}
              <span className="inline-block align-middle">👋</span>
            </h1>
            <p
              className={`text-lg sm:text-xl font-medium ${
                isDark ? "text-slate-200" : "text-slate-800"
              }`}
            >
              Frontend &amp; Flutter developer crafting clean, animated
              interfaces.
            </p>
          </div>

          <p
            className={`text-sm sm:text-[0.98rem] max-w-xl leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I design and build focused product UIs — from React &amp; MERN web
            apps to realtime Flutter experiences backed by Firebase. I care
            about clear layouts, smooth motion and predictable code.
          </p>

          {/* quick stack chips */}
          <div className="flex flex-wrap gap-2 text-[0.8rem]">
            {["React", "Tailwind", "Framer Motion", "Flutter", "Firebase"].map(
              (chip) => (
                <span
                  key={chip}
                  className={`inline-flex items-center rounded-full px-3 py-1 border ${
                    isDark
                      ? "border-slate-700 bg-slate-950/70 text-slate-100"
                      : "border-slate-200 bg-slate-50 text-slate-800"
                  }`}
                >
                  {chip}
                </span>
              )
            )}
          </div>

          {/* info bullets */}
          <div className="space-y-2 text-[0.9rem]">
            <HeroBullet
              isDark={isDark}
              emoji="☕"
              label="Fueled by coffee and clean commits."
            />
            <HeroBullet
              isDark={isDark}
              icon={<MapPin className="h-3.5 w-3.5" />}
              label="Based in Kerala, India."
            />
            <HeroBullet
              isDark={isDark}
              emoji="🎓"
              label="BTech CSE @ TKMIT (KTU)."
            />
            <HeroBullet
              isDark={isDark}
              emoji="🧩"
              label="Currently diving deeper into the MERN stack."
            />
          </div>

          {/* buttons + socials */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition ${
                isDark
                  ? "bg-slate-100/5 border border-cyan-400/70 text-cyan-100 backdrop-blur hover:bg-cyan-500/20"
                  : "bg-white border border-cyan-500/90 text-cyan-700 hover:bg-cyan-50"
              }`}
              onClick={() => goTo("projects")}
            >
              <span>View selected work</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <button
              className={`text-sm underline-offset-4 hover:underline flex items-center gap-1 ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
              onClick={() => goTo("contact")}
            >
              Contact me
            </button>

            <div className="flex items-center gap-3 text-[0.85rem]">
              <span
                className={isDark ? "text-slate-400" : "text-slate-500"}
              >
                Social
              </span>
              <div className="flex items-center gap-2">
                <SocialIcon
                  isDark={isDark}
                  href="https://github.com/Ghost-dot-coder"
                  label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon
                  isDark={isDark}
                  href="https://linkedin.com/manu-babychan"
                  label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon
                  isDark={isDark}
                  href="mailto:manubabychan02@gmail.com"
                  label="Email"
                >
                  <Mail className="h-4 w-4" />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroBullet = ({ isDark, emoji, icon, label }) => (
  <div className="flex items-center gap-3">
    <div
      className={`h-7 w-7 rounded-full flex items-center justify-center text-xs ${
        isDark
          ? "bg-slate-900 border border-slate-700"
          : "bg-white border border-slate-200"
      }`}
    >
      {emoji ? (
        <span className="text-base">{emoji}</span>
      ) : (
        <span className="text-cyan-500">{icon}</span>
      )}
    </div>
    <p className={isDark ? "text-slate-200" : "text-slate-700"}>{label}</p>
  </div>
);

const SocialIcon = ({ isDark, href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className={`h-8 w-8 rounded-full flex items-center justify-center border text-sm transition-transform duration-150 hover:-translate-y-0.5 ${
      isDark
        ? "border-slate-700 text-slate-100 hover:border-cyan-400 hover:text-cyan-300 bg-slate-950"
        : "border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 bg-white"
    }`}
  >
    {children}
  </a>
);

export default Hero;
