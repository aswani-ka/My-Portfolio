import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="mt-10 border-t py-12 dark:border-white/10  tracking-wider">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-md font-semibold uppercase">
              Aswani K A
            </p>
            <p className="mt-2 text-md text-gray-600 dark:text-gray-300">
              Junior Developer • Frontend + Full-Stack MERN
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 text-md font-medium text-white hover:opacity-90"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              className="rounded-full border px-5 py-2 text-md hover:bg-white/10 dark:border-white/15"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t pt-6 text-sm dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600 dark:text-gray-300 text-center mt-10 sm:mt-0 sm:text-left">
            © {new Date().getFullYear()} Aswani K A. All rights reserved.
          </p>

          <div className="flex gap-4 text-md">
            <a
              href="https://github.com/aswani-ka"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aswani-k-a-5b87841b9/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
