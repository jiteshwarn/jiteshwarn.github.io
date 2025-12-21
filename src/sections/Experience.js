import React from 'react';
import Timeline from '../components/Timeline';

const Experience = () => {
  const experienceData = [
    {
      date: "2019 - Present",
      title: "Lead Front End Developer",
      company: "CSG Systems International",
      location: "Bangalore, India"
    },
    {
      date: "2017 - 2019",
      title: "Senior Front-End Developer",
      company: "Apttus",
      location: "Bangalore, India"
    },
    {
      date: "2016 - 2017",
      title: "Front-End Developer",
      company: "Capgemini India Pvt Ltd",
      location: "Bangalore, India"
    },
    {
      date: "2013 - 2016",
      title: "Software Engineer",
      company: "Accenture Pvt Ltd",
      location: "Bangalore, India"
    }
  ];

  const educationData = [
    {
      date: "2024 - Present",
      title: "M.Tech - Artificial Intelligence / Machine Learning",
      company: "IIT Jodhpur",
      location: "Jodhpur, India"
    },
    {
      date: "2007 - 2011",
      title: "B.E. - Electronics & Telecommunication",
      company: "Government Engineering College",
      location: "Bilaspur, India"
    }
  ];

  const certificationData = [
    {
      date: "2024",
      title: "Generative AI Mastermind",
      company: "Outskill",
      location: "AI/ML Certification"
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <Timeline items={experienceData} />

        <h2 className="section-title" style={{ marginTop: "4rem" }}>
          Education
        </h2>
        <Timeline items={educationData} />

        <h2 className="section-title" style={{ marginTop: "4rem" }}>
          Certification
        </h2>
        <Timeline items={certificationData} />
      </div>
    </section>
  );
};

export default Experience;

