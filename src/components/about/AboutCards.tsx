"use client";

import {
  BrainCircuit,
  MonitorSmartphone,
  Shield,
  TrendingUp,
} from "lucide-react";

import AboutCard from "./AboutCard";

export default function AboutCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">

      <div className="space-y-6">

        <AboutCard
          icon={MonitorSmartphone}
          title="Software Engineering"
          subtitle="Building responsive websites, scalable applications and modern digital experiences."
        />

        <AboutCard
          icon={BrainCircuit}
          title="Problem Solving"
          subtitle="Combining analytical thinking, creativity and technology to solve real-world challenges."
        />

      </div>

      <div className="space-y-6 sm:pt-10">

        <AboutCard
          icon={Shield}
          title="Cybersecurity"
          subtitle="Applying networking, Linux, system administration and security best practices."
        />

        <AboutCard
          icon={TrendingUp}
          title="Growth & Marketing"
          subtitle="Helping businesses grow using content strategy, SEO, analytics and digital marketing."
        />

      </div>

    </div>
  );
}