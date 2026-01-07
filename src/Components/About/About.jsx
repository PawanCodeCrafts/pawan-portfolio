import "./About.css";
import { skillsData } from "./skillsData.js";

const About = () => {

    return <>

        <section className="about-section" id="about">
            <div className="header_wrapper">
                <h1 className="heading1">About <span>Me</span></h1>
            </div>
            <p>
                Hi, I’m Pawanpreet Kaur, a web developer based in Punjab, India.
                I have completed my Diploma and pursuing Bachelor’s degree in Computer Science and genuinely enjoy building websites that look good and work smoothly.
                I love learning new things, especially AI , and I’m always curious to explore what’s next in tech.
                When I’m coding, you’ll usually find me with a cup of tea — it’s my favorite coding companion.
            </p>


            <div className="header_wrapper">
                <h1 className="heading1"><span>Tech </span>Stack</h1>
            </div>


            <div className="skills-grid">

                {skillsData.map((item, index) => (

                    <div className="skill-card" key={index}>
                        <img src={item.icon} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}

            </div>


        </section >


    </>;
}


export default About;

