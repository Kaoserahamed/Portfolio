const Experience = () => {
  return (
    <section id="experience" className="py-12 px-6 bg-dark">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-8">Experience</h2>

        <div className="relative border-l-2 border-primary pl-8">
          <div className="mb-8">
            <div className="absolute -left-3 w-6 h-6 bg-primary rounded-full border-4 border-dark"></div>
            
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  AI Model Trainer
                </h3>
                <p className="text-base text-accent font-semibold mb-1">Outlier.ai</p>
                <p className="text-slate-400 text-sm">Remote</p>
              </div>
              <span className="px-4 py-2 bg-card text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                2025 – May 2026
              </span>
            </div>

            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Evaluate and improve large language models through <strong className="text-white">RLHF (Reinforcement Learning from Human Feedback)</strong>, focusing on code generation, logical reasoning, and mathematical problem-solving domains</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Provide detailed comparative analysis of model outputs, identifying edge cases and failure modes to enhance model accuracy and reasoning capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">▹</span>
                <span>Create high-quality training data through structured prompt engineering and response evaluation for pre-release AI models</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-lg border border-primary/30">RLHF</span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-lg border border-primary/30">LLM Evaluation</span>
              <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-lg border border-primary/30">Prompt Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
