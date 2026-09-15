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
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                  {project.category === 'ai-ml' ? 'AI/ML' : project.category === 'mobile' ? 'Mobile' : 'Web Application'}
                </span>
                <span className="text-xs text-slate-400">{project.year}</span>
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-slate-400">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
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
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Overview</h3>
              <p className="text-slate-300 leading-relaxed">{project.fullDescription}</p>
            </div>
          )}

          {/* Results/Metrics */}
          {project.results && (
            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Results</h3>
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="bg-dark rounded-xl p-4 border border-slate-700 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                    <div className="text-sm text-slate-400">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-slate-300">
                    <span className="text-accent mr-2 mt-1">▹</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-heading font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-dark text-slate-300 rounded-lg border border-slate-700 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.github || project.demo || project.backend) && (
            <div className="flex gap-4 flex-wrap">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-green-600 transition-all font-semibold inline-flex items-center gap-2"
                >
                  View Live Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-all font-semibold inline-flex items-center gap-2"
                >
                  View on GitHub
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
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
