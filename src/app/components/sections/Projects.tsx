"use client";

import ProjectCard from "@/app/components/ui/ProjectCard";
import { projects } from "@/app/components/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-28">
        <h3 className="text-xl font-semibold mb-16">Selected Projects</h3>
        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}