import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'BSc in Computer Science and Engineering',
      institution: 'Shahjalal University of Science and Technology',
      location: 'Sylhet, Bangladesh',
      period: '2020 – June 2026',
      gpa: '3.65/4.0',
      description: 'Specializing in Full-Stack Development, Data Structures, Algorithms, and System Design. Research focus on Machine Learning and Computer Vision.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Rajendrapur Cantonment Public College',
      location: 'Gazipur, Bangladesh',
      period: '2018 – 2020',
      gpa: '5.0/5.0',
      description: '',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Education
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Academic background and achievements
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${edu.color} p-1`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 mb-2">{edu.location}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-2">
                      {edu.period}
                    </span>
                    <div className="text-2xl font-bold text-primary">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interests Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Interests & Passions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Competitive Programming', icon: '💻' },
              { name: 'Computer Security', icon: '🔒' },
              { name: 'Machine Learning and AI', icon: '🤖' },
              { name: 'System Design', icon: '🏗️' },
              { name: 'Full-Stack Development', icon: '🌐' },
              { name: 'Open Source Development', icon: '🚀' },
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{interest.icon}</div>
                <div className="font-semibold text-gray-800">{interest.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
