import React from 'react';
import { Code, Mail, Github, Linkedin, Heart, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/ViyomVerma'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/viyom-verma-03b272237/'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:viyomverma3107@gmail.com'
    }
  ];

  return (
    <footer className="border-t border-gray-800 bg-[#0a0a0b]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#06b6d4] rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-100">Viyom Verma</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer Intern & Aspiring Java Full Stack Developer building modern, scalable web applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#06b6d4] hover:bg-[#06b6d4]/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[#06b6d4] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#06b6d4] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:viyomverma3107@gmail.com"
                  className="text-gray-400 hover:text-[#06b6d4] transition-colors text-sm flex items-start space-x-2"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>viyomverma3107@gmail.com</span>
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 9958983720</span>
              </li>
              <li className="text-gray-400 text-sm flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Viyom Verma. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-[#06b6d4] fill-current" />
              <span>using React.js & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;