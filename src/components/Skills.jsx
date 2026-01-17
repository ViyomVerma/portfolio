import React from 'react';
import { Code, Database, Server, Laptop, GitBranch, Layers } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Laptop,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
      color: '#06b6d4'
    },
    {
      title: 'Backend & Programming',
      icon: Server,
      skills: ['Core Java', 'OOP Concepts', 'Spring Boot (Beginner)', 'DSA (Basic)'],
      color: '#0891b2'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB (Beginner)'],
      color: '#0e7490'
    },
    {
      title: 'Tools & Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Agile Methodology'],
      color: '#155e75'
    },
    {
      title: 'Integration & APIs',
      icon: Layers,
      skills: ['RESTful APIs', 'AI API Integration', 'JDBC'],
      color: '#164e63'
    },
    {
      title: 'Core Competencies',
      icon: Code,
      skills: ['Responsive Design', 'Debugging', 'Problem Solving', 'UI Design', 'Modular Code'],
      color: '#06b6d4'
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0f0f10]/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">Skills & Technologies</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center group-hover:bg-[#06b6d4]/20 transition-colors">
                    <category.icon className="w-6 h-6 text-[#06b6d4]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:border-[#06b6d4] hover:text-[#06b6d4] hover:bg-[#06b6d4]/5 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;