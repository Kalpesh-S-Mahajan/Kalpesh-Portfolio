import { useState } from "react";
import "./Resume.css";
import obj2 from "../assets/Kalpesh_CV.pdf";
const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            View or download my resume to learn more about my experience,
            education, and skills.
          </p>
        </div>

        <div className="resume-container">
          <div className="resume-actions">
            <a
              href={obj2}
              download="Kalpesh_CV.pdf"
              className="btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="download-icon"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
            <a
              href={obj2}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="open-icon"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open in New Tab
            </a>
          </div>

          <div className="resume-viewer">
            {isLoading && (
              <div className="resume-loading">
                <div className="spinner"></div>
                <p>Loading resume...</p>
              </div>
            )}
            <iframe
              src={obj2}
              title="Resume"
              className={`resume-iframe ${isLoading ? "loading" : "loaded"}`}
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
