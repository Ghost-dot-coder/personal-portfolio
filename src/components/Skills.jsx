// components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "../utils/animations";
import { skills } from "../data/portfolioData";

const Skills = ({ isDark }) => (
  <Section
    id="skills"
    title="Tech I use comfortably"
    eyebrow="Stack"
    isDark={isDark}
  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="space-y-7"
    >
      <div
        className={`max-w-2xl text-[0.95rem] leading-relaxed ${
          isDark ? "text-slate-200" : "text-slate-700"
        }`}
      >
        <p>
          My focus is frontend and UI, but I like knowing how the whole thing
          fits together—from API requests to error states and loading skeletons.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {Object.entries(skills).map(([category, items], idx) => (
          <SkillGroup
            key={category}
            category={category}
            items={items}
            i={idx}
            isDark={isDark}
          />
        ))}
      </div>
    </motion.div>
  </Section>
);

const SkillGroup = ({ category, items, i, isDark }) => (
  <motion.div
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    whileHover={{ y: -4 }}
    className={`group relative rounded-2xl border p-4 shadow-lg overflow-hidden ${
      isDark
        ? "border-slate-700/80 bg-slate-900/80"
        : "border-slate-200 bg-white"
    }`}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/8 via-emerald-500/6 to-transparent transition-opacity duration-300" />
    <div className="relative">
      <p
        className={`text-sm font-semibold mb-2 ${
          isDark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {category}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <motion.span
            key={item}
            whileHover={{ y: -2, scale: 1.03 }}
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.8rem] ${
              isDark
                ? "border-slate-600 bg-slate-950/80 text-slate-100"
                : "border-slate-200 bg-slate-50 text-slate-800"
            }`}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Skills;
