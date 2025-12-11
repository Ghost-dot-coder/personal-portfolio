// components/Journey.jsx
import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "../utils/animations";
import { timeline } from "../data/portfolioData";

const Journey = ({ isDark }) => (
  <Section
    id="timeline"
    title="Education & training"
    eyebrow="Journey"
    isDark={isDark}
  >
    <motion.div
      className="grid md:grid-cols-[2.5fr_2fr] gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <div className="relative">
        {/* infinite animated dot travelling on the timeline */}
        <motion.div
          className="absolute -left-1.5 top-0 bottom-0 w-3 pointer-events-none"
          animate={{ y: ["0%", "90%", "0%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
        </motion.div>

        <ol
          className={`relative border-l pl-4 space-y-8 ${
            isDark ? "border-slate-700/80" : "border-slate-200"
          }`}
        >
          {timeline.map((item) => (
            <li key={item.title} className="relative pl-4">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-linear-to-br from-cyan-400 to-emerald-400 border-2 border-slate-950" />
              <div className="space-y-1.5">
                <p className="text-[0.8rem] uppercase tracking-[0.18em] text-slate-500">
                  {item.period}
                </p>
                <h3
                  className={`text-sm sm:text-[0.98rem] font-semibold ${
                    isDark ? "text-slate-50" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[0.85rem] ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.place}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.bullets.map((b) => (
                    <span
                      key={b}
                      className={`text-[0.7rem] rounded-full px-2 py-0.5 ${
                        isDark
                          ? "bg-slate-950/80 text-slate-100"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div
        className={`rounded-3xl border p-5 sm:p-6 shadow-xl text-[0.9rem] space-y-3 ${
          isDark
            ? "border-slate-700/80 bg-slate-900/85 text-slate-200"
            : "border-slate-200 bg-white text-slate-700"
        }`}
      >
        <p className="text-[0.8rem] uppercase tracking-[0.2em] text-slate-500">
          How I see this
        </p>
        <p>
          For me, all this education and training is about building a strong
          base: understanding how things work under the hood and then
          translating that into simple user experiences.
        </p>
        <p>
          The timeline continues with experiments, side projects and
          collaborations—this site is just a snapshot of that.
        </p>
      </div>
    </motion.div>
  </Section>
);

export default Journey;
