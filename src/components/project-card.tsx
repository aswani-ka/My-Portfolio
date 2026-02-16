import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group rounded-xl border p-5 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-3 tracking-wider">
        <div>
          <h3 className="text-lg font-semibold group-hover:underline">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
