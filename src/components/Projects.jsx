import { useState } from "react";
import "./Projects.css";
import img3 from "../assets/fire.png";
import img4 from "../assets/imageEditor.png";
import img5 from "../assets/movieSearch.png";
import img6 from "../assets/remind.png";
import img7 from "../assets/Digischolar.png";
import img8 from "../assets/storeplus.png";
import img9 from "../assets/taskify.png";
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "FlameGuard: AI-Powered Fire Detection System",
      description:
        "FireVision uses ML and image processing to detect fires in real-time, providing instant alerts for faster response and improved safety.",
      image: img3,
      category: "backend",
      technologies: ["Pyhton", "YOLOv8", "Open-CV"],
      github: "https://github.com/Kalpesh-S-Mahajan/firedetection",
      demo: "https://github.com/Kalpesh-S-Mahajan/firedetection",
    },
    {
      id: 2,
      title: "Movie_Searching_App",
      description:
        "A sleek web app to instantly find movies by title, showing the poster, genre, year, and a quick plot — powered by the OMDb API..",
      image: img5,
      category: "frontend",
      technologies: ["React", "Vite", "CSS"],
      github: " https://github.com/Kalpesh-S-Mahajan/Movie-Searching-app",
      demo: "https://github.com/Kalpesh-S-Mahajan/Movie-Searching-app ",
    },
    {
      id: 3,
      title: "LynxLuminate Studio:Image Converter",
      description:
        "LynxLuminate Studio - Transforming Images, One Click at a Time!",
      image: img4,
      category: "fullstack",
      technologies: ["Python", "Flask", "OpenCV", "Html", "Css", "JavaScript"],
      github: "https://github.com/Kalpesh-S-Mahajan/flask-image-editor-main",
      demo: "https://github.com/Kalpesh-S-Mahajan/flask-image-editor-main",
    },
    {
      id: 4,
      title: "Reminder App",
      description:
        "Remind Me is a JSP-based web application designed to help users stay organized by allowing them to add, view, edit, and delete reminders. It features a clean dashboard interface and ensures users never miss important tasks or events.",
      image: img6,
      category: "fullstack",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "JSP",
        "Servlets",
        "Java",
        "MySQL",
      ],
      github: "https://github.com/Kalpesh-S-Mahajan/RemainderApplication",
      demo: "https://github.com/Kalpesh-S-Mahajan/RemainderApplication",
    },

    {
      id: 5,
      title: "DigiScholar: Your Gateway to Educational Funding",
      description:
        "DigiScholar is a smart platform built with Java EE to discover, apply, and manage scholarships effortlessly.",
      image: img7,
      category: "fullstack",
      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "JDBC",
        "Apache Tomcat",
      ],
      github: "https://github.com/Kalpesh-S-Mahajan/DigiScholar",
      demo: "https://github.com/Kalpesh-S-Mahajan/DigiScholar",
    },

    {
      id: 6,
      title: "StorePulse – Intelligent Store Rating & Review Management",
      description:
        "An AI-powered platform for managing store ratings, analyzing customer sentiment, and providing real-time insights with an advanced admin dashboard.",
      image: img8,
      category: "fullstack",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "JWT",
        "AI Sentiment Analysis",
      ],
      github: "https://github.com/Kalpesh-S-Mahajan/storeplus-rating", // add your repo link
      demo: "https://github.com/Kalpesh-S-Mahajan/storeplus-rating", // add your link if deployed
    },
    {
      id: 7,
      title: "SmartTaskify – Employee Task Management System",
      description:
        "A smart task management system where admins assign tasks and employees update status. Features dashboards, role-based login, and elegant UI.",
      image: img9, // replace with screenshot if needed
      category: "frontend",
      technologies: [
        "React",
        "TailwindCSS",
        "LocalStorage",
        "Context API",
        "Vercel",
      ],
      github: "https://github.com/Kalpesh-S-Mahajan/SmartTaskify",
      demo: "https://smart-taskify-ten.vercel.app/",
    },
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
