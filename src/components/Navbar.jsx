// components/Navbar.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SunMedium,
  MoonStar,
  ArrowRight,
  Code2,
  Menu,
  X,
} from "lucide-react";

const Navbar = ({ isDark, toggleTheme, RESUME_URL }) => {
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
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
        <nav className="relative flex items-center justify-between h-14 sm:h-16">
          {/* Left */}
          <div className="flex items-center gap-3">
            <motion.span
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-emerald-500 text-sm font-semibold"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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

          {/* Right - Desktop */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4">
            <ul className="flex items-center gap-6 text-[0.8rem] font-medium">
              <NavLink href="#hero">Home</NavLink>
              <NavLink href="#projects">Work</NavLink>
              <NavLink href="#skills">Stack</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#timeline">Journey</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>

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

          </div>

          {/* Right - Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`h-9 w-9 inline-flex items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-slate-700/60 hover:border-cyan-400/80"
                  : "border-slate-300 hover:border-cyan-400/80"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <MoonStar className="h-4 w-4" />
              ) : (
                <SunMedium className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={() => setOpen((p) => !p)}
              className={`h-9 w-9 inline-flex items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-slate-700/60 hover:border-cyan-400/80"
                  : "border-slate-300 hover:border-cyan-400/80"
              }`}
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <>
                {/* click-away backdrop */}
                <motion.button
                  aria-label="Close menu"
                  className="fixed inset-0 z-40 bg-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={close}
                />
                <motion.div
                  className={`absolute right-0 top-[calc(100%+10px)] z-50 w-[92vw] max-w-sm rounded-2xl border shadow-2xl overflow-hidden ${
                    isDark
                      ? "bg-slate-950/95 border-slate-700"
                      : "bg-white/95 border-slate-200"
                  } backdrop-blur-2xl`}
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <div className="p-3">
                    <p
                      className={`px-2 pb-2 text-[0.7rem] uppercase tracking-[0.22em] ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Navigation
                    </p>

                    <div className="grid gap-1">
                      <MobileItem onClick={() => handleNav("hero")} isDark={isDark}>
                        Home
                      </MobileItem>
                      <MobileItem
                        onClick={() => handleNav("projects")}
                        isDark={isDark}
                      >
                        Work
                      </MobileItem>
                      <MobileItem onClick={() => handleNav("skills")} isDark={isDark}>
                        Stack
                      </MobileItem>
                      <MobileItem onClick={() => handleNav("about")} isDark={isDark}>
                        About
                      </MobileItem>
                      <MobileItem
                        onClick={() => handleNav("timeline")}
                        isDark={isDark}
                      >
                        Journey
                      </MobileItem>
                      <MobileItem
                        onClick={() => handleNav("contact")}
                        isDark={isDark}
                      >
                        Contact
                      </MobileItem>
                    </div>

                    <div
                      className={`my-3 h-px ${
                        isDark ? "bg-slate-800" : "bg-slate-200"
                      }`}
                    />

                    <div className="grid gap-2">
                      <a
                        href={RESUME_URL}
                        download
                        onClick={close}
                        className={`inline-flex items-center justify-between rounded-xl border px-3 py-2 text-sm transition-colors ${
                          isDark
                            ? "border-slate-700 bg-slate-900/60 text-slate-100 hover:border-cyan-400/70"
                            : "border-slate-200 bg-white text-slate-800 hover:border-cyan-500/70"
                        }`}
                      >
                        <span>Download Resume</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>

                  
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </motion.div>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="relative group uppercase tracking-[0.16em] text-[0.7rem]">
    <span className="group-hover:text-cyan-300 transition-colors">{children}</span>
    <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-linear-to-r from-cyan-400 to-emerald-400 rounded-full transition-all duration-300" />
  </a>
);

const MobileItem = ({ children, onClick, isDark }) => (
  <button
    onClick={onClick}
    className={`w-full text-left rounded-xl px-3 py-2 text-sm transition-colors ${
      isDark
        ? "text-slate-100 hover:bg-slate-800/70"
        : "text-slate-800 hover:bg-slate-100"
    }`}
  >
    {children}
  </button>
);

export default Navbar;
