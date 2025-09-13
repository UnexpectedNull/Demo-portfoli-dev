"use client";
import Image from "next/image";
import { Badge } from "./UI";

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Rust", "Tailwind CSS", "Framer Motion"
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=320&h=320&fit=facearea&facepad=2&q=80"
          alt="John Doe Avatar"
          width={180}
          height={180}
          className="rounded-full border-4 border-zinc-400 shadow-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-neutral-100 font-sans">About Me</h2>
        <p className="text-neutral-300 mb-6 max-w-xl">
          Hi! I'm John Doe, a passionate full-stack developer focused on building modern, performant, and beautiful web applications. I love solving problems, learning new technologies, and collaborating with others to create impactful products.
        </p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
