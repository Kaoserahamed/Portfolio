import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'Kotlin', 'Python', 'JavaScript'],
      color: 'blue',
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'purple',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST API Design'],
      color: 'green',
    },
    {
      title: 'Mobile',
      skills: ['Kotlin', 'Jetpack Compose', 'Android SDK'],
      color: 'orange',
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase Firestore'],
      color: 'red',
    },
    {
      title: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'Postman', 'AWS'],
      color: 'indigo',
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
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold">
              Codeforces
            </div>
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
              LeetCode
            </div>
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-lg font-semibold">
              GeeksforGeeks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
