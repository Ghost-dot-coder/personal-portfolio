// components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "../utils/animations";
import { certifications } from "../data/portfolioData";

const About = ({ isDark }) => (
  <Section
    id="about"
    title="A bit more context"
    eyebrow="About"
    isDark={isDark}
  >
    <motion.div
      className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-10 items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <div
        className={`space-y-4 text-[0.95rem] leading-relaxed ${
          isDark ? "text-slate-200" : "text-slate-700"
        }`}
      >
        <p>
          I enjoy building interfaces that are meant to be used, not just
          screens for screenshots—from canteen ordering flows to dashboards
          connected to actual hardware.
        </p>
        <p>
          On the web, I lean on{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-cyan-300" : "text-cyan-700"
            }`}
          >
            React + Tailwind + Framer Motion
          </span>{" "}
          for fast UI. On mobile,{" "}
          <span
            className={`font-semibold ${
              isDark ? "text-emerald-300" : "text-emerald-700"
            }`}
          >
            Flutter + Firebase
          </span>{" "}
          helps me ship real-time experiences.
        </p>
        <p>
          I like keeping things organised: clear file structures, predictable
          state, tiny reusable components and simple, readable naming.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard title="What I enjoy" isDark={isDark}>
          <ul className="space-y-1.5 text-[0.9rem]">
            <li>• Designing flows before coding</li>
            <li>• Micro-interactions</li>
            <li>• Clean layouts and spacing</li>
          </ul>
        </InfoCard>
        <InfoCard title="Certifications" isDark={isDark}>
          <ul className="space-y-1.5 text-[0.8rem]">
            {certifications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </motion.div>
  </Section>
);

const InfoCard = ({ title, children, isDark }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    className={`flex flex-col rounded-2xl border p-4 shadow-lg ${
      isDark
        ? "border-slate-700/80 bg-slate-900/85 text-slate-200"
        : "border-slate-200 bg-white text-slate-700"
    }`}
  >
    <p className="text-[0.75rem] uppercase tracking-[0.2em] text-slate-500 mb-2">
      {title}
    </p>
    {children}
  </motion.div>
);

export default About;
