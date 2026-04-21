import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Computer Science student at <span className="font-semibold text-primary">Shahjalal University of Science and Technology</span> with a strong passion for building innovative web applications and solving complex problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With a <span className="font-semibold">GPA of 3.65/4.0</span>, I've developed expertise in Full-Stack Development, specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I've successfully built multiple production-ready applications including tour booking platforms, e-commerce systems, and mobile applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a competitive programmer, I've solved <span className="font-semibold text-primary">700+ problems</span> across platforms like Codeforces, LeetCode, and GeeksforGeeks, which has strengthened my problem-solving abilities and algorithmic thinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I'm working as an <span className="font-semibold">AI Model Trainer at Outlier.ai</span>, where I train and evaluate AI models. My research interests include Machine Learning, Computer Vision, and System Design. I'm also passionate about contributing to open-source projects and staying updated with the latest technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">700+</div>
              <div className="text-gray-600">Problems Solved</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-purple-500">
              <div className="text-4xl font-bold text-purple-500 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-green-500">
              <div className="text-4xl font-bold text-green-500 mb-2">3.65</div>
              <div className="text-gray-600">GPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
