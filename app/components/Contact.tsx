"use client";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    icon: Github,
    href: "https://github.com/johndoe",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/johndoe",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:john@doe.com",
    label: "Email",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto py-24 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-neutral-100 font-sans">Let’s Work Together</h2>
      <div className="flex justify-center gap-6 mb-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-zinc-400 text-zinc-200 hover:shadow-silver hover:border-zinc-300 transition"
            aria-label={l.label}
          >
            <l.icon size={28} />
          </a>
        ))}
      </div>
      <a href="mailto:john@doe.com" className="rounded-2xl px-6 py-3 font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 text-black hover:shadow-lg transition inline-block">
        Contact Me
      </a>
    </section>
  );
}
