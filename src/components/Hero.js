const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-dark pt-20 px-6 py-12"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight leading-tight">
              MD. KAOSER AHAMED ANIK
            </h1>

            <p className="text-xl text-slate-300 font-body mb-4">
              Software Engineer • ML Engineer • DevOps Engineer
            </p>

            <p className="text-base text-slate-400 font-body mb-8">
              AWS Certified Solutions Architect • Researcher • Competitive Programmer • CSE Graduate from SUST
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/Kaoserahamed/Portfolio/blob/main/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-primary/20 text-sm"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-card text-white font-medium rounded-lg hover:bg-slate-700 transition-all border border-slate-700 hover:border-primary text-sm"
              >
                Hire Me
              </a>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-body">
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">⭐</span>
                <span>AWS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">📄</span>
                <span>ICCIT 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent text-lg">💻</span>
                <span>700+ Problems</span>
              </div>
            </div>
          </div>

          {/* Right Side - About */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">About Me</h2>
            <div className="space-y-4 text-slate-300 font-body leading-relaxed">
              <p>
                I am a Computer Science graduate from <span className="text-primary font-semibold">Shahjalal University of Science and Technology (SUST)</span> with expertise spanning full-stack development, machine learning engineering, and cloud infrastructure. As an <span className="text-accent font-semibold">AWS Certified Solutions Architect – Associate</span>, I design and deploy scalable cloud solutions.
              </p>
              <p>
                My technical expertise includes building production-ready applications with the MERN stack, developing deep learning models for research (ICCIT 2025 publication with 98.41% accuracy), and implementing DevOps practices with Docker and Linux.
              </p>
              <p>
                Currently working as an AI Model Trainer at <span className="text-accent font-semibold">Outlier.ai</span>, where I evaluate and improve large language models through RLHF, focusing on code generation, logical reasoning, and mathematical problem-solving. I've solved 700+ competitive programming problems across Codeforces, LeetCode, and GeeksforGeeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
