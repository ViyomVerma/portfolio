import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import emailjs from "@emailjs/browser"; // Install: npm install @emailjs/browser

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_cx4mi3n", // replace with your EmailJS Service ID
        "template_rhqldtr", // replace with your EmailJS Template ID
        formData,
        "tS0gaDqyRqnN0uTg_", // replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Message Sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          toast({
            title: "Error!",
            description: "Failed to send message. Please try again later.",
          });
        },
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "viyomverma3107@gmail.com",
      link: "mailto:viyomverma3107@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9958983720",
      link: "tel:+919958983720",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Viyom Verma",
      link: "https://www.linkedin.com/in/viyom-verma-03b272237/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@ViyomVerma",
      link: "https://github.com/ViyomVerma",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-transparent via-[#0f0f10]/50 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mt-4">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-left">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-[#111827] border-gray-800 hover:border-[#06b6d4] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center group-hover:bg-[#06b6d4]/20 transition-colors">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400 mb-1">
                          {item.label}
                        </p>
                        <p className="text-gray-200 font-medium group-hover:text-cyan-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Location */}
            <Card className="bg-[#111827] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-gray-200 font-medium">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <Card className="bg-[#111827] border-gray-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-[#0a0a0b] border-gray-700 focus:border-[#06b6d4] text-gray-100 placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-[#0a0a0b] border-gray-700 focus:border-[#06b6d4] text-gray-100 placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      required
                      className="bg-[#0a0a0b] border-gray-700 focus:border-[#06b6d4] text-gray-100 placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="bg-[#0a0a0b] border-gray-700 focus:border-[#06b6d4] text-gray-100 placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#06b6d4] hover:bg-[#0891b2] text-white py-6 text-base transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
