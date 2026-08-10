import Container from "../ui/Container";
import PrimaryButton from "../buttons/PrimaryButton";
import HeroVisual from "./HeroVisual";
import FadeUp from "../animations/FadeUp";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-visible pt-28 pb-24 lg:pb-32">

      <Container>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}

          <div>

            <FadeUp delay={0}>

              <span className="inline-flex items-center rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-5 py-2 text-sm font-semibold text-[var(--primary)]">

                🚀 Open to Full-time • Remote • Freelance

              </span>

            </FadeUp>

            <FadeUp delay={0.15}>

              <h1 className="mt-8 text-5xl font-black leading-[1.05] md:text-7xl">

                Building

                <br />

                <span className="text-[var(--primary)]">
                  Secure
                </span>{" "}

                Technology

                <br />

                <span className="text-[var(--primary)]">
                  Driving Growth
                </span>{" "}

              </h1>

            </FadeUp>

            <FadeUp delay={0.3}>

              <p className="mt-8 max-w-xl text-lg leading-9 text-[var(--muted)]">

                Computer Science graduate passionate about
                building websites, strengthening cybersecurity,
                creating digital experiences and helping businesses
                grow through smart technology and marketing.

                <br />
                <br />

                I build websites, strengthen digital security,
                create content, and develop marketing strategies
                that help businesses grow online.

              </p>

            </FadeUp>

            <FadeUp delay={0.45}>

              <div className="mt-12 flex flex-wrap gap-5">

                <PrimaryButton href="#contact">

                  Hire Me

                </PrimaryButton>

                <PrimaryButton
                  href="#projects"
                  variant="secondary"
                >

                  View Projects

                </PrimaryButton>

              </div>

            </FadeUp>

            <FadeUp delay={0.6}>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-[var(--muted)]">

                <span>📈 Marketing</span>

                <span>🛡 Cybersecurity</span>

                <span>💻 Software Engineering</span>

                <span>🌐 Networking</span>

              </div>

            </FadeUp>

          </div>

          {/* RIGHT */}

          <FadeUp delay={0.25}>

            <HeroVisual />

          </FadeUp>

        </div>

      </Container>

    </section>
  );
}