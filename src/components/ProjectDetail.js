const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl max-w-4xl w-full my-8 border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-slate-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-slate-400">{project.subtitle || project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          {/* Full Description */}
          {project.fullDescription && (
            <div className="mb-6">
              <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
            </div>
          )}

          {/* Results/Metrics */}
          {project.results && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {project.results.map((result, idx) => (
                <div key={idx} className="bg-dark rounded-xl p-4 border border-slate-700 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                  <div className="text-sm text-slate-400">{result.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <span className="text-accent mr-2">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-heading font-semibold text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-dark text-slate-300 rounded-lg border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo) && (
            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-green-600 transition-all font-medium"
                >
                  Live Demo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-all font-medium"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
