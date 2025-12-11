// components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import { fadeUp } from "../utils/animations";
import { projects } from "../data/portfolioData";

const Projects = ({ isDark }) => (
  <Section
    id="projects"
    title="Selected projects"
    eyebrow="Work"
    isDark={isDark}
  >
    <motion.div
      className="grid md:grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.title}
          project={project}
          i={idx}
          isDark={isDark}
        />
      ))}
    </motion.div>
  </Section>
);

const ProjectCard = ({ project, i, isDark }) => (
  <motion.article
    custom={i}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    whileHover={{ y: -6, scale: 1.01 }}
    className={`group relative rounded-3xl border p-4 sm:p-5 shadow-xl overflow-hidden ${
      isDark
        ? "border-slate-700/70 bg-slate-900/85"
        : "border-slate-200 bg-white"
    }`}
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-400 via-sky-400 to-emerald-400" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/8 via-emerald-500/6 to-transparent transition-opacity duration-300" />

    <div className="relative space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3
          className={`text-[1.05rem] font-semibold ${
            isDark ? "text-slate-50" : "text-slate-900"
          }`}
        >
          {project.title}
        </h3>
        <span
          className={`text-[0.75rem] px-2.5 py-1 rounded-full border ${
            isDark
              ? "border-slate-600/70 text-slate-200 bg-slate-950/60"
              : "border-slate-300 text-slate-700 bg-slate-100"
          }`}
        >
          {project.type}
        </span>
      </div>
      <p
        className={`text-[0.85rem] font-medium ${
          isDark ? "text-cyan-300" : "text-cyan-700"
        }`}
      >
        {project.role}
      </p>
      <p
        className={`text-[0.9rem] ${
          isDark ? "text-slate-300" : "text-slate-700"
        }`}
      >
        {project.description}
      </p>
      <p className="text-[0.8rem] text-slate-400">{project.highlight}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`text-[0.7rem] px-2.5 py-1 rounded-full border ${
              isDark
                ? "bg-slate-950/80 text-slate-100 border-slate-600"
                : "bg-slate-100 text-slate-800 border-slate-300"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1 text-[0.8rem] mt-2 ${
            isDark
              ? "text-cyan-300 hover:text-cyan-200"
              : "text-cyan-700 hover:text-cyan-800"
          }`}
        >
          View project <ArrowRight className="h-3 w-3" />
        </a>
      )}
    </div>
  </motion.article>
);

export default Projects;
