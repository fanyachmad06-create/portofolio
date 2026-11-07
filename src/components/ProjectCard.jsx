import React from "react";

export function ProjectCard({ project, onSelect, colSpan = "lg:col-span-6" }) {
  return (
    <article
      className={`${colSpan} group bg-surface-container-lowest rounded-lg border border-outline-variant/40 overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div>
        <div className="relative overflow-hidden bg-surface-container-low aspect-[16/10]">
          <img
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 text-label-sm font-label-sm tracking-wider uppercase bg-surface/95 backdrop-blur-sm border border-outline-variant/30 rounded text-primary font-medium">
              {project.badge}
            </span>
          </div>
        </div>

        <div className="p-7 md:p-8 space-y-3">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-headline-sm text-headline-sm text-primary group-hover:underline decoration-1 underline-offset-4">
              {project.title}
            </h3>
            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px] shrink-0">
              north_east
            </span>
          </div>

          <p className="font-body-md text-body-md text-secondary line-clamp-2">
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="px-7 pb-7 md:px-8 md:pb-8 pt-0">
        <div className="flex flex-wrap gap-2 text-label-sm font-label-sm text-secondary border-t border-outline-variant/20 pt-4">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-surface-container border border-outline-variant/30 rounded"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 bg-surface-container border border-outline-variant/30 rounded font-mono text-[11px]">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
