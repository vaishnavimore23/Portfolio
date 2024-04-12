import React, { useState } from 'react';
import Modal from 'react-modal';
import './SkillModal.css'
// import { Modal } from 'react-bootstrap';

Modal.setAppElement('#root');

export const SkillModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    
    <div className="skills-container">
      {/* <h2>All Skills</h2> */}
      <button onClick={openModal}>My Skills</button>
      <Modal className="skills-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Skills Modal"
      >
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
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};


