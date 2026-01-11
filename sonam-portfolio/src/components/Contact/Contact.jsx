

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  // ref = reference to the form
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // stop page reload

    emailjs
      .sendForm(
        "service_s3juebf",     // 🔹 your SERVICE ID
        "template_p8x7vy4",     // 🔹 your TEMPLATE ID
        formRef.current,       // 🔹 form reference
        "xEJ6cQme3uTLGKgvy"       // 🔹 your PUBLIC KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset(); // clear form
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <h2 className="contact-title">Contact Me</h2>
         <p className="contact-subtitle">
           Have a project, opportunity, or just want to say hi?  
           Feel free to reach out.
         </p>
    <div className="contact-grid">
         <div className="contact-info">
            <p>
               <strong>Email:</strong><br />
               <a href="mailto:skk482352@gmail.com">
                 skk482352@gmail.com
               </a>
             </p>

             <p>
               <strong>Location:</strong><br />
               India
             </p>

             <div className="contact-socials">
               <a href="https:github.com/SONAM750" target="_blank">GitHub</a>
               <a href="https:linkedin.com" target="_blank">LinkedIn</a>
             </div>
          </div>

      
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Contact;
