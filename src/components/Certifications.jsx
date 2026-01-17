import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: 'IA Trainee',
      issuer: 'Ministry of Education (MoE-AICTE)',
      icon: Award,
      description: 'Participated in intensive training program focusing on emerging technologies and industry best practices',
      year: '2024'
    },
    {
      title: 'NCIIPC-AICTE Pentathon 2025',
      issuer: 'National Critical Information Infrastructure Protection Centre',
      icon: Trophy,
      description: 'Active participant in national-level technical competition showcasing problem-solving and coding skills',
      year: '2025'
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">Certifications & Recognition</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                    <cert.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-medium text-gray-100 group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <Badge variant="outline" className="border-gray-700 text-gray-400">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-cyan-400 font-medium text-sm mb-3">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in-up">
          <Card className="bg-[#0a0a0b] border-gray-800 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-100 mb-3">Active in Technical Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Regular participant in hackathons and technical competitions, continuously learning and applying new technologies. 
                Committed to staying current with industry trends and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;