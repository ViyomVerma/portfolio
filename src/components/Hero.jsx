import React from 'react';
import { ChevronDown, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-scale-pulse" />
                Frontend Developer Intern
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-gray-100 leading-tight">
              Viyom <span className="font-medium text-gradient-animate">Verma</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
              Aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">Java Full Stack Developer</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Passionate about learning new technical skills with strong expertise in React.js, JavaScript, and modern web technologies. I thrive on building scalable applications, designing intuitive interfaces, and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 button-ripple animate-glow-pulse"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 px-8 py-6 text-base transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/ViyomVerma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group transform hover:scale-110 hover:rotate-12"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/viyom-verma-03b272237/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group transform hover:scale-110 hover:rotate-12"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="mailto:viyomverma3107@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-cyan-500/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group transform hover:scale-110 hover:rotate-12"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Border with Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-75 blur-2xl animate-scale-pulse"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/30 transform hover:scale-105 transition-all duration-500 animate-float">
                <img
                  src="https://customer-assets.emergentagent.com/job_viyom-dev/artifacts/x3wf59rc_formalphoto.jpeg"
                  alt="Viyom Verma"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/30 rounded-full opacity-60 blur-2xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full opacity-60 blur-2xl animate-float animation-delay-500"></div>
              <div className="absolute top-1/4 -right-8 w-16 h-16 bg-purple-500/30 rounded-full opacity-60 blur-xl animate-float animation-delay-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <span className="text-xs tracking-wider uppercase">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;