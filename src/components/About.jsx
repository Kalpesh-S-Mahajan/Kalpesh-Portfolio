import "./About.css";
import img2 from "../assets/about.jpg";
import obj1 from "../assets/Kalpesh_CV.pdf";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Hi, I'm Kalpesh Mahajan — a dedicated developer with a strong
            foundation in Java, React, and full-stack development. I enjoy
            learning new frameworks, building efficient applications, and
            solving real-world problems through clean and scalable code. I look
            forward to contributing to impactful and innovative projects.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={img2} alt="About me" />
          </div>

          <div className="about-info">
            <div className="info-item">
              <div className="info-number">1</div>
              <div className="info-text">
                <h3>Education</h3>
                <p>
                  Bachelor's in Computer Science and Enginnering(Data Science)
                  R.C.Patel Institute Of Technology ,Shirpur
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-number">2</div>
              <div className="info-text">
                <h3>Certifications</h3>
                <p>
                  MERN Full Stack Development Training – ETHNUS (Infosys
                  Foundation)
                  <br />
                  Full Stack Development Internship – R3Sys (Spring MVC & Java)
                  <br />
                  Zensar ESD Program – Core Java, JDBC, Python & SQL
                  <br />
                  Smart India Hackathon 2024 – Project: Crop Disease Prediction
                  App
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-number">3</div>
              <div className="info-text">
                <h3>Interests</h3>
                <p>
                  Web app development and a passion for building engaging
                  frontends.
                </p>
              </div>
            </div>

            <div className="about-description">
              <p>
                When I'm not coding, you'll find me hiking, reading, or
                exploring new technologies. I'm always looking to learn new
                things and improve my skills.
              </p>
              <div className="about-buttons">
                <a href="#resume" className="btn btn-primary">
                  View Resume
                </a>
                <a
                  href={obj1}
                  download="Kalpesh_CV.pdf"
                  className="btn btn-outline"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
