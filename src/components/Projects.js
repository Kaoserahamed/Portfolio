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
      github: null,
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
      github: null,
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
      github: null,
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
      github: null,
    },
    {
      title: 'Meal Manager (Android)',
      year: '2024',
      description: 'Modern Android application for managing shared meal expenses in hostels and shared apartments. Built with Jetpack Compose and MVVM architecture, featuring real-time synchronization across devices.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Material Design 3'],
      highlights: [
        'Role-based access control (Manager/Member roles)',
        'Automatic meal rate calculation and balance tracking',
        'Real-time expense tracking with Firebase Firestore',
        'Secure authentication with Firebase Auth',
        'Transaction history and financial reports',
        'Deposit management and shopping expense recording',
      ],
      color: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/Kaoserahamed/Meal_Manager_android_app',
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
      github: null,
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold text-sm transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
