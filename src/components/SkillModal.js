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
      <button onClick={openModal}>Click My Skills</button>
      <Modal className="skills-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Skills Modal"
      >
       <h2>Skills</h2>
        <table className="skills-table">
          <tr>
            <th>Languages</th>
            <td>Python, JAVA, JavaScript, HTML5, CSS3, SQL, Bash</td>
          </tr>
          <tr>
            <th>Databases and Frameworks</th>
            <td>SpringBoot, ReactJs, RESTful Webservices, Microservices, MySQL, MongoDB</td>
          </tr>
          <tr>
            <th>DevOps</th>
            <td>Kubernetes, Docker, AWS</td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>GIT, Jenkins, JIRA, Postman, Bitbucket, Maven</td>
          </tr>
          <tr>
            <th>Machine Learning</th>
            <td>Deep Learning, sci-kit-learn, TensorFlow, Keras</td>
          </tr>
        </table>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};


