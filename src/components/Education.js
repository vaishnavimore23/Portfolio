import React from 'react';
import "./Education.css"
import csuf from "../assets/img/csuf.webp"
import vjti from "../assets/img/vjti.jpeg"

const EducationCard = () => {
  return (
    <div className='card-section' id ="ecard">
        <h2  className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"> Education</h2>
        <div className="card-container">
    <div className="card" >
      <img src={csuf} alt="Profile Image" />
      <div className="details">
        
        <h2>Degree: Master of Science in Computer Science</h2>
        <p>School: California State University Fullerton</p>
        <p>Year: 2022 - 2024</p>
      </div>
    </div>

    <div className="card" >
      <img src={vjti} alt="Profile Image" />
      <div className="details">
        
        <h2>Degree: Bachlor of Technology in Electronics and Telecommunications Engineering</h2>
        <p>School: VJTI, Mumbai</p>
        <p>Year: 2016 - 2019</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default EducationCard;
