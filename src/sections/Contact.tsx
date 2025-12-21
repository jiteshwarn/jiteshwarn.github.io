import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import type { ContactProps } from '../types';

const Contact: React.FC<ContactProps> = ({ formData, handleChange, handleSubmit }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <ContactInfo />
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

