import Link from "next/link";
import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden py-20 sm:py-24 tracking-wider">

      {/* ===== Gradient Background ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-950 via-black to-green-950" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-12">

          {/* ===== LEFT ===== */}
          <aside className="lg:col-span-4">

            <div className="h-px w-full bg-white/10" />

            <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
              About Me
            </h1>

            <p className="mt-4 text-sm text-gray-300">
              Junior Developer • Frontend + Full-Stack MERN
            </p>

            <div className="mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/10 backdrop-blur"
              >
                View Portfolio
              </Link>
            </div>
          </aside>

          {/* ===== RIGHT ===== */}
          <section className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 
                            bg-white/5 p-7 backdrop-blur sm:p-10">

              <p className="leading-7 text-gray-200">
                I'm <span className="font-semibold text-white">Aswani</span>,
                a junior developer focused on building clean, modern
                web applications. I'm applying for both
                <span className="font-medium text-emerald-400"> Frontend </span>
                and
                <span className="font-medium text-emerald-400">
                  {" "}Full-Stack MERN
                </span>{" "}
                roles.
              </p>

              <p className="mt-4 leading-7 text-gray-200">
                I enjoy turning designs into responsive UI using
                React / Next.js and Tailwind CSS, focusing on clarity,
                usability, and maintainable code.
              </p>

              <p className="mt-4 leading-7 text-gray-200">
                I've built real projects including a realtime chat
                platform (Socket.io) and a job portal system with
                authentication, dashboards, and database workflows.
              </p>

              {/* ===== SKILLS CARDS ===== */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">
                    Core Skills
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    <li>• React / Next.js UI</li>
                    <li>• Tailwind layouts</li>
                    <li>• REST APIs + JWT</li>
                    <li>• MongoDB schema design</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">
                    Currently Improving
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-gray-300">
                    <li>• System design</li>
                    <li>• Performance & SEO</li>
                    <li>• Testing practices</li>
                    <li>• Communication skills</li>
                  </ul>
                </div>
              </div>

              {/* ===== CTA ===== */}
              <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-sm text-gray-300">
                  Open to Junior / Entry roles
                </p>

                <Link
                  href="/contact"
                  className="rounded-full bg-emerald-500 px-6 py-2 text-sm text-white hover:bg-emerald-400"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
