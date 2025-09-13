"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-neutral-950 to-black relative pt-24" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-100 font-sans mb-4">
          John Doe — <span className="bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">Full-Stack Developer & Problem Solver</span>
        </h1>
        <p className="text-lg md:text-2xl text-neutral-300 mb-8 font-sans">
          Building modern web apps with clean design & solid code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#projects" className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 text-black hover:shadow-lg transition">
            View Projects
          </Link>
          <Link href="#contact" className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 text-black hover:shadow-lg transition">
            Contact Me
          </Link>
        </div>
      </motion.div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Subtle animated grid background (Framer Motion or CSS) */}
        <svg className="w-full h-full opacity-10" width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
