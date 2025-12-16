import React from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const RESUME_URL = "/Manu_Babychan_Resume.pdf";

function App() {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = React.useState("dark");

  const isDark = theme === "dark";

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const scrollToSection = React.useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:manubabychan02@gmail.com";
  };


  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-linear-to-r from-cyan-400 via-emerald-400 to-teal-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <motion.div
          className={`absolute -top-32 left-10 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/20" : "bg-cyan-400/18"
          }`}
          animate={{ x: [-30, 20, -10], y: [0, 30, -10] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute -bottom-24 right-10 h-72 w-72 rounded-full blur-3xl ${
            isDark ? "bg-emerald-500/18" : "bg-emerald-400/18"
          }`}
          animate={{ x: [0, -20, 10], y: [10, -20, 15] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        RESUME_URL={RESUME_URL}
        onOpenCommand={() => setIsCommandOpen(true)}
      />

      {/* Main content */}
      <main className="pt-16 pb-20">
        <Hero isDark={isDark} onNavigate={scrollToSection} />
        <TechMarquee isDark={isDark} />
        <Projects isDark={isDark} />
        <Skills isDark={isDark} />
        <About isDark={isDark} />
        <Journey isDark={isDark} />
        <Contact isDark={isDark} onEmailClick={handleEmailClick} />
      </main>

      {/* Footer */}
      <footer
        className={`border-t py-6 transition-colors duration-500 ${
          isDark ? "border-slate-800/60" : "border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.8rem] opacity-80">
          <p>
            © {new Date().getFullYear()} · Designed &amp; built by Manu Babychan
          </p>
          <p className="flex gap-4">
            <a
              href="https://github.com/Ghost-dot-coder"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/manu-babychan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
