import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const experience = {
    company: 'NeoGenCode Technologies Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    duration: 'July 2025 – Present',
    location: 'Remote',
    project: 'HireInSecond (AI-Powered Hiring Platform)',
    responsibilities: [
      'Developed responsive and scalable UI components using React.js, Tailwind CSS, and JavaScript',
      'Integrated frontend with backend services via RESTful APIs for seamless data flow',
      'Implemented AI API integration for dynamic job description generation',
      'Built reusable and modular React components to improve code maintainability',
      'Collaborated with cross-functional teams in an Agile development environment',
      'Utilized Git and GitHub for version control and collaborative development'
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'AI Integration', 'Git/GitHub', 'Agile']
  };

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">Work Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group animate-fade-in-up">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center group-hover:bg-[#06b6d4]/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-100">{experience.role}</h3>
                      <p className="text-cyan-400 font-medium">{experience.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <Badge variant="outline" className="border-gray-700 text-gray-300">
                    {experience.location}
                  </Badge>
                </div>
              </div>

              {/* Project */}
              <div className="mb-6 p-4 bg-[#0a0a0b] rounded-lg border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Key Project</p>
                <p className="text-lg text-gray-200 font-medium">{experience.project}</p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-100 mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] mt-2 flex-shrink-0"></span>
                      <span className="text-gray-400">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-medium text-gray-100 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-[#06b6d4]/10 text-cyan-400 border-[#06b6d4]/30 hover:bg-[#06b6d4]/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;