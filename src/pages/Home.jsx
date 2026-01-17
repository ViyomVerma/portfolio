import React, { useEffect, useState } from "react";
import {
  Code,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/animations.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0a0a0b] text-gray-100 overflow-hidden">
      {/* Animated Background with Particles */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
