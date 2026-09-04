const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'AI / Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      title: 'Generative AI',
      skills: ['LLMs', 'RAG', 'AI Agents', 'Prompt Engineering', 'Embeddings', 'Vector Databases', 'LangChain', 'Gemini API'],
    },
    {
      title: 'Computer Vision',
      skills: ['OpenCV', 'CNNs', 'YOLO', 'U-Net', 'ViT', 'Swin Transformer', 'Image Classification', 'Object Detection', 'Image Segmentation'],
    },
    {
      title: 'Backend & APIs',
      skills: ['FastAPI', 'Node.js', 'Express.js', 'NestJS', 'REST APIs'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM', 'Firebase'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Linux', 'Git', 'GitHub'],
    },
    {
      title: 'Development Tools',
      skills: ['Postman', 'VS Code', 'Cursor'],
    },
  ];

  return (
    <section id="skills" className="py-8 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-2">Technical Skills</h2>
        <p className="text-slate-400 mb-4 text-sm">Core technologies and tools I use to build AI applications and software systems</p>
        
        {/* Clean Skills Grid */}
        <div className="space-y-3 mb-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-3 border border-slate-700 hover:border-primary/50 transition-all"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-sm font-semibold text-primary min-w-[160px]">
                  {category.title}
                </h3>
                <div className="flex-1 flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark text-slate-300 text-xs rounded border border-slate-700 hover:border-slate-600 hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Links */}
        <div className="mt-4">
          <h3 className="text-lg font-heading font-semibold text-white mb-2">Competitive Programming</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'LeetCode', url: 'https://leetcode.com/u/Kaoser_208/' },
              { name: 'Codeforces', url: 'https://codeforces.com/profile/2020331019' },
              { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/akaos0c3y' },
            ].map((platform, idx) => (
              <a
                key={idx}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-card rounded-lg border border-slate-700 hover:border-accent text-slate-300 hover:text-accent transition-all text-sm font-medium inline-flex items-center gap-2"
              >
                {platform.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
