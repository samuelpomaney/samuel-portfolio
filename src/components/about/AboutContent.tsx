import Link from "next/link";

import PrimaryButton from "../buttons/PrimaryButton";

export default function AboutContent() {
  return (
    <div className="flex justify-center">

      <div className="max-w-2xl">

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[var(--primary)]">

          WHO I AM

        </p>

        <h2 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">

          Building{" "}

          <span className="text-[var(--primary)]">

            technology

          </span>

          ,

          <br />

          growing{" "}

          <span className="text-[var(--primary)]">

            businesses

          </span>

          .

          <br />



        </h2>

        <p className="mt-8 text-lg leading-9 text-[var(--muted)]">

          I'm Samuel Dziedzorm Pomaney,
          a Computer Science graduate with a strong foundation
          in cybersecurity, networking, software engineering, IT support, and marketing.

        </p>

        <p className="mt-6 text-lg leading-9 text-[var(--muted)]">

          My passion is creating secure technology solutions while helping
          organisations improve their online presence, strengthen their
          brands and grow through modern digital marketing strategies.

        </p>

        <p className="mt-6 text-lg leading-9 text-[var(--muted)]">

          Whether I'm securing infrastructure, building web applications,
          solving technical problems or creating marketing campaigns, my
          goal is always the same — deliver practical solutions that create
          real value.

        </p>

        <div className="mt-12 flex flex-wrap gap-4">

          <PrimaryButton href="/Samuel-Pomaney-Technology-CV.pdf">

            Technology CV

          </PrimaryButton>

          <Link
            href="/Samuel-Pomaney-Growth-CV.pdf"
            className="inline-flex items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-7 py-3 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-[var(--primary)] hover:scale-105"
          >

            Growth CV

          </Link>

        </div>

      </div>

    </div>
  );
}