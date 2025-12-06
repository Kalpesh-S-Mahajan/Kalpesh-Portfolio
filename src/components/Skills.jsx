import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaNode,
  FaNetworkWired,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiTensorflow } from "react-icons/si";

const Skills = () => {
  const skills = [
    // Existing Skills
    { name: "HTML5", icon: <FaHtml5 size={40} color="#E44D26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
    { name: "Java", icon: <FaJava size={40} color="#007396" /> },

    // ⭐ New Added Skills
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    { name: "Node.js", icon: <FaNode size={40} color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress size={40} color="#000000" /> },
    { name: "AI / ML", icon: <SiTensorflow size={40} color="#FF6F00" /> },
    { name: "REST API", icon: <FaNetworkWired size={40} color="#FF7F50" /> },
    { name: "Git & GitHub", icon: <FaGithub size={40} color="#000000" /> },
    { name: "Spring MVC", icon: <FaJava size={40} color="#6DB33F" /> },
    { name: "JDBC", icon: <FaJava size={40} color="#6DB33F" /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies and frameworks. Here are
            some of my key skills.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
