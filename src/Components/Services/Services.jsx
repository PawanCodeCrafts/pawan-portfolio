import React from "react";
import "./Services.css";
import {
    FaCode,
    FaPalette,
    FaMobileAlt,
    FaServer,
    FaRocket,
    FaBug,
} from "react-icons/fa";

const services = [
    {
        icon: <FaCode />,
        title: "Frontend Development",
        desc: "Building modern, responsive, and accessible interfaces using HTML, CSS, JavaScript, React, and Bootstrap.",
    },
    {
        icon: <FaPalette />,
        title: "UI / UX Design",
        desc: "Clean, user-friendly designs with attention to spacing, color balance, and usability.",
    },
    {
        icon: <FaMobileAlt />,
        title: "Responsive Design",
        desc: "Mobile-first layouts that look and perform perfectly on all screen sizes.",
    },
    {
        icon: <FaServer />,
        title: "Backend Integration",
        desc: "Connecting frontend apps with Django, APIs, and databases for real-world functionality.",
    },
    {
        icon: <FaRocket />,
        title: "Performance Optimization",
        desc: "Optimizing load times, clean code structure, and smooth user experiences.",
    },
    {
        icon: <FaBug />,
        title: "Debugging & Fixes",
        desc: "Fixing UI issues, layout bugs, responsiveness problems, and performance glitches.",
    },
];

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="header_wrapper">
                <h1 className="heading1">
                    My <span>Services</span>
                </h1>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
