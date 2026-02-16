"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FrontendProjectCard({
  title,
  image,
  tech,
  live,
  github,
}: {
  title: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
}) {
  const subtitle = tech.slice(0, 3).join(" • ");

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22 }} className="group">
      <div className="overflow-hidden rounded-3xl border bg-white/60 shadow-sm backdrop-blur hover:shadow-md transition-shadow dark:border-white/10 dark:bg-white/5">
        {/* Image */}
        <div className="relative aspect-20/10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 520px"
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>

          {(live || github) && (
            <div className="mt-4 flex gap-3 text-sm">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-3 py-1 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/10"
                >
                  Live
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border px-3 py-1 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/10"
                >
                  Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
