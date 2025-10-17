"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  
  Code2,
  Briefcase,
  User,
  MessageSquare,
  
  Sun,
  Moon,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState<{
    home: boolean;
    about: boolean;
    skills: boolean;
    experience: boolean;
    contact: boolean;
  }>({
    home: false,
    about: false,
    skills: false,
    experience: false,
    contact: false,
  });
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "contact"];
      const newVisible: {
        home: boolean;
        about: boolean;
        skills: boolean;
        experience: boolean;
        contact: boolean;
      } = {
        home: false,
        about: false,
        skills: false,
        experience: false,
        contact: false,
      };

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisible[section as keyof typeof newVisible] =
            rect.top < window.innerHeight * 0.75;
        }
      });

      setIsVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Adage Digital Ltd",
      period: "November 2024 - Present",
      description:
        "Built responsive web applications, converted Figma designs to dynamic pages, conducted testing, fixed bugs, and collaborated with teams to deliver scalable solutions.",
    },
    {
      role: "Intern Web Developer",
      company: "Adage Digital Ltd",
      period: "April 2024 - October 2024",
      description:
        "Developed and maintained responsive web apps, optimized components, participated in code reviews, debugged issues, and ensured high-quality, accessible deliverables.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c0bf3ba1-041c-4535-88c4-0449bac4ad42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="overflow-hidden transition-colors duration-500 bg-background text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-background/100 backdrop-blur-lg z-50 border-b border-emerald-500/20 animate-slideDown transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div
                className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                Sharangan
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                {["home", "about", "skills", "experience", "contact"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="capitalize text-foreground hover:text-emerald-500 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </button>
                  )
                )}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 transition-all hover:scale-110"
                >
                  {darkMode ? (
                    <Sun size={20} className="text-emerald-400" />
                  ) : (
                    <Moon size={20} className="text-emerald-600" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-3">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-emerald-500/10 transition-transform hover:scale-110"
                >
                  {darkMode ? (
                    <Sun size={18} className="text-emerald-400" />
                  ) : (
                    <Moon size={18} className="text-emerald-600" />
                  )}
                </button>
                <button
                  className="hover:scale-110 transition-transform text-foreground"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 space-y-4 animate-fadeIn items-center justify-center flex flex-col w-full">
                {["home", "about", "skills", "experience", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="w-full text-center capitalize text-foreground hover:text-emerald-500 transition-colors text-lg font-semibold"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </nav>

        <style jsx>{`
          :global(.dark) {
            --background: 0 0% 0%;
            --foreground: 0 0% 100%;
            --card: 240 10% 3.9%;
            --card-foreground: 0 0% 98%;
            --muted: 240 3.7% 15.9%;
            --muted-foreground: 240 5% 64.9%;
            --secondary: 240 3.7% 15.9%;
          }

          :global(:root) {
            --background: 0 0% 98%;
            --foreground: 240 10% 3.9%;
            --card: 0 0% 100%;
            --card-foreground: 240 10% 3.9%;
            --muted: 240 4.8% 95.9%;
            --muted-foreground: 240 3.8% 46.1%;
            --secondary: 240 4.8% 95.9%;
          }

          :global(.bg-background) {
            background-color: hsl(var(--background));
          }

          :global(.text-foreground) {
            color: hsl(var(--foreground));
          }

          :global(.bg-card) {
            background-color: hsl(var(--card));
          }

          :global(.text-muted-foreground) {
            color: hsl(var(--muted-foreground));
          }

          :global(.bg-muted) {
            background-color: hsl(var(--muted));
          }

          :global(.bg-secondary) {
            background-color: hsl(var(--secondary));
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideRight {
            from {
              transform: translateX(-50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideLeft {
            from {
              transform: translateX(50px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes glow {
            0%,
            100% {
              box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
            }
            50% {
              box-shadow: 0 0 40px rgba(16, 185, 129, 0.8);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.5s ease-out;
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }

          .animate-slideUp {
            animation: slideUp 0.6s ease-out;
          }

          .animate-slideRight {
            animation: slideRight 0.6s ease-out;
          }

          .animate-slideLeft {
            animation: slideLeft 0.6s ease-out;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}</style>

        {/* Hero Section */}
        <section
          id="home"
          className="flex items-center justify-center pt-24 pb-20 px-4 bg-gradient-to-br from-background via-emerald-950/5 to-background relative transition-colors duration-500"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible.home ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg animate-glow animate-float overflow-hidden">
                <Image
                  src="/assets/prf.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1
              className={`text-3xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${
                isVisible.home ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                Hi, I'm Sharangan
              </span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-emerald-600 dark:text-emerald-200 mb-8 transition-all duration-1000 delay-300 ${
                isVisible.home ? "animate-slideUp" : "opacity-0"
              }`}
            >
              Software Developer | Creative Problem Solver
            </p>
            <p
              className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible.home ? "animate-slideUp" : "opacity-0"
              }`}
            >
              Creating modern, responsive, and user-focused web applications
              with clean, intuitive interfaces, seamless experiences, and
              scalable, high-performance solutions.
            </p>
            <div
              className={`flex justify-center space-x-4 transition-all duration-1000 delay-500 ${
                isVisible.home ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-110"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="px-5 md:px-8 py-2 md:py-3 border-2 border-emerald-500 rounded-full font-semibold hover:bg-emerald-500/10 transition-all hover:scale-110"
              >
                View Work
              </button>
            </div>
            <div
              className={`flex justify-center space-x-6 mt-12 transition-all duration-1000 delay-600 ${
                isVisible.home ? "animate-slideUp" : "opacity-0"
              }`}
            >
              {/* GitHub */}
              <a
                href="https://github.com/sharangan13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-emerald-500 transition-all hover:scale-125 transform"
              >
                <Github size={24} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kugathasan-sharangan-299342254/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-emerald-500 transition-all hover:scale-125 transform"
              >
                <Linkedin size={24} />
              </a>

              {/* Email */}
              <a
                href="mailto:sharangan07@gmail.com"
                className="text-foreground hover:text-emerald-500 transition-all hover:scale-125 transform"
              >
                <Mail size={24} />
              </a>

              <a
                href="https://wa.me/94769218508"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-emerald-500 transition-all hover:scale-125 transform"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex items-center py-20 px-4 bg-muted/30 relative transition-colors duration-500"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div
              className={`flex items-center justify-center mb-12 transition-all duration-1000 ${
                isVisible.about ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <User className="mr-3 text-emerald-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            </div>
            <div
              className={`bg-card backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-emerald-500/20 shadow-lg shadow-emerald-500/5 transition-all duration-1000 hover:border-emerald-500/40 ${
                isVisible.about ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible.about ? "animate-slideRight" : "opacity-0"
                  }`}
                >
                  <div className="w-full h-64 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl flex items-center justify-center text-8xl shadow-inner hover:scale-105 transition-transform duration-500">
                    💻
                  </div>
                </div>
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible.about ? "animate-slideLeft" : "opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                    Passionate Developer
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Frontend Developer with 1+ year of experience in web
                    development, specializing in creating responsive and
                    scalable web applications. Skilled in React.js, Next.js, and
                    TypeScript, with hands-on experience using GraphQL, Tailwind
                    CSS, Bootstrap, and shadcn/ui.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Passionate about crafting clean, user-centric interfaces and
                    implementing modern design systems. Continuously exploring
                    new technologies and best practices to build efficient,
                    high-performance digital solutions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Problem Solver", "Team Player", "Fast Learner"].map(
                      (tag, index) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-emerald-500/10 rounded-full text-sm border border-emerald-500/30 hover:bg-emerald-500/20 transition-all hover:scale-110"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="flex items-center py-20 px-4 bg-background transition-colors duration-500"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div
              className={`flex items-center justify-center mb-12 transition-all duration-1000 ${
                isVisible.skills ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <Code2 className="mr-3 text-emerald-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-card backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-105 duration-1000 ${
                    isVisible.skills ? "animate-slideUp" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-emerald-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/50"
                      style={{
                        width: isVisible.skills ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 0.1 + 0.3}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`mt-12 text-center transition-all duration-1000 delay-500 ${
                isVisible.skills ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <p className="text-muted-foreground mb-6">
                Also experienced with:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Git",

                  "GraphQL",
                  "Mongo DB",
                  "PostgreSQL",
                  "Node js",
                  "PHP",
                  "CI/CD",
                ].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card rounded-lg text-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-110"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="flex items-center py-20 px-4 bg-muted/30 transition-colors duration-500"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div
              className={`flex items-center justify-center mb-12 transition-all duration-1000 ${
                isVisible.experience ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <Briefcase className="mr-3 text-emerald-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`bg-card backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/10 duration-1000 ${
                    isVisible.experience ? "animate-slideRight" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-foreground">{exp.company}</p>
                    </div>
                    <span className="text-emerald-400 font-semibold mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* Contact Section */}
        <section
          id="contact"
          className="flex items-center py-20 px-4 bg-background transition-colors duration-500"
        >
          <div className="max-w-4xl mx-auto w-full">
            <div
              className={`flex items-center justify-center mb-12 transition-all duration-1000 ${
                isVisible.contact ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <MessageSquare className="mr-3 text-emerald-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            </div>
            <div
              className={`bg-card backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-emerald-500/20 shadow-lg shadow-emerald-500/5 transition-all duration-1000 ${
                isVisible.contact ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <p className="text-center text-xl text-muted-foreground mb-12">
                Feel free to drop me a message anytime.
              </p>

              {/* Form */}
              <form onSubmit={onSubmit} className="space-y-6">
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible.contact ? "animate-slideRight" : "opacity-0"
                  }`}
                >
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-emerald-500/30 rounded-lg focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div
                  className={`transition-all duration-1000 delay-300 ${
                    isVisible.contact ? "animate-slideLeft" : "opacity-0"
                  }`}
                >
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-emerald-500/30 rounded-lg focus:outline-none focus:border-emerald-500 transition-all focus:shadow-lg focus:shadow-emerald-500/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div
                  className={`transition-all duration-1000 delay-400 ${
                    isVisible.contact ? "animate-slideRight" : "opacity-0"
                  }`}
                >
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-background border border-emerald-500/30 rounded-lg focus:outline-none focus:border-emerald-500 transition-all resize-none focus:shadow-lg focus:shadow-emerald-500/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105 duration-1000 delay-500 ${
                    isVisible.contact ? "animate-slideUp" : "opacity-0"
                  }`}
                >
                  {result ? result : "Send Message"}
                </button>
              </form>

              <div
                className={`flex justify-center space-x-8 mt-12 transition-all duration-1000 delay-600 ${
                  isVisible.contact ? "animate-slideUp" : "opacity-0"
                }`}
              >
                <a
                  href="https://github.com/sharangan13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-emerald-500 transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kugathasan-sharangan-299342254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-emerald-500 transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:sharangan07@gmail.com"
                  className="flex items-center space-x-2 text-foreground hover:text-emerald-500 transition-all hover:scale-110"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://wa.me/94769218508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground hover:text-emerald-500 transition-all hover:scale-110"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-emerald-500/20 bg-background transition-colors duration-500">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}


