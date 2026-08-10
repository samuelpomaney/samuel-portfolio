"use client";

const skills = [
  "Cybersecurity",
  "Networking",
  "Linux",
  "IT Support",
  "System Administration",
  "Software Engineering",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "REST APIs",
  "Git",
  "GitHub",
  "SEO",
  "Digital Marketing",
  "Content Strategy",
  "Brand Growth",
  "Social Media Management",
  "Google Analytics",
  "Meta Ads",
  "Problem Solving",
];

export default function SkillsRibbon() {
  return (
    <div className="mt-24 overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] py-5 backdrop-blur-xl">

      <div className="skills-track flex w-max items-center">

        {[...skills, ...skills].map((skill, index) => (

          <div
            key={index}
            className="mx-8 flex items-center gap-8 whitespace-nowrap"
          >

            <span className="font-semibold">

              {skill}

            </span>

            <span className="text-[var(--primary)]">

              •

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}