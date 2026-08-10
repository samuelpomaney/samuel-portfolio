import Link from "next/link";

import PremiumCard from "../ui/PremiumCard";
import ProjectPreview from "./ProjectPreview";
import ProjectStatus from "./ProjectStatus";

interface Props {
  project: {
    title: string;
    category: string;
    description: string;
    stack: string[];
    status: string;
    demo: string;
  };
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <PremiumCard
      className="
        group
        flex
        h-[770px]
        flex-col
        rounded-[30px]
        p-8
      "
    >
      <ProjectPreview title={project.title} />

      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">

          {project.category}

        </span>

        <ProjectStatus status={project.status} />

      </div>

      <h3 className="mt-6 text-3xl font-black">

        {project.title}

      </h3>

      <p className="mt-5 text-[var(--muted)] leading-8">

        {project.description}

      </p>

      <div className="mt-8 flex flex-wrap gap-2">

        {project.stack.map((item) => (

          <span
            key={item}
            className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-1 text-sm"
          >
            {item}
          </span>

        ))}

      </div>

      <div className="mt-auto pt-10">

        <Link
          href={project.demo}
          className="flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--primary)]/30"
        >
          Launch {project.title} Demo →
        </Link>

      </div>

    </PremiumCard>
  );
}