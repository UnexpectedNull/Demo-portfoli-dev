"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-900"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="font-bold text-xl tracking-tight text-neutral-100">John Doe</span>
        <ul className="flex gap-6 text-neutral-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-white transition drop-shadow-[0_0_6px_rgba(200,200,200,0.15)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
