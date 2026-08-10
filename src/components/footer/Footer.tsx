import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--glass-border)] py-12 lg:py-16">

      <Container>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}

          <div className="max-w-md">

            <div className="flex items-center gap-3">

              <Image
                src="/spydex-logo.svg"
                alt="SPYDEX"
                width={34}
                height={34}
              />

              <span className="text-2xl font-bold tracking-wide">
                SPYDEX
              </span>

            </div>

            <p className="mt-5 leading-8 text-sm text-[var(--muted)]">

              SPYDEX builds secure digital experiences through
              website development, cybersecurity solutions,
              IT consulting and technology-driven growth strategies
              designed to help businesses innovate confidently.

            </p>

          </div>

          {/* Navigation */}

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">

            <Link
              href="#about"
              className="transition hover:text-[var(--primary)]"
            >
              About
            </Link>

            <Link
              href="#career-paths"
              className="transition hover:text-[var(--primary)]"
            >
              Career Paths
            </Link>

            <Link
              href="#projects"
              className="transition hover:text-[var(--primary)]"
            >
              Projects
            </Link>

            <Link
              href="#experience"
              className="transition hover:text-[var(--primary)]"
            >
              Experience
            </Link>

            <Link
              href="#certificates"
              className="transition hover:text-[var(--primary)]"
            >
              Certificates
            </Link>

            <Link
              href="#contact"
              className="transition hover:text-[var(--primary)]"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 border-t border-[var(--glass-border)] pt-8 flex flex-col gap-4 text-center text-sm text-[var(--muted)] lg:flex-row lg:items-center lg:justify-between">

          <p>
            © {year} Samuel Dziedzorm Pomaney. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by <span className="font-semibold">Samuel Dziedzorm Pomaney</span> under <span className="font-semibold">SPYDEX</span>.
          </p>

        </div>

      </Container>

    </footer>
  );
}