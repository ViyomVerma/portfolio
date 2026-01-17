import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Career Compass',
      description: 'A comprehensive career guidance platform focused on career exploration and women empowerment, featuring responsive design and smooth navigation.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'React Router'],
      features: [
        'Responsive UI with modern design patterns',
        'Smooth routing and navigation experience',
        'Modular React component architecture',
        'Career resources and guidance tools'
      ],
      github: 'https://github.com/ViyomVerma',
      live: '#'
    },
    {
      title: 'Online Reservation System',
      description: 'Desktop-based reservation management system with comprehensive booking, cancellation, and seat management capabilities.',
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6',
      technologies: ['Java Swing', 'JDBC', 'MySQL', 'OOP', 'Multithreading'],
      features: [
        'Complete booking and cancellation workflow',
        'Real-time seat availability management',
        'JDBC integration with MySQL database',
        'Object-oriented design with multithreading'
      ],
      github: 'https://github.com/ViyomVerma',
      live: '#'
    },
    {
      title: 'AI-Powered Job Description Generator',
      description: 'Intelligent system that generates professional job descriptions dynamically using AI integration, with secure database handling.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      technologies: ['React.js', 'Java', 'JDBC', 'MySQL', 'AI APIs'],
      features: [
        'AI-powered content generation',
        'React.js frontend with Java backend',
        'Secure database operations with JDBC',
        'RESTful API architecture'
      ],
      github: 'https://github.com/ViyomVerma',
      live: '#'
    }
  ];

  const upcomingProjects = [
    {
      title: 'AI Resume Analyzer & Skill Gap Detector',
      description: 'Analyze resumes and identify skill gaps using AI',
      technologies: ['React', 'Java', 'AI APIs', 'Spring Boot']
    },
    {
      title: 'Scalable Job Application Tracker',
      description: 'Track and manage job applications efficiently',
      technologies: ['Next.js', 'Spring Boot', 'MySQL']
    },
    {
      title: 'System Design URL Shortener',
      description: 'Scalable URL shortening service',
      technologies: ['Java', 'Redis', 'PostgreSQL']
    },
    {
      title: 'Real-Time Dashboard with RBAC',
      description: 'Role-based access control dashboard',
      technologies: ['React', 'REST APIs', 'WebSocket']
    },
    {
      title: 'Coding Interview Practice Platform',
      description: 'DSA-focused platform with analytics',
      technologies: ['React', 'Java', 'MongoDB']
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0f0f10]/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60"></div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-medium text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-xs">
                      <span className="w-1 h-1 rounded-full bg-[#06b6d4] mt-1.5 flex-shrink-0"></span>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-gray-700 text-gray-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-700 hover:border-[#06b6d4] hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-100 mb-2">Upcoming Projects</h3>
            <p className="text-gray-400">FAANG-level projects in the pipeline</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-[#0a0a0b] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center group-hover:bg-[#06b6d4]/20 transition-colors flex-shrink-0">
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-100 mb-2">{project.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-gray-700 text-gray-500"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;