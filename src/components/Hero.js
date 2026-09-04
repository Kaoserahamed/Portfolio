const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-dark pt-16 px-6 py-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Hero */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight leading-tight">
              MD. KAOSER AHAMED ANIK
            </h1>

            <p className="text-2xl text-white font-semibold font-body mb-3">
              • Software Engineer
            </p>

            <p className="text-base text-slate-300 font-body mb-4">
              CSE Graduate from SUST • AWS Certified Solutions Architect • AI Model Trainer • Researcher
            </p>

           

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/Kaoserahamed/Portfolio/blob/main/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-card text-white font-semibold rounded-lg hover:bg-slate-700 transition-all border border-slate-700 hover:border-primary"
              >
                Let's Work Together
              </a>
            </div>

            {/* Credibility Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-body">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>AWS Certified Solutions Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>IEEE ICCIT 2025 Publication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>700+ Competitive Programming</span>
              </div>
            </div>
          </div>

          {/* Right Side - About */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">My Journey</h2>
            <div className="space-y-3 text-slate-300 font-body leading-relaxed">
              <p>
                My journey started at <span className="text-primary font-semibold">SUST</span>, where I built a strong foundation in computer science, programming, and problem-solving through <span className="text-primary font-semibold">700+ competitive programming problems</span>.
              </p>
              <p>
                From there, I moved into <span className="text-accent font-semibold">software development</span>, building full-stack applications and learning how to design and deploy real-world systems.
              </p>
              <p>
                My interest in <span className="text-accent font-semibold">AI/ML and deep learning</span> led me into research, including two publications: an <span className="text-primary font-semibold">IEEE ICCIT 2025 paper on invasive plant classification</span> and a <span className="text-primary font-semibold">Springer publication on river morphology prediction</span>.
              </p>
              <p>
                Along the way, I explored <span className="text-accent font-semibold">AWS and cloud engineering</span>, earning the <span className="text-primary font-semibold">AWS Certified Solutions Architect – Associate</span> certification.
              </p>
              <p>
                Today, I work as an <span className="text-accent font-semibold">AI Model Trainer at Outlier.ai</span>, working with LLM evaluation while continuing to build <span className="text-primary font-semibold">AI-powered software and ML systems</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
