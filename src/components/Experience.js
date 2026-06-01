import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Experience
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Professional journey and contributions
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

            {/* Experience Item */}
            <div className="relative mb-12 md:ml-16">
              <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white hidden md:block"></div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      AI Model Trainer
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-2">
                      Outlier.ai
                    </p>
                  </div>
                  <div className="text-slate-600">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow">
                      2025 – May 2026
                    </span>
                    <p className="mt-2 text-sm">Remote</p>
                  </div>
                </div>

                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Evaluate and improve large language models through <strong>RLHF (Reinforcement Learning from Human Feedback)</strong>, focusing on code generation, logical reasoning, and mathematical problem-solving domains
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Provide detailed comparative analysis of model outputs, identifying edge cases and failure modes to enhance model accuracy and reasoning capabilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Create high-quality training data through structured prompt engineering and response evaluation for pre-release AI models
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                    RLHF
                  </span>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                    LLM Evaluation
                  </span>
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Prompt Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
