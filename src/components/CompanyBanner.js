import React from 'react';

const CompanyBanner = ({ companyName }) => {
  if (companyName === "Default") return null;

  return (
    <div className="company-banner">
      <div className="container">
        <span>👋 Customized for {companyName}</span>
      </div>
    </div>
  );
};

export default CompanyBanner;

