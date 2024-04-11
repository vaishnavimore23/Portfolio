import React from 'react';
import './ExperienceSection.css'; // Import CSS file for styling

const ExperienceSection = () => {
  return (
    <div id= "experience-sections" className="experience-section" style={{ fontSize :'1.3em'  }}>
      <h1>Experience</h1>
      <div className="experience">
        <h3 className="company-name">California State University Fullerton</h3>
        <p className="location">Fullerton, CA</p>
        <p className="position">Student Research Assistant/Mentor</p>
        <p className="duration">August 2022 - Present</p>
        <ul>
          <li>Orchestrated collection and exploitation of 1500 FPGA bitstream data for training LSTM models in time series analysis</li>
          <li>Crafted LSTM model attaining a 75% accuracy in identifying compromised vs. authentic hardware bitstreams, transforming hardware trojan detection</li>
          <li>Delivered an impactful presentation at a notable conference, showcasing extensive research on women's involvement in hardware systems and security; received high praise for outstanding research methodology and compelling presentation style</li>
        </ul>
      </div>
      <div className="experience">
        <h3 className="company-name">Wipro Limited</h3>
        <p className="location">Pune, India</p>
        <p className="position">Software Developer (Full-time)</p>
        <p className="duration">June 2019 - March 2022</p>
        <ul>
          <li>Directed creation and launch of CITIBANK's audit processing applications, utilizing JAVA, Aspose, Rest API, and Appian, achieving a 95% user satisfaction score</li>
          <li>Pioneered the enhancement of web portal's backend using Java, Docker, Spring Boot, and MicroServices, boosting container creation efficiency by 30% and slashing application deployment time by 25%</li>
          <li>Architected a high-capacity API Invoking Service, amplifying system scalability by 20% via Microservices and Google Cloud API integration</li>
          <li>Orchestrated JAVA, SpringBoot, Rest API, SQL, Jenkins, and GCP Virtual Machines to enhance Google Cloud API connectivity</li>
          <li>Accomplished a 40% acceleration in API response times by innovating microservices deployment and refining API invocation processes</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
