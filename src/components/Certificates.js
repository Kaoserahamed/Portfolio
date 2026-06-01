import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Cloud Quest: Solutions Architect',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'April 2026',
      description: 'Completed hands-on training covering cloud architecture design, security, networking, and best practices for building scalable solutions on AWS.',
      icon: '☁️',
      color: 'from-orange-500 to-red-600',
      credlyUrl: 'https://www.credly.com/users/md-kaoser-ahamed-anik',
    },
    {
      title: 'AWS Academy Graduate - Cloud Developing',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'January 2026',
      description: 'Comprehensive training in developing cloud applications, including serverless architectures, APIs, databases, and deployment strategies on AWS.',
      icon: '💻',
      color: 'from-blue-500 to-cyan-600',
      credlyUrl: 'https://www.credly.com/users/md-kaoser-ahamed-anik',
    },
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services Training and Certification',
      date: 'January 2026',
      description: 'Foundational knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support.',
      icon: '🎓',
      color: 'from-purple-500 to-indigo-600',
      credlyUrl: 'https://www.credly.com/users/md-kaoser-ahamed-anik',
    },
  ];

  return (
    <section id="certificates" className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Certifications
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Professional certifications and completed training programs
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-center`}>
                <div className="text-6xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {cert.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-500 mb-4 font-medium">
                  Issued: {cert.date}
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  View on Credly
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-slate-600 text-sm">
            All certifications are verified and can be viewed on{' '}
            <a
              href="https://www.credly.com/users/md-kaoser-ahamed-anik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              my Credly profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
