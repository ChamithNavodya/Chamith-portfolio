import React from "react";
import "./about.css";
import ME from "../../assets/chamith.jpg";
// import { FaAward } from "react-icons/fa";
// import { FiUser } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Chamith " />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiCodeAlt className="about__icon" />
                            <h5>Codeing</h5>
                            <small>Multilingual proficiency</small>
                        </article>
                        <article className="about__card">
                            <MdOutlineScreenSearchDesktop className="about__icon" />
                            <h5>Meticulous</h5>
                            <small>Detail-oriented precision</small>
                        </article>
                        <article className="about__card">
                            <HiOutlineLightBulb className="about__icon" />
                            <h5>Inventive</h5>
                            <small>Creative problem-solver</small>
                        </article>
                    </div>

                    <p>I am a web developer with a passion for problem-solving and finding innovative solutions. With expertise in creating dynamic and user-friendly websites, I strive to deliver exceptional results that exceed expectations.</p>
                    
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
