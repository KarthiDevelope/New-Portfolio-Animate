import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Portfolio from "./Components/portfolio/Portfolio";
import Footer from "./Components/footer/Footer";
import About from "./Components/about/About";
import ContactSection from "./Components/contact/Contact";
import PageLoadings from "./assets/loading.json";
import Lottie from "lottie-react";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/experience/Experience";


export default function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {
        loading ? (
          <div className="Loading">
            <Lottie className="Loading_gif" animationData={PageLoadings} />
          </div>
        ) : (
          <div>
            <Header />
            <Nav />
            <About />
            <Skills />
            <Experience />
            <Portfolio />
            <ContactSection />
            <Footer />

          </div>
        )
      }
    </>

  );
}
