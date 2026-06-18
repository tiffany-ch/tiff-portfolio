import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <Link to="/projects" className="text-teal-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/projects" className="text-teal-400 text-sm hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold mt-6 mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed mb-8">
        {project.longDescription}
      </p>

      <h3 className="font-semibold mb-3">Key Highlights</h3>
      <ul className="space-y-2 mb-8">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-gray-400">
            • {highlight}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 transition text-white"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
