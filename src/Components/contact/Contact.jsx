import React, { useEffect, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init();
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z82et7m",
        "template_240akbo",
        form.current,
        "HMXPkvBf-1yHQN0ci"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container" data-aos="fade-right" ata-aos-duration="1000">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>karthiofficial15@gmail.com</h5>
            <a href="mailto:karthiofficial15@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Manohar</h5>
            <a href="https://m.me/manohar" target="_blank">
              Send a message
            </a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+6383743349</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6383743349"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
