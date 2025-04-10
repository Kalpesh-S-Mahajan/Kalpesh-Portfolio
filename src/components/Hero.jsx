import { useEffect, useRef } from "react";

import "./Hero.css";

const Hero = () => {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const textArray = ["Web Developer", "UI/UX Designer", "Problem Solver"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (typedTextRef.current && cursorRef.current) {
        if (charIndex < textArray[textArrayIndex].length) {
          if (!cursorRef.current.classList.contains("typing")) {
            cursorRef.current.classList.add("typing");
          }
          typedTextRef.current.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typingDelay);
        } else {
          cursorRef.current.classList.remove("typing");
          setTimeout(erase, newTextDelay);
        }
      }
    }

    function erase() {
      if (typedTextRef.current && cursorRef.current) {
        if (charIndex > 0) {
          if (!cursorRef.current.classList.contains("typing")) {
            cursorRef.current.classList.add("typing");
          }
          typedTextRef.current.textContent = textArray[
            textArrayIndex
          ].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, erasingDelay);
        } else {
          cursorRef.current.classList.remove("typing");
          textArrayIndex = (textArrayIndex + 1) % textArray.length;
          setTimeout(type, typingDelay + 1100);
        }
      }
    }

    if (typedTextRef.current && cursorRef.current) {
      setTimeout(type, newTextDelay + 250);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="badge">Available for hire</span>
            <h1>
              Hi, I'm <span className="highlight">Kalpesh Mahajan</span>
            </h1>
            <div className="typing-container">
              <p>
                I'm a <span ref={typedTextRef}></span>
                <span ref={cursorRef} className="cursor">
                  &nbsp;
                </span>
              </p>
            </div>
            <p className="hero-description">
              Creative Web & Software Developer | Building Engaging & Scalable
              Solutions with HTML, CSS, JavaScript, Java & Python.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://github.com/Kalpesh-S-Mahajan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
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
                href="https://www.linkedin.com/in/kalpesh-mahajan-28753026a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://www.codechef.com/users/rcp_221106051"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodeChef"
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
                  <path d="M11.2 17.8a3.5 3.5 0 0 1-3.5-3.5c0-1.9 1.6-3.5 3.5-3.5 1.9 0 3.5 1.6 3.5 3.5 0 1.9-1.6 3.5-3.5 3.5z" />
                  <path d="M12.7 13.4c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4-.3.3-.4.7-.4 1.1 0 .4.1.8.4 1.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.3-.3.4-.7.4-1.1 0-.4-.1-.8-.4-1.1z" />
                  <path d="M7.6 8.8c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4-.3.3-.4.7-.4 1.1 0 .4.1.8.4 1.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.3-.3.4-.7.4-1.1 0-.4-.1-.8-.4-1.1z" />
                  <path d="M16.4 8.8c-.3-.3-.7-.4-1.1-.4-.4 0-.8.1-1.1.4-.3.3-.4.7-.4 1.1 0 .4.1.8.4 1.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.3-.3.4-.7.4-1.1 0-.4-.1-.8-.4-1.1z" />
                  <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.9c-3.8 0-6.9-3.1-6.9-6.9S8.2 5.1 12 5.1s6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="./public\images\profile.jpg" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
