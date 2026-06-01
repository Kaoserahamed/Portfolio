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
              I am a Computer Science graduate from <span className="font-semibold text-primary">Shahjalal University of Science and Technology</span> with a solid foundation in software architecture and data structures. I specialize in the MERN stack for full-stack engineering and deep learning model integration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a computer science graduate, I am passionate about applying robust backend principles and machine learning workflows to build scalable, real-world applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently working as an AI Model Trainer at <span className="font-semibold">Outlier.ai</span>, where I evaluate and improve large language models through RLHF (Reinforcement Learning from Human Feedback), focusing on code generation, logical reasoning, and mathematical problem-solving domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">700+</div>
              <div className="text-gray-600">Problems Solved</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-purple-500">
              <div className="text-4xl font-bold text-purple-500 mb-2">8+</div>
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
