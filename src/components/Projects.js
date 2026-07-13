import { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-ml', name: 'AI/ML & Research' },
    { id: 'web', name: 'Web Applications' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const allProjects = [
    {
      title: 'CodeAtlas AI',
      year: '2026',
      category: 'web',
      description: 'An interactive visual mapping tool to navigate and understand complex codebases through intelligent AST parsing and graph visualization.',
      fullDescription: 'CodeAtlas AI is a powerful code exploration tool that creates visual maps of JavaScript and TypeScript projects. Using custom Babel AST parsing, it traces relationships between files, functions, and imports to help developers understand complex codebases quickly.',
      technologies: ['React Flow', 'TypeScript', 'Node.js', 'Fastify', 'Babel AST', 'Neo4j'],
      highlights: [
        'Custom parser with Babel AST to trace file, function, and import connections',
        'Interactive graph visualization with React Flow for code navigation',
        'Neo4j graph database for efficient relationship queries',
        'Fastify backend for high-performance API endpoints',
        'Supports JavaScript and TypeScript codebases',
      ],
      github: 'https://github.com/Kaoserahamed/CodeAtlasAI_mvp',
      demo: 'https://kaoserahamed.github.io/CodeAtlasAI_mvp/',
    },
    {
      title: 'Invasive Alien Plants Classification',
      year: '2025',
      category: 'ai-ml',
      description: 'Research project accepted at ICCIT 2025 focusing on automated classification of invasive plant species using deep learning models.',
      fullDescription: 'This research addresses the ecological threat of invasive alien plants in Bangladesh through deep learning. A dataset of 8,452 images representing 11 invasive species was collected. YOLOv11x achieves 98.41% classification accuracy.',
      technologies: ['Python', 'TensorFlow', 'YOLOv11', 'ResNet', 'Vision Transformer', 'CNN'],
      highlights: [
        'Accepted at International Conference on Computer and Information Technology (ICCIT) 2025',
        'Developed deep learning-based classification system using 8.4K-image dataset',
        'Achieved 98.41% accuracy using ResNet, Vision Transformer (ViT), and YOLO',
        'Compared 5 deep learning models for optimal performance',
      ],
      github: null,
    },
    {
      title: 'Smart Traffic Management System',
      year: '2024',
      category: 'ai-ml',
      description: 'An intelligent traffic light control system using PPO reinforcement learning to optimize traffic flow and reduce congestion.',
      fullDescription: 'This project implements an AI-powered traffic light controller using PPO algorithm with actor-critic architecture, achieving 30-50% reduction in average waiting time.',
      technologies: ['Python', 'PyTorch', 'SUMO', 'Reinforcement Learning', 'PPO Algorithm', 'NumPy'],
      highlights: [
        'PPO (Proximal Policy Optimization) with actor-critic architecture',
        '30-50% reduction in average waiting time vs fixed timing',
        '20-40% improvement in traffic throughput',
        'SUMO (Simulation of Urban MObility) integration',
      ],
      github: 'https://github.com/Kaoserahamed/Smart_Traffic_Management_System',
    },
    {
      title: 'Bangladesh News Aggregator',
      year: '2024',
      category: 'web',
      description: 'A full-stack automated news aggregation system with intelligent duplicate detection and smart categorization.',
      fullDescription: 'Bangladesh News Aggregator features automated daily updates via Vercel cron jobs, 90% accuracy duplicate detection using Levenshtein distance algorithm, and bilingual interface.',
      technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB Atlas', 'Tailwind CSS', 'Node.js'],
      highlights: [
        'Processes 200+ news articles daily from 10+ Bangladesh news sources',
        '90% accuracy duplicate detection using Levenshtein distance algorithm',
        'Smart categorization across 6 categories',
        'MongoDB Atlas with sub-100ms query performance',
      ],
      github: 'https://github.com/Kaoserahamed/News',
    },
    {
      title: 'Travel & Adventure Platform',
      year: '2025',
      category: 'web',
      description: 'A comprehensive travel platform connecting travelers with tour companies, offering AI-based recommendations.',
      fullDescription: 'Task is a travel marketplace that aggregates tour packages from multiple companies. Users receive AI-powered recommendations and book trips directly with real-time communication.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Scikit-learn'],
      highlights: [
        'AI-powered personalized travel recommendations using ML algorithms',
        'Real-time chat system for user-company communication',
        'Weather-based travel suggestions',
        'Multi-role platform (Travelers, Tour Companies, Admins)',
      ],
      github: 'https://github.com/Kaoserahamed/Task',
    },
    {
      title: 'API Hub',
      year: '2026',
      category: 'web',
      description: 'Platform for API discovery, documentation, and mock response generation using OpenAPI specifications.',
      fullDescription: 'API Hub provides a centralized platform for API catalog management, OpenAPI specification parsing, and mock response generation for testing.',
      technologies: ['Spring Boot', 'React', 'OpenAPI', 'Java'],
      highlights: [
        'API aggregation and catalog management',
        'OpenAPI specification parsing',
        'Mock response generation for testing',
      ],
      github: null,
    },
    {
      title: 'Meal Manager',
      year: '2024',
      category: 'mobile',
      description: 'Android application for managing shared meal expenses with real-time synchronization.',
      fullDescription: 'Meal Manager simplifies shared meal expense tracking for hostels. With role-based access, automatic calculations, and real-time sync via Firebase.',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'Material Design 3'],
      highlights: [
        'Role-based access control (Manager/Member roles)',
        'Automatic meal rate calculation and balance tracking',
        'Real-time expense tracking with Firebase Firestore',
        'Transaction history and financial reports',
      ],
      github: 'https://github.com/Kaoserahamed/Meal_Manager_android_app',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  const projectCounts = {
    all: allProjects.length,
    'ai-ml': allProjects.filter(p => p.category === 'ai-ml').length,
    web: allProjects.filter(p => p.category === 'web').length,
    mobile: allProjects.filter(p => p.category === 'mobile').length,
  };

  return (
    <section id="projects" className="py-12 px-6 bg-dark">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-400 mb-6 text-sm">A showcase of my technical expertise and problem-solving abilities</p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-card text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {category.name}
              <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-slate-700'
              }`}>
                {projectCounts[category.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-slate-700 hover:border-primary transition-all overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-primary/10"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category === 'ai-ml' ? 'AI/ML' : project.category === 'mobile' ? 'Mobile' : 'Web'}
                  </span>
                  <span className="bg-dark text-slate-400 px-2 py-1 rounded text-xs font-medium">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-heading font-bold text-white mb-2">{project.title}</h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-dark text-slate-400 text-xs px-2.5 py-1 rounded border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-dark text-slate-400 text-xs px-2.5 py-1 rounded border border-slate-700">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="text-primary hover:text-blue-400 font-semibold text-sm transition-colors"
                  >
                    View Details →
                  </button>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-accent transition-colors"
                        title="Live Demo"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
