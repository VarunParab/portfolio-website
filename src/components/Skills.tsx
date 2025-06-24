
import { useState, useEffect } from "react";

const Skills = () => {
  const [inView, setInView] = useState(false);

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", 
    "Docker", "Git", "Figma", "JavaScript", "MongoDB", "Express.js"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={tech} 
              className={`text-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: inView ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="text-gray-300 font-medium text-lg">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
