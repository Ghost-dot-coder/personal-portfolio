// components/TechMarquee.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { marqueeItems } from "../data/portfolioData";

const TechMarquee = ({ isDark }) => {
  const duplicated = [...marqueeItems, ...marqueeItems];

  return (
    <div
      className={`border-y ${
        isDark
          ? "border-slate-800/60 bg-slate-950/90"
          : "border-slate-200 bg-slate-100/80"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center gap-4 overflow-hidden">
        <span className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.25em] text-slate-500 shrink-0">
          <Sparkles className="h-3 w-3" />
          TOOLKIT
        </span>
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {duplicated.map((item, idx) => (
              <span
                key={idx}
                className={`text-[0.8rem] px-3 py-1 rounded-full border whitespace-nowrap ${
                  isDark
                    ? "border-slate-700/50 bg-slate-900/80 text-slate-100"
                    : "border-slate-300 bg-white text-slate-700"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
