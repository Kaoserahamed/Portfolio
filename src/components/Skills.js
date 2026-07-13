const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      icon: '💻'
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
      icon: '⚙️'
    },
    {
      title: 'Mobile',
      skills: ['Kotlin', 'Jetpack Compose'],
      icon: '📱'
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'Firebase'],
      icon: '💾'
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Linux'],
      icon: '☁️'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman'],
      icon: '🔧'
    },
    {
      title: 'AI & ML',
      skills: ['TensorFlow', 'PyTorch', 'YOLOv11', 'ResNet', 'Vision Transformer'],
      icon: '🤖'
    },
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 border border-slate-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-heading font-semibold text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-dark text-slate-300 text-sm rounded-lg border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { name: 'LeetCode', url: 'https://leetcode.com/u/Kaoser_208/', icon: '💻' },
            { name: 'Codeforces', url: 'https://codeforces.com/profile/2020331019', icon: '🏆' },
            { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/akaos0c3y', icon: '📚' },
          ].map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-4 border border-slate-700 hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/10 flex items-center gap-4"
            >
              <span className="text-3xl">{platform.icon}</span>
              <div>
                <h4 className="text-base font-heading font-semibold text-white">{platform.name}</h4>
                <p className="text-sm text-slate-400">View Profile →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
