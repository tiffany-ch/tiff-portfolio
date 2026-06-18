import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "AI/ML", value: "ai" },
  { label: "Web", value: "web" },
  { label: "Automation", value: "automation" },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-400 mb-8">
        Things I've built during my AI career pivot.
      </p>

      <div className="flex gap-3 mb-10 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              activeFilter === f.value
                ? "bg-teal-500 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
