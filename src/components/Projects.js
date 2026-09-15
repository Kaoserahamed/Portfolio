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
      title: 'StockPilot - Inventory & POS SaaS',
      year: '2026',
      category: 'web',
      azureDeployed: true,
      description: 'Modern full-stack Point of Sale and Inventory Management SaaS with multi-tenant support, barcode checkout, financial reports, and Gemini AI insights — live on Azure.',
      fullDescription: 'StockPilot is a production-deployed multi-tenant SaaS for inventory management and point of sale. Businesses manage products, stock movements, suppliers/customers, sales invoices and expenses with role-based access. The FastAPI backend (PostgreSQL 15, SQLAlchemy, Alembic, JWT) serves a Next.js 14 TypeScript frontend with fast POS checkout, revenue/expense and profit-loss reporting, and Gemini-powered business insights. Deployed with Docker containers via Azure Container Registry to Azure App Service with GitHub Actions CI/CD and Azure Database for PostgreSQL Flexible Server.',
      technologies: ['FastAPI', 'Python', 'PostgreSQL 15', 'SQLAlchemy', 'Alembic', 'JWT', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Query', 'Docker', 'Azure App Service', 'Azure Container Registry', 'GitHub Actions'],
      highlights: [
        'Multi-tenant SaaS with role-based access for multiple businesses',
        'Inventory management: products, stock levels, and movement tracking',
        'Fast POS checkout with barcode scanning support and sales invoicing',
        'Financial reports: revenue tracking, expense management, profit/loss analysis plus Gemini AI insights',
        'Live in production: Docker CI/CD via GitHub Actions → Azure Container Registry → Azure App Service',
      ],
      github: null,
      demo: 'https://stockpilot-web.azurewebsites.net',
      apiDocs: 'https://stockpilot-api.azurewebsites.net/docs',
      backend: 'https://stockpilot-api.azurewebsites.net',
    },
    {
      title: 'DataSense AI',
      year: '2026',
      category: 'ai-ml',
      description: 'AI-powered data analysis platform that allows users to upload CSV/Excel datasets and explore, clean, visualize, and query their data using natural language.',
      fullDescription: 'DataSense AI transforms data analysis by combining automated processing with conversational AI. Users can ask questions in plain English, which are converted into safe Pandas operations. The platform handles data profiling, cleaning, and visualization without requiring any programming knowledge.',
      technologies: ['FastAPI', 'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
      highlights: [
        'Natural language queries converted into safe Pandas operations for data analysis',
        'Automated data profiling supporting CSV, Excel, JSON, and Parquet with quality warnings',
        'Built-in cleaning toolkit: deduplication, missing values, normalization, encoding, outlier removal',
        'Interactive visualizations: bar, line, scatter, box, histogram, and correlation heatmaps',
      ],
      github: 'https://github.com/Kaoserahamed/DataSense-AI',
      demo: 'https://data-sense-ai-ksif.vercel.app',
    },
    {
      title: 'Complaint Management System',
      year: '2026',
      category: 'web',
      azureDeployed: true,
      description: 'Full-stack web application for reporting and managing public complaints with media upload support across various categories (road, electricity, water, garbage, public safety).',
      fullDescription: 'A comprehensive complaint management platform enabling citizens to report public issues with image/video proof. Built with React, FastAPI, and PostgreSQL, featuring automated CI/CD deployment to Azure. Includes media processing, complaint tracking, dashboard statistics, and RESTful API with comprehensive documentation.',
      technologies: ['React 18', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Tailwind CSS', 'Docker', 'Azure App Service', 'GitHub Actions', 'Nginx', 'Vite'],
      highlights: [
        'Multi-category complaint reporting system with image/video upload and processing',
        'RESTful API with FastAPI, SQLAlchemy ORM, and Pydantic v2 validation',
        'Automated CI/CD pipeline: GitHub Actions → Azure Container Registry → Azure App Service',
        'Dockerized deployment with PostgreSQL database and comprehensive API documentation',
      ],
      github: 'https://github.com/Kaoserahamed/Commplaintmanagement',
      demo: 'https://complaint2292-web.azurewebsites.net/',
    },
    {
      title: 'CodeAtlas AI',
      year: '2026',
      category: 'web',
      description: 'Interactive visual code exploration tool that maps JavaScript/TypeScript codebases using AST parsing and graph visualization to help developers understand complex architectures.',
      fullDescription: 'CodeAtlas AI creates visual dependency maps of codebases by parsing JavaScript and TypeScript files with Babel AST. It traces relationships between files, functions, and imports, storing them in a Neo4j graph database for efficient querying. The interactive graph visualization powered by React Flow enables quick code navigation and architecture understanding.',
      technologies: ['React Flow', 'TypeScript', 'Node.js', 'Fastify', 'Babel AST', 'Neo4j'],
      highlights: [
        'Custom Babel AST parser traces file, function, and import dependencies across codebases',
        'Interactive graph visualization with React Flow for intuitive code navigation',
        'Neo4j graph database enables efficient relationship queries and path finding',
        'Fastify backend provides high-performance API endpoints for real-time exploration',
      ],
      github: 'https://github.com/Kaoserahamed/CodeAtlasAI_mvp',
      demo: 'https://kaoserahamed.github.io/CodeAtlasAI_mvp/',
    },
    {
      title: 'River Morphological Change Prediction',
      year: '2026',
      category: 'ai-ml',
      description: 'Spatio-temporal deep learning system predicting river morphology changes using 37 years of satellite data, achieving IoU 0.7005 with Attention U-Net + ConvLSTM.',
      fullDescription: 'This research project predicts river morphological changes using multi-temporal satellite water masks spanning 1988–2025. Five state-of-the-art spatio-temporal architectures were evaluated, with Attention U-Net + ConvLSTM achieving the best performance. The system generates risk-zone maps using frequency analysis and a custom Hydrodynamic Stability Index.',
      technologies: ['Python', 'PyTorch', 'ConvLSTM', 'Attention U-Net', 'Remote Sensing'],
      highlights: [
        'Evaluated five spatio-temporal architectures for long-term riverbank morphodynamics prediction',
        'Multi-temporal satellite data from 1988–2025 enables 37-year pattern analysis',
        'Best model: Attention U-Net + ConvLSTM (IoU: 0.7005, Dice: 0.8236)',
        'Generated risk-zone maps with custom Hydrodynamic Stability Index',
      ],
      github: null,
      paperLink: 'https://thesai.org/Publications/ViewPaper?Volume=17&Issue=7&Code=IJACSA&SerialNo=74#',
    },
    {
      title: 'Invasive Alien Plants Classification',
      year: '2025',
      category: 'ai-ml',
      description: 'Deep learning classification system identifying 11 invasive plant species with 98.41% accuracy using ResNet, ViT, and YOLO. Published at IEEE ICCIT 2025.',
      fullDescription: 'This research addresses ecological threats from invasive plants in Bangladesh using deep learning. An 8,452-image dataset covering 11 species was collected and annotated. Multiple architectures including ResNet, Vision Transformer, and YOLO were evaluated, achieving 98.41% best accuracy. The work was accepted at IEEE ICCIT 2025.',
      technologies: ['Python', 'TensorFlow', 'YOLOv11', 'ResNet', 'Vision Transformer', 'CNN'],
      highlights: [
        'Published at IEEE International Conference on Computer and Information Technology (ICCIT) 2025',
        'Collected and annotated 8.4K-image dataset covering 11 invasive plant species',
        'Evaluated ResNet, Vision Transformer (ViT), and YOLO architectures',
        'Achieved 98.41% best classification accuracy',
      ],
      github: null,
      paperLink: 'https://doi.org/10.1109/ICCIT68739.2025.11491085',
    },
    {
      title: 'E-Commerce Admin Dashboard',
      year: '2025',
      category: 'web',
      description: 'Full-stack e-commerce administration platform featuring 62 REST APIs, 9 core modules, role-based access control, and centralized management workflows.',
      fullDescription: 'Production-ready admin dashboard built with NestJS and React, managing complex e-commerce operations. Features 44 granular permissions across 9 modules, JWT authentication with token rotation, variant product management, and nested category hierarchies. Implements atomic database operations with Prisma and permission-aware frontend rendering.',
      technologies: ['NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'React 19', 'Vite', 'Tailwind CSS', 'JWT', 'bcrypt'],
      highlights: [
        '62 REST API endpoints organized across 9 core modules with comprehensive functionality',
        'Fine-grained RBAC with 44 permissions and secure JWT token rotation (15-min access, 7-day refresh)',
        'Complex product catalog: variant matrix generation, nested categories with cycle prevention',
        'Permission-aware UI with dynamic rendering and automatic token refresh on 401 errors',
      ],
      github: 'https://github.com/Kaoserahamed/assignment_backend_ecommerce_admin',
    },
    {
      title: 'Student Assistant',
      year: '2026',
      category: 'ai-ml',
      description: 'RAG-based study assistant enabling students to upload course materials and ask questions. Uses Pinecone vector search and Gemini API with source citations.',
      fullDescription: 'AI-powered learning platform where students upload PDFs, documents, and slides, then receive accurate answers based on their materials. Uses semantic search with Pinecone to find relevant sections and Google Gemini API to generate contextual answers. Includes source citations with page numbers and conversation history persistence.',
      technologies: ['FastAPI', 'React', 'TypeScript', 'Python 3.11', 'SQLAlchemy', 'Pinecone', 'Google Gemini API', 'PyPDF', 'Vite', 'Tailwind CSS', 'MySQL'],
      highlights: [
        'Smart document processing: automatic extraction and chunking for PDF, DOCX, PPTX, TXT',
        'Semantic search with Pinecone vector database retrieves relevant course material sections',
        'Gemini API generates contextual answers with source citations and page numbers',
        'Built-in document viewer and persistent conversation history with JWT authentication',
      ],
      github: null,
      demo: null,
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
      title: 'Tour Management Platform',
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
      demo: 'https://frontend-kaoser614-7344s-projects.vercel.app/',
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

  const azureProjects = allProjects.filter(project => project.azureDeployed);

  const filteredProjects = (activeCategory === 'all'
    ? allProjects.filter(project => !project.azureDeployed)
    : allProjects.filter(project => project.category === activeCategory && !project.azureDeployed));

  const projectCounts = {
    all: allProjects.length,
    'ai-ml': allProjects.filter(p => p.category === 'ai-ml').length,
    web: allProjects.filter(p => p.category === 'web').length,
    mobile: allProjects.filter(p => p.category === 'mobile').length,
  };

  return (
    <section id="projects" className="py-8 px-6 bg-dark">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-2">Featured Projects</h2>
        <p className="text-slate-400 mb-4 text-sm">A showcase of my technical expertise and problem-solving abilities</p>

        {/* Azure Deployed Live */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <h3 className="text-xl font-heading font-bold text-white">Azure Deployed — Live</h3>
          </div>
          <p className="text-slate-400 mb-5 text-sm">Production apps live on Microsoft Azure</p>
          <div className="grid md:grid-cols-2 gap-6">
            {azureProjects.map((project, index) => (
              <div
                key={'azure-' + index}
                className="bg-card rounded-xl border-2 border-emerald-500/40 hover:border-emerald-400 transition-all overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500"></div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {project.category === 'ai-ml' ? 'AI/ML' : project.category === 'mobile' ? 'Mobile' : 'Web'}
                      </span>
                      <span className="text-[10px] font-bold text-white bg-emerald-500 px-2 py-0.5 rounded-full uppercase tracking-wider">Azure Live</span>
                    </div>
                    <span className="bg-dark text-slate-400 px-2 py-1 rounded text-xs font-medium">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-dark text-slate-400 text-xs px-2.5 py-1 rounded border border-slate-700">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-dark text-slate-400 text-xs px-2.5 py-1 rounded border border-slate-700">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-primary hover:text-blue-400 font-semibold text-sm transition-colors inline-flex items-center gap-1">
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="flex gap-3">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-xs font-medium text-accent hover:text-green-400 transition-colors inline-flex items-center gap-1" title="Live Demo">
                          Live Demo
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-xs font-medium text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-1" title="GitHub">
                          GitHub
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
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

        <h3 className="text-xl font-heading font-bold text-white mb-1">All Projects</h3>
        <p className="text-slate-400 mb-4 text-sm">Browse the full portfolio by category</p>

        <div className="flex flex-wrap gap-3 mb-6">
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
                    className="text-primary hover:text-blue-400 font-semibold text-sm transition-colors inline-flex items-center gap-1"
                  >
                    View Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="flex gap-3">
                    {project.paperLink && (
                      <a
                        href={project.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-medium text-accent hover:text-green-400 transition-colors inline-flex items-center gap-1"
                        title="Research Paper"
                      >
                        Paper
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-medium text-accent hover:text-green-400 transition-colors inline-flex items-center gap-1"
                        title="Live Demo"
                      >
                        Live Demo
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="text-xs font-medium text-slate-400 hover:text-primary transition-colors inline-flex items-center gap-1"
                        title="GitHub"
                      >
                        GitHub
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
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
