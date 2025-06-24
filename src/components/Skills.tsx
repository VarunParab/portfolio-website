
import { useState, useEffect } from "react";

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skills = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 90, color: "from-blue-500 to-blue-700" },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
    { name: "Python", level: 80, color: "from-yellow-400 to-yellow-600" },
    { name: "PostgreSQL", level: 85, color: "from-indigo-400 to-indigo-600" },
    { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
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

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-lg">{skill.name}</span>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: inView ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 200}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "Git", "Figma"].map((tech) => (
            <div key={tech} className="text-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
              <div className="text-gray-300 font-medium">{tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
