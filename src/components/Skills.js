import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      color: 'blue',
    },
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'React', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
      color: 'purple',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Spring Boot'],
      color: 'green',
    },
    {
      title: 'Mobile',
      skills: ['Jetpack Compose', 'Kotlin', 'React Native'],
      color: 'orange',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'red',
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions'],
      color: 'indigo',
    },
    {
      title: 'Tools & APIs',
      skills: ['Git', 'GitHub', 'Postman', 'RESTful APIs'],
      color: 'blue',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-r ${colorClasses[category.color]} p-4`}>
                <h3 className="text-xl font-bold text-white text-center">
                  {category.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Competitive Programming
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Active problem solver across multiple platforms
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://codeforces.com/profile/2020331019"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <svg className="w-12 h-12 text-blue-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
              </svg>
              <span className="text-lg font-bold text-gray-800">Codeforces</span>
              <span className="text-sm text-gray-600 mt-1">Problem Solving</span>
            </a>
            <a
              href="https://leetcode.com/u/Kaoser_208/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <svg className="w-12 h-12 text-orange-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <span className="text-lg font-bold text-gray-800">LeetCode</span>
              <span className="text-sm text-gray-600 mt-1">Algorithms & DS</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/akaos0c3y"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <svg className="w-12 h-12 text-green-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.45 17.98c-1.17.52-2.26 1.02-3.46 1.02-1.05 0-1.73-.5-1.73-1.42 0-1.25.83-1.92 2.38-2.65 1.7-.8 2.65-1.73 2.65-3.28 0-2.03-1.62-3.42-4.17-3.42-1.53 0-2.85.52-3.9 1.32l.68 1.47c.9-.68 1.95-1.12 3.07-1.12 1.27 0 2.03.6 2.03 1.57 0 1.05-.75 1.65-2.18 2.33-1.8.85-2.85 1.8-2.85 3.52 0 1.95 1.42 3.15 3.6 3.15 1.5 0 2.78-.52 3.88-1.2l-.68-1.47zM8.63 8.25c-2.4 0-4.35 1.95-4.35 4.35s1.95 4.35 4.35 4.35 4.35-1.95 4.35-4.35-1.95-4.35-4.35-4.35zm0 7.2c-1.57 0-2.85-1.28-2.85-2.85s1.28-2.85 2.85-2.85 2.85 1.28 2.85 2.85-1.28 2.85-2.85 2.85z"/>
              </svg>
              <span className="text-lg font-bold text-gray-800">GeeksforGeeks</span>
              <span className="text-sm text-gray-600 mt-1">Practice & Learn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
