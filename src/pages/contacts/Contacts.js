import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>onj1513@gmail.com</h5>
            <a href="mailto:onj1513@gmial.com">Send a message</a>
          </article>
          <article className="contact-option">
            <FaTelegramPlane className="contact-option-icon" />
            <h4>Telegram</h4>
            <h5>@Bonj</h5>
            <a href="mailto:2belamit@gmial.com">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>(+234)-70-abc-wxyz</h5>
            <a href="mailto:onj1513@gmial.com">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
