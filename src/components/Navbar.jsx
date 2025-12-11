// components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SunMedium,
  MoonStar,
  Github,
  Linkedin,
  ArrowRight,
  Code2,
  Command as CommandIcon,
} from "lucide-react";

const Navbar = ({ isDark, toggleTheme, RESUME_URL, onOpenCommand }) => (
  <header className="fixed top-3 left-0 right-0 z-40 flex justify-center pointer-events-none">
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        pointer-events-auto w-full max-w-5xl mx-auto
        rounded-2xl border shadow-lg
        backdrop-blur-2xl transition-colors duration-500
        px-3 sm:px-4
        ${
          isDark
            ? "bg-slate-950/80 border-slate-800/70"
            : "bg-slate-50/90 border-slate-200/80"
        }
      `}
    >
      <nav className="flex items-center justify-between h-14 sm:h-16">
        <div className="flex items-center gap-3">
          <motion.span
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-emerald-500 text-sm font-semibold"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 className="h-5 w-5 text-slate-950" />
          </motion.span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">
              Manu Babychan
            </span>
            <span className="text-[0.75rem] opacity-70">
              React · Frontend · Flutter
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="hidden sm:flex items-center gap-6 text-[0.8rem] font-medium">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#projects">Work</NavLink>
            <NavLink href="#skills">Stack</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#timeline">Journey</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </ul>

          {/* Resume button */}
          <a
            href={RESUME_URL}
            download
            className={`hidden md:inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.75rem] transition-colors ${
              isDark
                ? "border-slate-700/60 text-slate-200 hover:border-cyan-400/80 hover:text-cyan-300"
                : "border-slate-300 text-slate-800 hover:border-cyan-500/80 hover:text-cyan-700"
            }`}
          >
            <span>Resume</span>
            <ArrowRight className="h-3 w-3" />
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.75rem] transition-colors ${
              isDark
                ? "border-slate-700/60 hover:border-cyan-400/80"
                : "border-slate-300 hover:border-cyan-400/80"
            }`}
          >
            {isDark ? (
              <MoonStar className="h-4 w-4" />
            ) : (
              <SunMedium className="h-4 w-4" />
            )}
            <span>{isDark ? "Dark" : "Light"}</span>
          </button>

          {/* Command palette trigger */}
          <button
            onClick={onOpenCommand}
            className={`hidden sm:flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.75rem] transition-colors ${
              isDark
                ? "border-slate-700/60 hover:border-cyan-400/80"
                : "border-slate-300 hover:border-cyan-400/80"
            }`}
          >
            <CommandIcon className="h-3.5 w-3.5" />
            <span>Command</span>
            <span className="rounded bg-slate-800/70 px-1.5 py-0.5 text-[0.65rem] font-mono text-slate-100">
              ⌘K
            </span>
          </button>
        </div>
      </nav>
    </motion.div>
  </header>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="relative group uppercase tracking-[0.16em] text-[0.7rem]"
  >
    <span className="group-hover:text-cyan-300 transition-colors">
      {children}
    </span>
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300" />
  </a>
);

export default Navbar;
