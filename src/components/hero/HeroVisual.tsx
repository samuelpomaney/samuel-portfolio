"use client";

import HeroImage from "./HeroImage";
import HeroInfoCard from "./HeroInfoCard";
import SkillChip from "./SkillChip";

import skillData from "./skillData";

export default function HeroVisual() {
  return (
    <div
      className="
      relative
      mx-auto
      flex
      w-fit
      items-center
      justify-center
      overflow-visible
      pb-24
      lg:pb-16
      "
    >
      <HeroImage />

      <HeroInfoCard />

      {skillData.map((skill, index) => (
        <SkillChip
          key={skill.title}
          icon={skill.icon}
          title={skill.title}
          x={skill.x}
          y={skill.y}
          delay={index * .2}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_70%)] opacity-[0.08] blur-3xl" />
    </div>
  );
}