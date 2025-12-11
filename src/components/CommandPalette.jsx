// components/CommandPalette.jsx
import React from "react";
import { motion } from "framer-motion";
import { Command as CommandIcon } from "lucide-react";

const CommandPalette = ({ open, onClose, onAction, isDark }) => {
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    const listener = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [open, onClose]);

  if (!open) return null;

  const actions = [
    { label: "Go to Home", action: "goto:hero", group: "Navigation" },
    { label: "Go to Work", action: "goto:projects", group: "Navigation" },
    { label: "Go to Stack", action: "goto:skills", group: "Navigation" },
    { label: "Go to About", action: "goto:about", group: "Navigation" },
    { label: "Go to Contact", action: "goto:contact", group: "Navigation" },
    { label: "Toggle theme", action: "toggle-theme", group: "Quick actions" },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-60 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-black/45" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={`relative w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden ${
          isDark
            ? "bg-slate-950/95 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <div
          className={`flex items-center gap-2 px-3 py-2.5 border-b ${
            isDark ? "border-slate-700/70" : "border-slate-200"
          }`}
        >
          <CommandIcon className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-xs text-slate-500">Jump around</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections or actions…"
            className="flex-1 bg-transparent outline-none text-xs px-1"
          />
          <span className="text-[0.65rem] px-2 py-1 rounded bg-slate-800/70 text-slate-300 font-mono">
            Esc
          </span>
        </div>
        <div className="max-h-72 overflow-y-auto text-xs">
          {filtered.length === 0 && (
            <div className="px-3 py-3 text-slate-500">No results.</div>
          )}
          {filtered.length > 0 && (
            <div className="py-1">
              {["Navigation", "Quick actions"].map((group) => {
                const groupItems = filtered.filter((a) => a.group === group);
                if (!groupItems.length) return null;
                return (
                  <div key={group}>
                    <p className="px-3 mt-2 mb-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                      {group}
                    </p>
                    {groupItems.map((item) => (
                      <button
                        key={item.action}
                        onClick={() => onAction(item.action)}
                        className={`w-full text-left px-3 py-2 flex items-center justify-between ${
                          isDark
                            ? "hover:bg-slate-800/70"
                            : "hover:bg-slate-100"
                        }`}
                      >
                        <span
                          className={
                            isDark ? "text-slate-100" : "text-slate-800"
                          }
                        >
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CommandPalette;
