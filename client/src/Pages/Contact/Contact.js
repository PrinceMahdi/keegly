/* --------------- SCSS IMPORTS --------------- */
import "./Contact.scss";
/* --------------- REACT IMPORTS --------------- */
import React, { useRef } from "react";
/* --------------- LIBRARY IMPORTS --------------- */
import emailjs from "@emailjs/browser";
/* --------------- ASSET IMPORTS --------------- */
import ContactImg from "../../assets/illustrations/contact.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6hgjl1m",
        "template_iwc099s",
        form.current,
        "0MSovHFkSrN9KRgMP"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="contact">
        <div className="contact--left">
          <img src={ContactImg} alt="contact us" className="contact__img" />
        </div>
        <div className="contact--right">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit" className="contact__button">Send</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
