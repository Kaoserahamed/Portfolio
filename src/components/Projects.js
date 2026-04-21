import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Invasive Alien Plants Classification',
      year: '2025',
      description: 'Research project for ICCIT 2025 conference focusing on image classification of invasive plant species using Convolutional Neural Networks.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Image Processing'],
      highlights: [
        'Implemented CNN architecture for plant species classification',
        'Performed data preprocessing and augmentation',
        'Achieved high accuracy in identifying invasive species',
      ],
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Multi-Tour Booking Platform',
      year: '2025',
      description: 'Comprehensive tour booking system aggregating tours from multiple companies with real-time features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      highlights: [
        'Tour aggregation from multiple tour companies',
        'Booking system with payment integration',
        'Wishlist functionality and real-time chat support',
      ],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'E-Commerce & Food Delivery Platforms',
      year: '2025',
      description: 'Full-stack e-commerce and food delivery applications with complete order management systems.',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
      highlights: [
        'Product listing with advanced filtering',
        'Shopping cart and order management',
        'User authentication and authorization',
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'API Hub - API Catalog & Mocking Platform',
      year: '2026',
      description: 'Platform for API discovery, documentation, and mock response generation using OpenAPI specifications.',
      technologies: ['Spring Boot', 'React', 'OpenAPI', 'Java'],
      highlights: [
        'API aggregation and catalog management',
        'OpenAPI specification parsing',
        'Mock response generation for testing',
      ],
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Meal Manager (Android)',
      year: '2024',
      description: 'Android application for managing group meals with balance tracking and communication features.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
      highlights: [
        'Meal tracking and expense management',
        'Balance tracking for group members',
        'Real-time group chat functionality',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Dots and Boxes Game',
      year: '2023',
      description: 'Classic multiplayer game implementation with intuitive GUI and game logic.',
      technologies: ['Java', 'Swing', 'Game Development'],
      highlights: [
        'Multiplayer gameplay support',
        'Turn-based logic implementation',
        'Score tracking and winner determination',
      ],
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of my technical expertise and problem-solving abilities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-white bg-opacity-30 px-3 py-1 rounded-full text-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <svg
                          className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
