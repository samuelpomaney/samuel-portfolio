import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ChooseFocus from "@/components/home/ChooseFocus";
import GrowthSection from "@/components/sections/GrowthSection";

const MarketingSection = dynamic(
  () => import("@/components/marketing/MarketingSection")
);

const TechnologySection = dynamic(
  () => import("@/components/sections/TechnologySection")
);

const TechnologyShowcase = dynamic(
  () => import("@/components/network/TechnologyShowcase")
);

const FeaturedProjects = dynamic(
  () => import("@/components/projects/FeaturedProjects")
);

const Experience = dynamic(
  () => import("@/components/experience/Experience")
);

const Certificates = dynamic(
  () => import("@/components/certificates/Certificates")
);

const SkillsGalaxy = dynamic(
  () => import("@/components/skills/SkillsGalaxy")
);

const Contact = dynamic(
  () => import("@/components/contact/Contact")
);

import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://spydex.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="career-paths">
          <ChooseFocus />
        </section>

        <GrowthSection />

        <MarketingSection />

        <TechnologySection />

        <TechnologyShowcase />

        <section id="projects">
          <FeaturedProjects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <Certificates />

        <SkillsGalaxy />

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </main>
    </>
  );
}