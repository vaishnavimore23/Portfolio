import { Col, Modal, Button } from 'react-bootstrap';

import { SkillModal } from './SkillModal';
import React, { useState } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import java1 from "../assets/img/java.png"
import js from "../assets/img/java-script.png"
import springboot from "../assets/img/springboot.png"
import reactjs from "../assets/img/reactjs.png";
import gitpng from "../assets/img/git_logo.png"
import colorSharp from "../assets/img/color-sharp.png"
import tnf from "../assets/img/Tensorflow_logo.svg.png"
import './ExperienceSection.css'
import mysqldb from "../assets/img/mysql.png"
import microservices from "../assets/img/microservices.png"
import pythonpng from "../assets/img/Python.png"
import docker from "../assets/img/docker.png"
import maven from "../assets/img/maven.png"
import aws from "../assets/img/aws.png"
import htmlpng from "../assets/img/htmlpng.webp"
import csspng from "../assets/img/css.png"
import postman from "../assets/img/postman.svg"






export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  

  return (

   <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br></p>
                        <Carousel responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={3500} showDots={true}  arrows={true} slidesToSlide={4} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="highlightable-image" src={java1} alt="Image" />
                                <h5>JAVA </h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={pythonpng} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={springboot} alt="Image" />
                                <h5>Springboot</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={reactjs} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={mysqldb} alt="Image" />
                                <h5>MYSQL</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={microservices} alt="Image" />
                                <h5>MicroServices</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={gitpng} alt="Image" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={postman} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={maven} alt="Image" />
                                <h5>Apache Maven</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={aws} alt="Image" />
                                <h5>Amazon Web Services</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={htmlpng} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image" src={csspng} alt="Image" />
                                <h5>CSS3</h5>
                            </div>

                            <div className="item">
                                <img className="highlightable-image" src={tnf} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    <SkillModal/>
    </section>
    

    
  )
}
