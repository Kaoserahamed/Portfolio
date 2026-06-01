import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'ai-ml', name: 'AI/ML & Research', icon: '🤖' },
    { id: 'web', name: 'Web Applications', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  ];

  const allProjects = [
    {
      title: 'Invasive Alien Plants Classification',
      year: '2025',
      category: 'ai-ml',
      subtitle: 'Deep Learning for Ecological Conservation',
      description: 'Research project for ICCIT 2025 conference focusing on automated classification of invasive plant species using state-of-the-art deep learning models.',
      fullDescription: 'This research addresses the ecological threat of invasive alien plants in Bangladesh through deep learning. A dataset of 8,452 images representing 11 invasive species was collected from diverse ecological sites across the Sylhet region. The study demonstrates that YOLOv11x achieves 98.41% classification accuracy, enabling reliable identification for early detection and mitigation efforts.',
      technologies: ['Python', 'TensorFlow', 'YOLOv11x', 'CNN', 'Vision Transformer', 'ResNet50'],
      highlights: [
        'Created novel dataset of 8,452 images across 11 invasive species',
        'Achieved 98.41% accuracy using YOLOv11x architecture',
        'Compared 5 deep learning models (ResNet50, Custom CNN, ViT, YOLOv8x, YOLOv11x)',
        'Collected data from diverse ecological regions in Sylhet, Bangladesh',
        'Implemented comprehensive preprocessing and data augmentation',
        'Optimized hyperparameters using Optuna framework',
      ],
      technicalDetails: [
        {
          title: 'Dataset',
          content: '8,452 labeled images from 11 species including Acacia auriculiformis, Ageratum conyzoides, Mikania micrantha, and others. Images captured with varying lighting, angles, and backgrounds from Jaflong, Ratargul Swamp Forest, and SUST campus.',
        },
        {
          title: 'Model Architecture',
          content: 'YOLOv11x with enhanced backbone design and improved feature aggregation. Training performed on NVIDIA Tesla T4 GPU with Adam optimizer, batch sizes 16-32, and 100 epochs.',
        },
        {
          title: 'Performance Metrics',
          content: 'YOLOv11x: 98.41% accuracy, 98.58% precision, 97.05% recall. Vision Transformer: 98.26% accuracy. ResNet50: 97.11% accuracy. All models achieved F1-scores above 96.9%.',
        },
      ],
      results: [
        { value: '98.41%', label: 'Best Accuracy' },
        { value: '8,452', label: 'Images' },
        { value: '11', label: 'Species' },
      ],
      authors: [
        { name: 'S. S. Mahmud Turza', affiliation: 'CSE, SUST' },
        { name: 'MD. Kaoser Ahamed Anik', affiliation: 'CSE, SUST' },
        { name: 'Mohammad Shahidur Rahman', affiliation: 'CSE, SUST' },
      ],
      color: 'from-blue-500 to-indigo-600',
      github: null,
      paper: null, // Add link when available
    },
    {
      title: 'Smart Traffic Management System',
      year: '2024',
      category: 'ai-ml',
      subtitle: 'AI-Powered Traffic Light Control with Reinforcement Learning',
      description: 'An intelligent traffic light control system using Proximal Policy Optimization (PPO) reinforcement learning to optimize traffic flow at intersections and reduce congestion.',
      fullDescription: 'This project implements an AI-powered traffic light controller that learns optimal signal timing strategies through reinforcement learning. Unlike traditional fixed-time controllers, the system adapts to real-time traffic conditions using PPO algorithm with actor-critic architecture, achieving 30-50% reduction in average waiting time.',
      technologies: ['Python', 'PyTorch', 'SUMO', 'Reinforcement Learning', 'PPO Algorithm', 'NumPy'],
      highlights: [
        'PPO (Proximal Policy Optimization) with actor-critic architecture',
        'Real-time adaptive signal timing based on traffic conditions',
        '30-50% reduction in average waiting time vs fixed timing',
        '20-40% improvement in traffic throughput',
        'Curriculum learning with 6 diverse traffic scenarios',
        'SUMO (Simulation of Urban MObility) integration',
        '12-dimensional state representation for comprehensive traffic analysis',
        'Generalized Advantage Estimation (GAE) for stable training',
      ],
      technicalDetails: [
        {
          title: 'Reinforcement Learning Architecture',
          content: 'PPO agent with shared neural network, actor head for action probabilities, and critic head for state value estimation. Uses 12-dimensional state space including queue lengths, vehicle densities, current phase, and traffic metrics.',
        },
        {
          title: 'Reward Function',
          content: 'Multi-objective optimization minimizing waiting time (weight: 2.0), reducing queue length (weight: 1.0), maximizing speed (weight: 0.5), and increasing throughput (weight: 0.1). Includes penalties for congestion and bonuses for balanced flow.',
        },
        {
          title: 'Training Strategy',
          content: 'Curriculum learning across 6 traffic scenarios (light, moderate, heavy, asymmetric). Training for 200 episodes with periodic policy updates every 10 episodes. Hyperparameter optimization with learning rate 3e-4, clip epsilon 0.2, and GAE lambda 0.95.',
        },
        {
          title: 'Traffic Scenarios',
          content: 'Multiple realistic scenarios including light traffic (50-100 vehicles), moderate (100-150), heavy (150-200), and asymmetric patterns. Each scenario tests different aspects of traffic management and controller adaptability.',
        },
      ],
      results: [
        { value: '30-50%', label: 'Wait Time Reduction' },
        { value: '20-40%', label: 'Throughput Increase' },
        { value: '6', label: 'Traffic Scenarios' },
      ],
      color: 'from-blue-500 to-indigo-600',
      github: 'https://github.com/Kaoserahamed/Smart_Traffic_Management_System',
    },
    {
      title: 'Bangladesh News Aggregator 🇧🇩',
      year: '2024',
      category: 'web',
      subtitle: 'Automated News Collection & Intelligent Processing',
      description: 'A full-stack automated news aggregation system that collects, processes, and presents news from reliable Bangladesh sources with intelligent duplicate detection and automatic categorization.',
      fullDescription: 'Bangladesh News Aggregator is a comprehensive news platform featuring automated daily updates via Vercel cron jobs, intelligent duplicate detection with 90% accuracy using Levenshtein distance algorithm, and smart categorization for Bangladesh-specific content. The bilingual interface supports both Bangla and English with dark mode and responsive design.',
      technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB Atlas', 'Tailwind CSS', 'Node.js'],
      highlights: [
        'Processes 200+ news articles daily from 10+ Bangladesh news sources',
        '90% accuracy duplicate detection using Levenshtein distance algorithm (O(n²) optimized with early termination)',
        'Smart categorization with Bangladesh-specific keywords across 6 categories',
        'Bilingual support (Bangla & English) with responsive UI (320px - 2560px)',
        'Dark mode with persistent user preference using localStorage',
        'REST API with pagination (30 articles/page) and category filtering',
        'MongoDB Atlas with compound indexes for sub-100ms query performance',
        'Automated health monitoring with uptime tracking',
      ],
      technicalDetails: [
        {
          title: 'Automation & Processing',
          content: 'Daily automated news collection using Vercel cron jobs. Intelligent duplicate detection with 90% accuracy using Levenshtein distance algorithm. Automatic categorization into Technology, Sports, Business, Politics, Entertainment, and General categories using Bangladesh-specific keywords.',
        },
        {
          title: 'Frontend Features',
          content: 'Built with Next.js 14 and React 18 with TypeScript for type safety. Fully responsive design (320px - 2560px) with dark mode toggle and persistent preferences. Bilingual interface supporting both Bangla and English content. Category filtering and smooth pagination (30 articles per page).',
        },
        {
          title: 'Backend Architecture',
          content: 'Next.js API Routes for serverless endpoints. MongoDB Atlas cloud database with optimized indexes. RSS feed parsing with HTML cleaning and text extraction. RESTful API with pagination, filtering, and health check endpoints.',
        },
        {
          title: 'Key Libraries',
          content: 'rss-parser for RSS feed parsing, date-fns for date manipulation, fast-levenshtein for string similarity detection, and MongoDB official driver for database operations.',
        },
      ],
      results: [
        { value: '200+', label: 'Articles/Day' },
        { value: '<100ms', label: 'Query Time' },
        { value: '90%', label: 'Dedup Accuracy' },
      ],
      color: 'from-blue-500 to-indigo-600',
      github: 'https://github.com/Kaoserahamed/News',
      demo: null,
    },
    {
      title: 'Task – Travel & Adventure Platform',
      year: '2025',
      category: 'web',
      subtitle: 'Marketplace Connecting Travelers with Tour Companies',
      description: 'A comprehensive web-based travel platform that connects adventure lovers with multiple tour companies, offering personalized AI-based recommendations and seamless booking experiences.',
      fullDescription: 'Task is a travel marketplace designed to simplify trip planning by aggregating tour packages from multiple companies in one place. Users can explore destinations, compare packages, receive AI-powered recommendations, and book trips directly. The platform serves travelers, tour companies, and administrators with role-specific features and real-time communication.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Scikit-learn', 'PyTorch'],
      highlights: [
        'AI-powered personalized travel recommendations using ML algorithms',
        'Real-time chat system for user-company communication',
        'Weather-based travel suggestions for optimal trip planning',
        'Multi-role platform (Travelers, Tour Companies, Admins)',
        'Advanced search and filtering for destinations and packages',
        'Comprehensive booking management and trip tracking',
        'Tour company verification and package approval system',
        'Favorites list and user feedback system',
      ],
      technicalDetails: [
        {
          title: 'User Features',
          content: 'Registered users access personalized dashboards with trip management, AI-based recommendations, favorites lists, and live chat. Unregistered users can explore destinations, search packages, and view weather-based suggestions before signing up.',
        },
        {
          title: 'Tour Company Portal',
          content: 'Companies can upload and manage tour packages, monitor bookings in real-time, communicate directly with travelers, and track revenue through dedicated dashboards.',
        },
        {
          title: 'AI Integration',
          content: 'Collaborative filtering recommendation system using Scikit-learn (cosine similarity on user-item matrix) for personalized tour suggestions. Content-based filtering analyzes destination features, budget ranges, and seasonal preferences. Hybrid approach combines both methods with weighted scoring for improved accuracy.',
        },
        {
          title: 'Real-time Communication',
          content: 'Socket.io enables live chat between users, tour companies, and administrators, facilitating instant support and inquiries.',
        },
      ],
      results: [
        { value: 'Multiple', label: 'Tour Companies' },
        { value: 'AI-Powered', label: 'Recommendations' },
        { value: 'Real-time', label: 'Chat Support' },
      ],
      color: 'from-purple-500 to-pink-600',
      github: null,
    },
    {
      title: 'API Hub - API Catalog & Mocking Platform',
      year: '2026',
      category: 'web',
      description: 'Platform for API discovery, documentation, and mock response generation using OpenAPI specifications.',
      technologies: ['Spring Boot', 'React', 'OpenAPI', 'Java'],
      highlights: [
        'API aggregation and catalog management',
        'OpenAPI specification parsing',
        'Mock response generation for testing',
      ],
      color: 'from-purple-500 to-pink-600',
      github: null,
    },
    {
      title: 'Meal Manager (Android)',
      year: '2024',
      category: 'mobile',
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
      color: 'from-blue-500 to-indigo-600',
      github: 'https://github.com/Kaoserahamed/Meal_Manager_android_app',
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  // Count projects by category
  const projectCounts = {
    all: allProjects.length,
    'ai-ml': allProjects.filter(p => p.category === 'ai-ml').length,
    web: allProjects.filter(p => p.category === 'web').length,
    mobile: allProjects.filter(p => p.category === 'mobile').length,
  };

  return (
    <section id="projects" className="py-12 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          A showcase of my technical expertise and problem-solving abilities
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`text-sm px-2 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? 'bg-white bg-opacity-30'
                  : 'bg-slate-200'
              }`}>
                {projectCounts[category.id]}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-semibold text-indigo-600 tracking-wider uppercase">
                    {project.category === 'ai-ml' ? 'Research Project' : 
                     project.category === 'web' ? 'Web Application' : 'Mobile App'}
                  </span>
                  <span className="bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium border border-slate-200/60">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
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
                  {project.highlights.length > 3 && (
                    <p className="text-sm text-primary mt-2 font-semibold">
                      +{project.highlights.length - 3} more features
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-50 text-slate-600 text-xs px-2.5 py-1 rounded-md border border-slate-200/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-slate-50 text-slate-600 text-xs px-2.5 py-1 rounded-md border border-slate-200/60 font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="text-primary hover:text-secondary font-semibold text-sm transition-colors"
                  >
                    View Details →
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-600 hover:text-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
