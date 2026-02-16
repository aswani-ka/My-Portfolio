"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProjectCardMotion({
  href,
  title,
  tagline,
  image,
  tags,
}: {
  href: string;
  title: string;
  tagline: string;
  image?: string;
  tags: string[];
}) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.22 }} className="group">
      <Link
        href={href}
        className="block overflow-hidden rounded-3xl border bg-white/60 shadow-sm backdrop-blur hover:shadow-md transition-shadow dark:border-white/10 dark:bg-white/5"
      >
        {/* image */}
        {image && (
          <div className="relative aspect-20/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
          </div>
        )}

        <div className="p-5 sm:p-6  tracking-wider">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold uppercase">{title}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">View →</span>
          </div>

          <p className="mt-2 text-md text-gray-600 dark:text-gray-300">{tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-[11px] border-black/10 bg-white/60 text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
