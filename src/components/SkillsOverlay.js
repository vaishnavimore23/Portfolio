import React, { useState,useEffect } from 'react';
import './SkillsOverlay.css';

export const SkillModal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling and other elements when menu is open
    if (menuOpen) {
      document.body.classList.add('body-scroll-lock');
    } else {
      document.body.classList.remove('body-scroll-lock');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = (e) => {
    e.stopPropagation(); // This will prevent the click from bubbling up to the backdrop
    setMenuOpen(false);
  };

  return (
    <div className="skills-container">
      <button onClick={toggleMenu}>Click To View All kills</button>
      <div className={`skills-menu ${menuOpen ? 'open' : ''}`}>
        <h2>Skills</h2>
        <table className="skills-table">
       
          <tr>
            <th>Languages</th>
            <td>Python, JAVA, C#, .Net, TypeScript, JavaScript, Nodejs,HTML5, CSS3, Bash, MATLAB, Ruby,Go,C++</td>
          </tr>
          <tr>
            <th>Databases and Frameworks</th>
            <td>SpringBoot, React, Node, Redux, JQuery, REST API, Microservices, MySQL, SQLite, MongoDB,
Nginx, AJAX, Apache Kafka, Appian, Terraform, Cassandra,Junit, SOAP</td>
          </tr>
          <tr>
            <th>DevOps</th>
            <td> Kubernetes, Docker, AWS, Google Cloud Platform</td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>GIT, Jenkins, JIRA, Postman, Bitbucket, JSON</td>
          </tr>
          <tr>
            <th>Machine Learning</th>
            <td>Deep Learning, sci-kit-learn, TensorFlow, Keras, PyTorch</td>
          </tr>
          <tr>
            <th>Other</th>
            <td>OOP, Data Structures and Algorithms, Agile, Unit Testing, Splunk</td>
          </tr>
        </table>
       
        <button onClick={closeMenu}>Close</button>
      </div>
    </div>
  );
};
