import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function ProjectGrid() {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-3">

      {projects.map((project) => (

        <ProjectCard
          key={project.title}
          project={project}
        />

      ))}

    </div>
  );
}