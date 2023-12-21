import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import github from "./github.png"
import linkdin from "./linkedin.png"
import resumePDF from './resume.pdf';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Jitendra
          <br />
          Front end developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
         
        <div className="home__contact-me">
        <button
            class="btn btn-color-2"
            onClick={() => window.open(resumePDF)}
          >
            Download CV
          </button>
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
        <div className="home__dt">
        <img
    src={linkdin}
    alt="My LinkedIn profile"
    className="icon"
    onClick={() => (window.location.href = 'https://www.linkedin.com/in/soreddy-jitendra-reddy-5b8541211')}
  />
  <img
    src={github}
    alt="My Github profile"
    className="icon"
    onClick={() => (window.location.href = 'https://github.com/SJReddy1')}
  />
          </div>
          
      </Animate>
      
    </section>
  );
};
export default Home;