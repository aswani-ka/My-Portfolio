"use client";

import { Container } from "./container";
import { Reveal } from "./reveal";

const skills = [
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"] },
  { title: "Backend", items: ["Node.js", "Express", "JWT Auth", "Socket.io"] },
  { title: "Database & Tools", items: ["MongoDB", "Mongoose", "Git/GitHub", "Deployment"] },
];

export function SkillsStrip() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <Reveal>
          <div className="rounded-3xl border bg-white/60 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Skills
            </h2>
            <p className="mt-2 max-w-2xl text-md text-gray-600 dark:text-gray-300">
              A focused stack for building modern web apps end-to-end.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border bg-white/40 p-5 dark:border-white/10 dark:bg-white/5 text-md"
                >
                  <p className="text-sm font-semibold">{s.title}</p>
                  <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
                    {s.items.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
