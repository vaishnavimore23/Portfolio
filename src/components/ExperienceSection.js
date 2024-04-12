import React from 'react';
import './ExperienceSection.css'; // Import CSS file for styling

const ExperienceSection = () => {
  return (
    <div id="experience-sections" className="experience-section px-4 lg:px-0 mx-auto max-w-5xl">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Experience</h1>
      {/* California State University Fullerton */}
      <div className="experience mb-8 lg:flex lg:space-x-8">
        <div className="flex-none lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:pr-8">
          <h3 className="company-name text-lg lg:text-xl xl:text-2xl font-semibold">California State University Fullerton</h3>
          <p className="location text-gray-600">Fullerton, CA</p>
          <p className="position">Student Research Assistant/Mentor</p>
          <p className="duration">August 2022 - Present</p>
        </div>
        <div className="flex-1">
          <ul className="list-disc pl-4">
            <li>Utilized Hugging Face library and Google BERT to orchestrate the collection and exploitation of 1500 FPGA bitstream data for training Transformer models in time series analysis</li>
            <li>Engineered Transformer model achieving a 75% accuracy in distinguishing compromised vs. authentic hardware bitstreams, revolutionizing hardware trojan detection</li>
            <li>Presented groundbreaking research on women's engagement in hardware systems and security at a prestigious conference, earning acclaim for exemplary research methodology and captivating presentation style</li>
          </ul>
        </div>
      </div>

      {/* Wipro Limited */}
      <div className="experience mb-8 lg:flex lg:space-x-8">
        <div className="flex-none lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:pr-8">
          <h3 className="company-name text-lg lg:text-xl xl:text-2xl font-semibold">Wipro Limited</h3>
          <p className="location text-gray-600">Pune, India</p>
          <p className="position">Software Developer, Full-time</p>
          <p className="duration">July 2021 - March 2022</p>
        </div>
        <div className="flex-1">
          <ul className="list-disc pl-4">
            <li>EUC Remediation Framework:</li>
            <ul className="list-disc pl-4">
              <li>Directed creation and launch of CITIBANK's audit processing applications, utilizing JAVA, Aspose, Rest API, and Appian, achieving a 95% user satisfaction score</li>
              <li>Pioneered the enhancement of web portal's backend using Java, Spring Boot, React, Docker, and MicroServices, boosting container creation efficiency by 30% and slashing application deployment time by 25%</li>
              <li>Architected a high-capacity API Invoking Service, amplifying system scalability by 20% via Microservices and Google Cloud API integration</li>
              <li>Orchestrated JAVA, SpringBoot, Rest API, SQL, Jenkins, and GCP VMs to enhance Google Cloud API connectivity</li>
              <li>Accomplished a 40% acceleration in API response times by innovating microservices deployment and refining API invocation processes</li>
            </ul>
            <li>Container Accelerator:</li>
            <ul className="list-disc pl-4">
              <li>Demonstrated expertise in technologies such as Microservices, Java, SpringBoot, and Kubernetes, improving development workflows and cutting software release times by 25%. Streamlined operations with tools such as Restful Webservices, Databases, Jenkins, and Docker, contributing to faster time-to-market for new releases</li>
              <li>Revolutionized container creation by tailoring it to user specifications, slashing setup times by 40%, and boosting user satisfaction through agile container management</li>
              <li>Capitalized on Google Cloud's robust features for container orchestration, attaining a cost-efficient infrastructure with a 30% reduction in overhead expenses</li>
            </ul>
          </ul>
        </div>
      </div>

      {/* Bharat Sanchar Nigam Limited */}
      <div className="experience mb-8 lg:flex lg:space-x-8">
        <div className="flex-none lg:w-1/3 lg:flex lg:flex-col lg:justify-between lg:mb-0 lg:pr-8">
          <h3 className="company-name text-lg lg:text-xl xl:text-2xl font-semibold">Bharat Sanchar Nigam Limited</h3>
          <p className="location text-gray-600">Nashik, India</p>
          <p className="position">Software Developer, Intern</p>
          <p className="duration">March 2018 – December 2018</p>
        </div>
        <div className="flex-1">
          <ul className="list-disc pl-4">
            <li>Led developing and designing an established Java and Spring Boot web application, implementing a structured 3-tier architecture covering Presentation, Business, and Data Access Layers to ensure efficient development processes</li>
            <li>Addressed user-reported issues, debugged logs, and optimized data retrieval within the Spring Boot framework, leading to a 25% decrease in customer complaints</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
