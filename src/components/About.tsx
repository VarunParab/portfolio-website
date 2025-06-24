
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating digital experiences that are both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating 
              responsive, user-friendly applications using React, TypeScript, and modern backend technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about clean code, performance optimization, and creating seamless user experiences. 
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Code className="mx-auto mb-4 text-blue-400" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
                <p className="text-gray-300 text-sm">Writing maintainable, scalable code</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Palette className="mx-auto mb-4 text-teal-400" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-sm">Creating beautiful user interfaces</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Rocket className="mx-auto mb-4 text-cyan-400" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
                <p className="text-gray-300 text-sm">Optimizing for speed and efficiency</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
