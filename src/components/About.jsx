import React from 'react';
import { GraduationCap, Code, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Get To Know Me</span>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a passionate Frontend Developer Intern at <span className="text-[#06b6d4] font-medium">NeoGenCode Technologies</span>, with a strong drive to become a Java Full Stack Developer. My journey in technology is fueled by continuous learning and a deep interest in creating impactful digital solutions.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I specialize in building responsive, scalable applications using modern technologies like React.js, Next.js, and Tailwind CSS. My experience spans from crafting intuitive user interfaces to integrating AI-powered features and working with backend APIs.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                With a strong foundation in Core Java, OOP principles, and database management, I'm constantly expanding my expertise in full-stack development. I thrive on debugging challenges, designing clean interfaces, and solving complex technical problems.
              </p>
            </div>

            {/* Education Card */}
            <Card className="bg-[#111827] border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 card-hover-effect hover:shadow-lg hover:shadow-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 animate-glow-pulse">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-100 mb-1">Education</h3>
                    <p className="text-gray-300 font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-gray-400 text-sm mt-1">Institute of Technology and Science, Mohan Nagar</p>
                    <p className="text-gray-500 text-sm mt-1">Graduated: 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - What Drives Me */}
          <div className="space-y-6 animate-fade-in-right">
            <Card className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                    <Code className="w-6 h-6 text-[#06b6d4]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-100 mb-3">What Drives Me</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                        <span className="text-gray-400">Continuous learning and staying updated with latest technologies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                        <span className="text-gray-400">Building scalable, user-friendly applications that solve real problems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                        <span className="text-gray-400">Mastering both frontend aesthetics and backend architecture</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                        <span className="text-gray-400">Contributing to innovative projects in collaborative teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                    <Target className="w-6 h-6 text-[#06b6d4]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-100 mb-3">Career Goal</h3>
                    <p className="text-gray-400 leading-relaxed">
                      To become a proficient Java Full Stack Developer, contributing to impactful projects at top tech companies. I aim to bridge elegant frontend design with robust backend architecture, creating seamless digital experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;