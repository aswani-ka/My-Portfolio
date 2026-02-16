"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "./container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur bg-white/70 dark:bg-emerald-950/30 dark:border-white/10"
    >
      <Container>
        <div className="flex h-14 items-center justify-between tracking-wider">

          {/* Logo */}
          <Link
            href="/"
            onClick={close}
            className="text-md font-semibold"
          >
            ASWANI K A
          </Link>

          {/* ================= Desktop Nav ================= */}
          <nav className="hidden items-center gap-6 text-md text-gray-700 dark:text-gray-200 md:flex">

            <Link
              href="/about"
              className="transition hover:text-black dark:hover:text-white"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="transition hover:text-black dark:hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-black dark:hover:text-white"
            >
              Contact
            </Link>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-4 py-1.5 transition hover:bg-gray-50 dark:border-white/15 dark:hover:bg-white/10"
            >
              Resume
            </a>

            <ThemeToggle />
          </nav>

          {/* ================= Mobile Toggle ================= */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="relative h-10 w-10 rounded-full border transition hover:bg-gray-50 dark:border-white/15 dark:hover:bg-white/10
              "
            >
              <span
                className={`absolute left-3 right-3 h-0.5 bg-black transition-all dark:bg-white
                ${open ? "top-5 rotate-45" : "top-3"}`}
              />
              <span
                className={`absolute left-3 right-3 h-0.5 bg-black transition-all dark:bg-white
                ${open ? "opacity-0" : "top-5"}`}
              />
              <span
                className={`absolute left-3 right-3 h-0.5 bg-black transition-all dark:bg-white
                ${open ? "top-5 -rotate-45" : "top-7"}`}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <div className="border-t bg-white/90 backdrop-blur dark:bg-black/60 dark:border-white/10 md:hidden">
          <Container>
            <div className="flex flex-col gap-2 py-4 text-sm text-gray-700 dark:text-gray-200">

              <Link
                href="/about"
                onClick={close}
                className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                About
              </Link>

              <Link
                href="/projects"
                onClick={close}
                className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                onClick={close}
                className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                Contact
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                Resume
              </a>

            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
