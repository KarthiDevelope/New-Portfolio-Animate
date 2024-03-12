import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/bg_main.png";
import HeaderSocials from "./HeaderSocial";
import { TypeAnimation } from 'react-type-animation';
import Maingif from "../gif/Maingif";
import { themes } from "../Theme";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Karthikeyan</h1>
        
        <TypeAnimation
          sequence={[
            'React Js',
            1000,
            'Developer',
            1000,
            'React Js Developer',
            1000,
          ]}
          speed={20}
          style={{ fontSize: '1.5em' }}
          repeat={Infinity}
          
        />
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}
        <div className="me">
          <Maingif themes={themes} />
        </div>


        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
