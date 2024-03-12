import React, { useRef, useEffect } from "react";
import "./about.css";
import ME from "../../assets/about.gif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useInView, useDragControls } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutLottie from "../../assets/About.json"
import Lottie from "lottie-react";


const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useDragControls()



  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section id="about">

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="">
          <div className="">
            <Lottie animationData={AboutLottie} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Real Time Projects</h5>
              <small>6+ completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Personal Projects</h5>
              <small>4+ completed</small>
            </article>
          </div>
          <p>
            As a dedicated React JS developer with over a year of hands-on experience, I thrive on crafting immersive digital experiences. Passionate about clean code and user-centric design, I specialize in building responsive web applications that blend creativity with functionality. Let's collaborate to bring your ideas to life!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
