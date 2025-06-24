
import { useState, useEffect } from "react";
import { Code, Brain, Database, Settings } from "lucide-react";

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      technologies: ["React", "TypeScript", "JavaScript", "Node.js", "Express.js", "Python"]
    },
    {
      title: "AI/LLMs",
      icon: Brain,
      technologies: ["OpenAI GPT", "Claude", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"]
    },
    {
      title: "Databases",
      icon: Database,
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"]
    },
    {
      title: "DevOps",
      icon: Settings,
      technologies: ["AWS", "Docker", "Git", "GitHub Actions", "Vercel", "Nginx"]
    }
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

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: inView ? `${categoryIndex * 200}ms` : '0ms',
                }}
              >
                <div className="mb-6 flex items-center space-x-3">
                  <IconComponent className="text-blue-400" size={32} />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={tech}
                      className={`text-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{
                        transitionDelay: inView ? `${(categoryIndex * 200) + (techIndex * 100)}ms` : '0ms',
                      }}
                    >
                      <div className="text-gray-300 font-medium">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
