import React, { useState } from "react";
import { PROJECTS_DATA, CATEGORIES } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getColSpan = () => {
    return "lg:col-span-6";
  };

  return (
    <section className="py-24 border-b border-outline-variant/30" id="work">
      <div className="max-w-7xl mx-auto px-6 md:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                Selected Portfolio
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Case Studies &amp; Flagship Works
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-secondary max-w-md">
            A curated showcase of enterprise ERP automations, high-concurrency cloud web apps, and cross-platform Flutter solutions deployed into production.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-outline-variant/30">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`px-3.5 py-1.5 rounded text-label-sm font-label-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-surface font-semibold"
                  : "bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Flagship Projects Symmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
              colSpan={getColSpan(idx)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
