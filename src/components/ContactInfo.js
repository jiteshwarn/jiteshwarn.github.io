import React from 'react';
import ContactCard from '../components/ContactCard';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <ContactCard icon="📍" title="Address">
        H 214, Karthik Nagar
        <br />
        Bangalore, India
      </ContactCard>
      <ContactCard icon="📱" title="Mobile Number">
        +91 9590325564
      </ContactCard>
      <ContactCard icon="✉️" title="Email">
        jiteshnishad1989@gmail.com
      </ContactCard>
    </div>
  );
};

export default ContactInfo;

