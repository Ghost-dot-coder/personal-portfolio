// components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Mail, ArrowRight } from "lucide-react";
import Section from "./Section";
import { fadeUp } from "../utils/animations";

const Contact = ({ onEmailClick, isDark }) => (
  <Section
    id="contact"
    title="Say hi or share something cool"
    eyebrow="Contact"
    isDark={isDark}
  >
    <motion.div
      className="grid md:grid-cols-[3fr_2.2fr] gap-10 items-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`space-y-4 rounded-3xl border p-5 sm:p-6 shadow-xl ${
          isDark
            ? "border-slate-700/80 bg-slate-900/85"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Name" isDark={isDark}>
            <input
              className={`w-full rounded-xl border px-3 py-2.5 text-[0.85rem] outline-none focus:border-cyan-400 ${
                isDark
                  ? "border-slate-700 bg-slate-950 text-slate-100"
                  : "border-slate-300 bg-white text-slate-900"
              }`}
              placeholder="Your name"
            />
          </Field>
          <Field label="Email" isDark={isDark}>
            <input
              type="email"
              className={`w-full rounded-xl border px-3 py-2.5 text-[0.85rem] outline-none focus:border-cyan-400 ${
                isDark
                  ? "border-slate-700 bg-slate-950 text-slate-100"
                  : "border-slate-300 bg-white text-slate-900"
              }`}
              placeholder="you@example.com"
            />
          </Field>
        </div>
        <Field label="Message" isDark={isDark}>
          <textarea
            rows={4}
            className={`w-full rounded-xl border px-3 py-2.5 text-[0.85rem] outline-none focus:border-cyan-400 resize-none ${
              isDark
                ? "border-slate-700 bg-slate-950 text-slate-100"
                : "border-slate-300 bg-white text-slate-900"
            }`}
            placeholder="Ideas, projects, questions, collaborations..."
          />
        </Field>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <motion.button
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="px-6 py-2.5 rounded-full text-[0.85rem] font-semibold bg-linear-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-lg shadow-cyan-500/30 inline-flex items-center gap-2"
          >
            <span>Send</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
          <button
            type="button"
            onClick={onEmailClick}
            className={`text-[0.85rem] opacity-80 hover:opacity-100 inline-flex items-center gap-1.5 ${
              isDark ? "hover:text-cyan-300" : "hover:text-cyan-700"
            }`}
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Or email me directly:</span>
            <span
              className={`font-mono ${
                isDark ? "text-cyan-300" : "text-cyan-700"
              }`}
            >
              manubabychan02@gmail.com
            </span>
          </button>
        </div>
      </form>

      <div
        className={`space-y-3 text-[0.9rem] leading-relaxed ${
          isDark ? "text-slate-200" : "text-slate-700"
        }`}
      >
        <p>
          I like chatting about UI, design systems, React patterns, Flutter
          experiments or anything that mixes creativity with code.
        </p>
        <p>Places where I share and explore more:</p>
        <ul className="space-y-2 text-[0.9rem]">
          <li className="flex items-center gap-2">
            <Github
              className={`h-4 w-4 ${
                isDark ? "text-cyan-300" : "text-cyan-700"
              }`}
            />
            <span className="text-slate-400">GitHub</span>{" "}
            <a
              href="https://github.com/Ghost-dot-coder"
              target="_blank"
              rel="noreferrer"
              className={`hover:underline ${
                isDark
                  ? "text-cyan-300 hover:text-cyan-200"
                  : "text-cyan-700 hover:text-cyan-800"
              }`}
            >
              github.com/Ghost-dot-coder
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin
              className={`h-4 w-4 ${
                isDark ? "text-cyan-300" : "text-cyan-700"
              }`}
            />
            <span className="text-slate-400">LinkedIn</span>{" "}
            <a
              href="https://linkedin.com/manu-babychan"
              target="_blank"
              rel="noreferrer"
              className={`hover:underline ${
                isDark
                  ? "text-cyan-300 hover:text-cyan-200"
                  : "text-cyan-700 hover:text-cyan-800"
              }`}
            >
              linkedin.com/manu-babychan
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone
              className={`h-4 w-4 ${
                isDark ? "text-cyan-300" : "text-cyan-700"
              }`}
            />
            <span className="text-slate-400">Phone</span>{" "}
            <span
              className={
                isDark ? "text-slate-100" : "text-slate-800 font-medium"
              }
            >
              +91 944770 6386
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  </Section>
);

const Field = ({ label, children, isDark }) => (
  <label className="block space-y-1">
    <span className="text-[0.8rem] font-medium text-slate-500">{label}</span>
    {children}
  </label>
);

export default Contact;
