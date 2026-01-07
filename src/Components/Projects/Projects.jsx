import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import git from "../../assets/git.png";

const projects = [
    {
        title: "E-Commerce Web Application",
        desc: "A scalable e-commerce platform with modern UI, cart system, and responsive design focused on user experience.",
        tech: ["html", "css", "Bootstrap", "Django"],
        image: "#",
        github: "#",
        live: "#",
    },
    {
        title: "Personal Portfolio",
        desc: "A modern portfolio website showcasing skills, projects, and contact details with a clean and responsive layout.",
        tech: ["React", "CSS"],
        image: "#",
        github: "#",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="header_wrapper">
                <h1 className="heading1">
                    Proj<span>ects</span>
                </h1>
                <p style={{ "padding-top": "23px", "letter-spacing": "1px", "font-size": "25px", }}>Some Things That I've Built !</p>
            </div>

            <div className="projects-wrapper">
                {projects.map((project, index) => (
                    <div
                        className={`project-row ${index % 2 !== 0 ? "reverse" : ""}`}
                        key={index}
                    >
                        {/* Content */}
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>

                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.live} target="_blank" rel="noreferrer">
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
