import './Hero.css';
import profileImg from "../../assets/me.png";
import { useEffect, useState } from "react";
import Button from '../Button/Button';
import { FaArrowRight } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {


    const words = ["Web Developer", "React & Django", "Responsive Design", "Turn Ideas Into Code"];

    // const TypewriterEffect = () => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            const currentWord = words[wordIndex];
            if (!isDeleting) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((wordIndex + 1) % words.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);
    // }


    return <>

        <section className='hero' id="home">
            <div className="profile-img" style={{ backgroundImage: `url(${profileImg})` }} ></div>

            <h1>Hi, I'm PAWAN</h1>

            <h2><span id="typewriter">{text}</span></h2>

            <p>
                A passionate web developer focused on creating clean, responsive, and user-friendly web applications while continuously learning and growing in the tech world.
            </p>
            <AnchorLink className="anchor-link" offset={50} href="#projects" style={{ "text-decoration": "none" }}> <Button text="View My Work" icon={<FaArrowRight />} /></AnchorLink>

            <br /> <br />

        </section>
    </>;
}

export default Hero;