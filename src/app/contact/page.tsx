"use client";

import { useState } from "react";
import { Container } from "@/components/container";

export default function ContactPage() {
  const email = "aswanika05@gmail.com";

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <main className="relative overflow-hidden py-20 sm:py-24">

      {/* Gradient BG */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-emerald-950 to-black" />

      <Container>

        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Contact
        </h1>

        <p className="mt-3 max-w-xl text-gray-300">
          If you're hiring or would like to discuss potential opportunities, please feel free to reach out. I'd love to connect.

        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-10">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="mt-1 font-medium text-white">
                {email}
              </p>
            </div>

            <button
              onClick={copyEmail}
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white hover:bg-white/10"
            >
              {copied ? "Copied ✅" : "Copy"}
            </button>

          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            <a
              href={`mailto:${email}`}
              className="rounded-full bg-emerald-500 px-6 py-2 text-sm text-white hover:bg-emerald-400"
            >
              Email Me
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              className="rounded-full border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/10"
            >
              Open Gmail
            </a>

          </div>

        </div>

      </Container>
    </main>
  );
}
