const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-dark">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-heading font-bold text-white mb-8">About</h2>
        <p className="text-lg text-slate-300 font-body leading-relaxed">
          I am a Computer Science graduate from <span className="text-primary font-semibold">Shahjalal University of Science and Technology (SUST)</span> with expertise spanning full-stack development, machine learning engineering, and cloud infrastructure. As an <span className="text-accent font-semibold">AWS Certified Solutions Architect – Associate</span>, I design and deploy scalable cloud solutions.
        </p>
        <p className="text-lg text-slate-300 font-body leading-relaxed mt-6">
          My technical expertise includes building production-ready applications with the MERN stack, developing deep learning models for research (ICCIT 2025 publication with 98.41% accuracy), and implementing DevOps practices with Docker and Linux. I bridge the gap between robust backend architecture and intelligent ML systems.
        </p>
        <p className="text-lg text-slate-300 font-body leading-relaxed mt-6">
          Currently working as an AI Model Trainer at <span className="text-accent font-semibold">Outlier.ai</span>, where I evaluate and improve large language models through RLHF (Reinforcement Learning from Human Feedback), focusing on code generation, logical reasoning, and mathematical problem-solving domains. I've solved 700+ competitive programming problems across platforms like Codeforces, LeetCode, and GeeksforGeeks.
        </p>
      </div>
    </section>
  );
};

export default About;
