import React, { useEffect } from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import styled from "styled-components";
import html from "../../assets/Skills/html1.png";
import css from "../../assets/Skills/css.png";
import js from "../../assets/Skills/js.png";
import redux from "../../assets/Skills/redux1.png"
import react from "../../assets/Skills/react.png";
import tailwind from "../../assets/Skills/tailwind.png";
import bootsrap from "../../assets/Skills/bootsrap.png";
import mui from "../../assets/Skills/mui.png";
import ant from "../../assets/Skills/antnew.png";
import git from "../../assets/Skills/git.png";
import github from "../../assets/Skills/github.png";
import figma from "../../assets/Skills/figma.png";
import vscode from "../../assets/Skills/vs code.png";
import postman from "../../assets/Skills/postman.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tooltip } from "antd";

const Skills = () => {

  const Skills = [
    {
      title: "HTML5",
      image: html
    },
    {
      title: "CSS3",
      image: css
    },
    {
      title: "JavaScript",
      image: js
    },
    {
      title: "React",
      image: react
    },
    {
      title: "Redux Toolkit",
      image: redux
    },
    {
      title: "Tailwind CSS",
      image: tailwind
    },
    {
      title: "Bootstrap5",
      image: bootsrap
    },
    {
      title: "Material-UI",
      image: mui
    },
    {
      title: "Ant Design",
      image: ant
    },

  ]

  const Tools = [
    {
      title: "Vs Code",
      image: vscode
    },
    {
      title: "Git",
      image: git
    },
    {
      title: "Github",
      image: github
    },
    {
      title: "Figma",
      image: figma
    },
    {
      title: "Postman",
      image: postman
    },
  ]

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>

      <SkillsMain>
        <div className="container Main_Skill"  >
          {Skills?.map((item, index) => (
            <Tooltip title={item?.title}>
              <div className="Skills_Grid" key={index}>
                <img className="Skill_Image" src={item?.image} alt={item.title} data-aos="zoom-in-left" data-aos-duration="1000" />
              </div>
            </Tooltip>
          ))}
        </div>
      </SkillsMain>

      <h2>Tools I Used</h2>

      <SkillsMain>
        <div className="container Main_Skill" >
          {Tools?.map((item, index) => (
            <Tooltip title={item?.title}>

              <div className="Skills_Grid" key={index}>
                <img className="Skill_Image" src={item?.image} alt={item.title} data-aos="zoom-in-left" data-aos-duration="1000" />
              </div>
            </Tooltip>
          ))}
        </div>
      </SkillsMain>

    </section>
  );
};

export default Skills;

const SkillsMain = styled.div`
  .Main_Skill {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    margin-bottom: 30px
  }

  .Skills_Grid {
    height: 100px;
    width: 100px;
    border-radius: 30%;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    overflow: hidden;
    
  }

  .Skill_Image {
    max-width: 60%;
    max-height: 60%;
    object-fit: contain;
    transition:  0.3s ease-in-out;
    text-transform: zoom;
  }

  .Skill_Image:hover {
 
    transform: scale(1.1) translateY(-10px);
    transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
  }
`;
