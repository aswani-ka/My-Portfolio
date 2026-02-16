"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 tracking-wider">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="grid gap-12 md:grid-cols-12 md:items-center"
        >
          {/* LEFT */}
          <div className="md:col-span-7">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/90 backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Junior Full-Stack MERN Roles
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-wider text-white sm:text-6xl">
              Building smart &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                scalable
              </span>{" "}
              web solutions.
            </h1>

            <p className="mt-5 max-w-xl text-white/75 leading-7">
              I'm Aswani — a Junior Full-Stack MERN developer building real-world products
              with modern UI, scalable backend systems, and production-ready architecture.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:opacity-95"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="md:col-span-5"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glass card */}
              <div
                className="rounded-[28px] border border-white/12 bg-white/5 p-4 shadow-2xl shadow-emerald-900/25 backdrop-blur"
              >
                {/* Preview image */}
                <div className="relative aspect-20/10 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="/projects/real-time-chat-page.png"
                    alt="Featured project preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Top tag */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur">
                    Featured Project
                  </div>
                </div>

                {/* Text + chips */}
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">
                    Realtime Chat Application
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Next.js • Node • MongoDB • Socket.io
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "Express", "MongoDB", "Socket.io"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="mt-5 flex gap-3">
                    <Link
                      href="/projects/realtime-chat"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-400 transition"
                    >
                      View Case Study
                    </Link>

                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
                    >
                      All Projects
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -left-8 bottom-10 h-20 w-20 rounded-full border border-emerald-400/20" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-green-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Base background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-emerald-950 via-black to-green-950" />
    </section>
  );
}
