"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProjectImageCard({
  href,
  image,
  title,
  tags,
}: {
  href: string;
  image: string;
  title: string;
  tags: string[];
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
      className="group"
    >
      <Link href={href} className="block">
        {/* Image frame */}
        <div className="relative overflow-hidden rounded-3xl border bg-white/60 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 tracking-wider">
          {/* Aspect ratio */}
          <div className="relative aspect-20/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 520px"
              priority={false}
            />

            {/* Premium overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-black/10 dark:ring-white/10" />
            </div>
          </div>

          {/* Bottom content area */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-md font-semibold uppercase">
                {title}
              </h3>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                View →
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {tags.slice(0, 3).join(" • ")}
            </p>

            {/* Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1 text-[11px] text-gray-700 dark:text-gray-200 border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
