// components/Section.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp } from "../utils/animations";

const Section = ({ id, title, eyebrow, children, isDark }) => (
  <section
    id={id}
    className="relative max-w-6xl mx-auto px-4 lg:px-6 py-16 sm:py-20"
  >
    {/* Soft gradient band behind section */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-cyan-500/6 via-emerald-500/0 to-transparent" />
    </div>

    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="mb-10 sm:mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        {eyebrow && (
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.25em] ${
              isDark
                ? "border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                : "border-cyan-500/30 bg-cyan-50 text-cyan-700"
            }`}
          >
            <motion.span
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3 w-3" />
            </motion.span>
            <span>{eyebrow}</span>
          </div>
        )}
        <h2
          className={`mt-3 text-2xl sm:text-3xl md:text-[2rem] font-semibold tracking-tight ${
            isDark ? "text-slate-50" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      </div>
    </motion.header>

    {children}
  </section>
);

export default Section;
