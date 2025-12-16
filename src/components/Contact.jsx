// components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Section from "./Section";
import { fadeUp } from "../utils/animations";

const FORMSPREE_URL = "https://formspree.io/f/xrbnwgow"; 

const Contact = ({ isDark }) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = React.useState("idle"); 
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
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
        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className={`space-y-4 rounded-3xl border p-5 sm:p-6 shadow-xl ${
            isDark
              ? "border-slate-700/80 bg-slate-900/85"
              : "border-slate-200 bg-white"
          }`}
        >
          {/* NAME + EMAIL */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name} isDark={isDark}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass(isDark, errors.name)}
                placeholder="Your name"
              />
            </Field>

            <Field label="Email" error={errors.email} isDark={isDark}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass(isDark, errors.email)}
                placeholder="you@example.com"
              />
            </Field>
          </div>

          {/* MESSAGE */}
          <Field label="Message" error={errors.message} isDark={isDark}>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass(isDark, errors.message)}
              placeholder="Ideas, projects, questions, collaborations..."
            />
          </Field>

          {/* STATUS */}
          {status === "success" && (
            <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-emerald-300 text-sm">
              <CheckCircle className="h-4 w-4" />
              Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-rose-300 text-sm">
              Something went wrong. Please try again.
            </div>
          )}

          {/* BUTTON */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            disabled={status === "sending"}
            className={`w-fit px-6 py-2.5 rounded-full text-[0.85rem] font-semibold flex items-center gap-2 ${
              status === "sending"
                ? "opacity-60 cursor-not-allowed"
                : "bg-linear-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-lg"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
        </form>

        {/* CONTACT INFO */}
        <div
          className={`space-y-3 text-[0.9rem] ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          <p>
            I like chatting about UI, React patterns, Flutter experiments or
            anything creative.
          </p>

          <ul className="space-y-2">
            <Info
              icon={Github}
              text="github.com/Ghost-dot-coder"
              link="https://github.com/Ghost-dot-coder"
              isDark={isDark}
            />
            <Info
              icon={Linkedin}
              text="linkedin.com/manu-babychan"
              link="https://linkedin.com/manu-babychan"
              isDark={isDark}
            />
            <Info icon={Phone} text="+91 944770 6386" isDark={isDark} />
            <Info icon={Mail} text="manubabychan02@gmail.com" isDark={isDark} />
          </ul>
        </div>
      </motion.div>
    </Section>
  );
};

const inputClass = (isDark, error) =>
  `w-full rounded-xl border px-3 py-2.5 text-[0.85rem] outline-none resize-none ${
    error
      ? "border-rose-500/80"
      : isDark
      ? "border-slate-700"
      : "border-slate-300"
  } ${isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"}`;

const Field = ({ label, error, children, isDark }) => (
  <label className="block space-y-1">
    <span className="text-[0.8rem] font-medium text-slate-500">{label}</span>
    {children}
    {error && (
      <span
        className={`text-[0.75rem] ${
          isDark ? "text-rose-300" : "text-rose-600"
        }`}
      >
        {error}
      </span>
    )}
  </label>
);

const Info = ({ icon: Icon, text, link, isDark }) => (
  <li className="flex items-center gap-2">
    <Icon className={`h-4 w-4 ${isDark ? "text-cyan-300" : "text-cyan-700"}`} />
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </li>
);

export default Contact;
