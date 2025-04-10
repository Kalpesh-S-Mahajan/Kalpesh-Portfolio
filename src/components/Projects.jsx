import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FlameGuard: AI-Powered Fire Detection System",
      description:
        "FireVision uses ML and image processing to detect fires in real-time, providing instant alerts for faster response and improved safety.",
      image: "./public/images/fire.png",
      category: "backend",
      technologies: ["Pyhton", "YOLOv8", "Open-CV"],
      github: "https://github.com/Kalpesh-S-Mahajan/firedetection",
      demo: "https://github.com/Kalpesh-S-Mahajan/firedetection",
    },
    // {
    //   id: 2,
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website built with React and Vite.",
    //   image: "https://via.placeholder.com/600x400",
    //   category: "frontend",
    //   technologies: ["React", "Vite", "CSS"],
    //   github: " ",
    //   demo: " ",
    // },
    {
      id: 3,
      title: "LynxLuminate Studio:Image Converter",
      description:
        "LynxLuminate Studio - Transforming Images, One Click at a Time!",
      image: "./public/images/imageEditor.png",
      category: "fullstack",
      technologies: ["Python", "Flask", "OpenCV", "Html", "Css", "JavaScript"],
      github: "https://github.com/Kalpesh-S-Mahajan/flask-image-editor-main",
      demo: "https://github.com/Kalpesh-S-Mahajan/flask-image-editor-main",
    },
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description: "A weather dashboard that displays current and forecasted weather data.",
    //   image: "https://via.placeholder.com/600x400",
    //   category: "frontend",
    //   technologies: ["JavaScript", "HTML/CSS", "API Integration"],
    //   github: "https://github.com",
    //   demo: "https://demo-link.com"
    // },
    // {
    //   id: 5,
    //   title: "Image Processing API",
    //   description: "A RESTful API for image processing and manipulation.",
    //   image: "https://via.placeholder.com/600x400",
    //   category: "backend",
    //   technologies: ["Node.js", "Express", "OpenCV", "Python"],
    //   github: "https://github.com",
    //   demo: "https://demo-link.com"
    // },
    // {
    //   id: 6,
    //   title: "Social Media Dashboard",
    //   description: "A dashboard for managing and analyzing social media accounts.",
    //   image: "https://via.placeholder.com/600x400",
    //   category: "frontend",
    //   technologies: ["React", "Chart.js", "CSS"],
    //   github: "https://github.com",
    //   demo: "https://demo-link.com"
    // }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects. Each one was built with a focus
            on user experience and performance.
          </p>
        </div>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === "backend" ? "active" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span className="tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <a
            href="https://github.com/Kalpesh-S-Mahajan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
