import React from 'react';
import type { CompanyBannerProps } from '../types';

const CompanyBanner: React.FC<CompanyBannerProps> = ({ companyName }) => {
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

