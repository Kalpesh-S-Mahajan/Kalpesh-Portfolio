import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Hi, I'm Kalpesh Mahajan, a passionate and aspiring web developer
            keen to analyze and develop within the world of generation. As a
            brisker, I am constantly excited to discover new frameworks and
            technologies to decorate my abilties. My expertise lies in Java and
            Core Java, and I am continuously running on increasing my know-how
            to construct green and scalable net programs. I stay up for
            participating, innovating, and contributing to impactful projects
            inside the development area.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="./src\assets\aboutImage.jpg" alt="About me" />
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
                  Certified in frontend development through Infosys Springboard,
                  with expertise in HTML5, CSS, and JavaScript(July 2024)
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-number">3</div>
              <div className="info-text">
                <h3>Interests</h3>
                <p>Open source, UI/UX design, and emerging technologies</p>
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
                  href="./src\assets\Kalpesh_CV.pdf"
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
