import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Button from '../Button/Button';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        formData.append("access_key", "18529c3a-f66d-4fa5-a5e2-4ba3495e79d7");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Your message sent successfully!");
                form.reset();
            } else {
                setResult("Something went wrong. Please try again.");
            }

            setTimeout(() => {
                setResult("");
            }, 4000);

        } catch (error) {
            setResult("Network error. Please try again later.");

            setTimeout(() => {
                setResult("");
            }, 4000);
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                {/* LEFT INFO */}
                <div className="contact-info">
                    <h2>Let’s Connect</h2>
                    <p>
                        I’m always open to discussing new projects, creative ideas, or
                        opportunities to be part of your vision.
                    </p>

                    <div className="info-item">
                        <FaEnvelope />
                        <span>kpawanpreet2003@gmail.com</span>
                    </div>

                    <div className="info-item">
                        <FaPhoneAlt />
                        <span>+91 9876812698</span>
                    </div>

                    <div className="info-item">
                        <FaPhoneAlt />
                        <span>+91 7696354183</span>
                    </div>

                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <span>Punjab, India — 143505</span>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form className="contact-form" onSubmit={onSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" name="message" rows="4" required></textarea>
                    <p>{result}</p>

                    <div className="form-actions">
                        <button type="submit" className="send-btn">
                            Send Message
                        </button>

                        <Button
                            text="WhatsApp Me"
                            link="https://wa.me/919876812698"
                        />
                    </div>
                </form>
            </div>

            <div className="connect-content">
                <h2>Want to talk? Don't be shy</h2>

                <div className="connect-item">
                    <h3>Hire Me</h3>
                    <p>
                        Need a passionate developer for your next project?
                        Let’s make it happen.
                    </p>
                </div>

                <div className="connect-item">
                    <h3>Collaborate</h3>
                    <p>
                        Great ideas grow better when built together.
                    </p>
                </div>

                <div className="connect-item">
                    <h3>Just Talk</h3>
                    <p>
                        Tech, web, design, or ideas — I’m always listening.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
