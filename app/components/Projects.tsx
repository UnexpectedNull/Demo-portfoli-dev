"use client";
import { Card } from "./UI";
import Image from "next/image";
import { Badge } from "./UI/Badge";

const projects = [
  {
    title: "Project One",
    desc: "A modern web app built with Next.js and Tailwind CSS.",
  img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=480&h=320&fit=crop&q=80",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/johndoe/project1",
    demo: "#",
  },
  {
    title: "Project Two",
    desc: "A blazing fast API server in Node.js and Rust.",
  img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=480&h=320&fit=crop&q=80",
    stack: ["Node.js", "Rust"],
    github: "https://github.com/johndoe/project2",
    demo: "#",
  },
  {
    title: "Project Three",
    desc: "A beautiful Python data dashboard.",
  img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=480&h=320&fit=crop&q=80",
    stack: ["Python", "React"],
    github: "https://github.com/johndoe/project3",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-neutral-100 font-sans">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Card key={p.title}>
            <Image src={p.img} alt={p.title} width={480} height={320} className="rounded-xl mb-4 border border-zinc-800" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">{p.title}</h3>
            <p className="text-neutral-300 mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {p.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 text-black hover:shadow-lg transition">GitHub</a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="rounded-2xl px-4 py-2 font-semibold bg-gradient-to-r from-zinc-300 to-zinc-500 text-black hover:shadow-lg transition">Live Demo</a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
