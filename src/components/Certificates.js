const Certificates = () => {
  const publications = [
    {
      title: 'Invasive Alien Plants Classification using Deep Learning Techniques',
      conference: 'International Conference on Computer and Information Technology (ICCIT) 2025',
      year: '2025',
      authors: 'S. S. Mahmud Turza, MD. Kaoser Ahamed Anik, Mohammad Shahidur Rahman',
      details: 'Developed a deep learning-based classification system using an 8.4K-image dataset. Achieved 98.41% accuracy using ResNet, Vision Transformer (ViT), and YOLO.',
      icon: '📄',
      link: 'https://doi.org/10.1109/ICCIT68739.2025.11491085'
    },
    {
      title: 'River Morphological Change Prediction using Spatio-Temporal Neural Models',
      conference: 'To appear',
      year: '2026',
      authors: 'MD. Kaoser Ahamed Anik',
      details: 'Built and trained 5 state-of-the-art spatio-temporal deep learning architectures for river morphology prediction. Used multi-temporal satellite water masks (1988–2025) to model long-term riverbank morphodynamics. Achieved best performance with Attention U-Net + ConvLSTM (IoU: 0.7005, Dice: 0.8236). Developed risk-zone maps using frequency-based metrics and a custom Hydrodynamic Stability Index.',
      icon: '🌊',
      link: null
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2026',
      icon: '⭐'
    },
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      issuer: 'AWS Academy',
      year: '2023',
      icon: '☁️'
    },
    {
      title: 'AWS Academy Graduate – Cloud Development',
      issuer: 'AWS Academy',
      year: '2023',
      icon: '☁️'
    },
    {
      title: 'AWS Academy Graduate – Solutions Architect',
      issuer: 'AWS Academy',
      year: '2023',
      icon: '☁️'
    },
  ];

  return (
    <section id="certificates" className="py-12 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-8">Research & Certifications</h2>

        {/* Publications */}
        <div className="mb-8">
          <h3 className="text-xl font-heading font-semibold text-white mb-4">Publications</h3>
          <div className="grid gap-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-slate-700 hover:border-accent transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-3xl">{pub.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-base font-heading font-semibold text-white mb-2">{pub.title}</h4>
                    <p className="text-accent text-sm font-medium mb-2">{pub.conference}</p>
                    <p className="text-slate-400 text-sm mb-2">{pub.authors}</p>
                    {pub.details && <p className="text-slate-300 text-sm mb-2">{pub.details}</p>}
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-xs">{pub.year}</span>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs font-medium hover:text-blue-400 transition-colors"
                        >
                          View Publication →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-white mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-slate-700 hover:border-primary transition-all"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="text-sm font-heading font-semibold text-white mb-2 leading-tight">{cert.title}</h4>
                <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
                <span className="text-slate-500 text-xs">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
