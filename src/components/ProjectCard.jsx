import { Link } from "react-router-dom";

const categoryGradients = {
  ai: "from-purple-500 to-indigo-600",
  web: "from-teal-500 to-emerald-600",
  automation: "from-orange-500 to-pink-600",
};

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-xl border border-white/10 overflow-hidden bg-white/[0.02] hover:scale-[1.02] transition-all duration-200 hover:shadow-lg hover:border-white/20"
    >
      <div
        className={`h-36 bg-gradient-to-br ${categoryGradients[project.category]}`}
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
