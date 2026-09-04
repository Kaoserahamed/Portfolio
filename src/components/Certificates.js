const Certificates = () => {
  const publications = [
    {
      title: 'Invasive Alien Plants Classification using Deep Learning Techniques',
      conference: 'IEEE International Conference on Computer and Information Technology (ICCIT) 2025',
      year: '2025',
      authors: 'S. S. Mahmud Turza, MD. Kaoser Ahamed Anik, Mohammad Shahidur Rahman',
      details: 'Evaluated ResNet, Vision Transformer (ViT), and YOLO-based approaches on an 8.4K-image dataset, achieving a best accuracy of 98.41%.',
      metrics: [
        { label: 'Best Accuracy', value: '98.41%' },
        { label: 'Dataset Size', value: '8.4K Images' },
        { label: 'Species', value: '11' },
      ],
      icon: '📄',
      link: 'https://doi.org/10.1109/ICCIT68739.2025.11491085'
    },
    {
      title: 'River Morphological Change Prediction using Spatio-Temporal Neural Models',
      conference: 'International Journal of Advanced Computer Science and Applications (IJACSA)',
      year: '2026',
      authors: 'MD. Kaoser Ahamed Anik',
      details: 'Built and trained 5 state-of-the-art spatio-temporal deep learning architectures for river morphology prediction using multi-temporal satellite water masks (1988–2025).',
      metrics: [
        { label: 'IoU Score', value: '0.7005' },
        { label: 'Dice Score', value: '0.8236' },
        { label: 'Architectures', value: '5' },
      ],
      icon: '🌊',
      link: 'https://thesai.org/Publications/ViewPaper?Volume=17&Issue=7&Code=IJACSA&SerialNo=74#'
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
    <section id="research" className="py-8 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">Research & Certifications</h2>

        {/* Publications */}
        <div className="mb-6">
          <h3 className="text-xl font-heading font-semibold text-white mb-3">Research Publications</h3>
          <div className="grid gap-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-4 border border-slate-700 hover:border-accent transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{pub.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-semibold text-white mb-2">{pub.title}</h4>
                    <p className="text-accent text-sm font-medium mb-2">{pub.conference}</p>
                    <p className="text-slate-400 text-sm mb-3">{pub.authors}</p>
                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">{pub.details}</p>
                    
                    {/* Metrics */}
                    {pub.metrics && (
                      <div className="flex flex-wrap gap-4 mb-3">
                        {pub.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-dark px-3 py-2 rounded border border-slate-700">
                            <div className="text-xs text-slate-400">{metric.label}</div>
                            <div className="text-sm font-semibold text-primary">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-xs">{pub.year}</span>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs font-medium hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                        >
                          View Publication
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
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
          <h3 className="text-xl font-heading font-semibold text-white mb-3">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
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
