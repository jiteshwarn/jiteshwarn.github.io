import React from 'react';

const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="contact-card">
      <h3>{icon} {title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default ContactCard;

