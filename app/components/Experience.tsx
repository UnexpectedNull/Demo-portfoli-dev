"use client";

const experience = [
  {
    year: "2025",
    role: "Senior Full-Stack Developer",
    desc: "Led a team to build scalable SaaS products using Next.js, Node.js, and cloud-native tech.",
  },
  {
    year: "2023",
    role: "Backend Engineer",
    desc: "Developed high-performance APIs in Rust and Node.js for fintech clients.",
  },
  {
    year: "2021",
    role: "Frontend Developer",
    desc: "Created beautiful, accessible UIs with React and Tailwind CSS.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto py-24 px-6">
      <h2 className="text-3xl font-bold mb-10 text-neutral-100 font-sans">Experience</h2>
      <div className="relative border-l-2 border-zinc-400 pl-8">
        {experience.map((exp, i) => (
          <div key={i} className="mb-12 relative">
            <span className="absolute -left-5 top-2 w-4 h-4 bg-gradient-to-r from-zinc-300 to-zinc-500 rounded-full border-2 border-white shadow-silver"></span>
            <div className="text-zinc-400 font-mono text-sm mb-1">{exp.year}</div>
            <div className="text-lg font-semibold text-neutral-100 mb-1">{exp.role}</div>
            <div className="text-neutral-300">{exp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
