import React from 'react';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          {/* Header */}
          <div className={`bg-gradient-to-r ${project.color} p-6 rounded-t-lg text-white relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg opacity-90">{project.year}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Details */}
            {project.technicalDetails && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Details</h3>
                <div className="space-y-4">
                  {project.technicalDetails.map((detail, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-gray-800 mb-1">{detail.title}</h4>
                      <p className="text-gray-700">{detail.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Results</h3>
                <div className="grid grid-cols-3 gap-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Authors */}
            {project.authors && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Authors</h3>
                <div className="space-y-1">
                  {project.authors.map((author, idx) => (
                    <div key={idx} className="text-gray-700">
                      <span className="font-medium">{author.name}</span>
                      {author.affiliation && <span className="text-gray-600"> - {author.affiliation}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {project.paper && (
                <a
                  href={project.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Read Paper
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
