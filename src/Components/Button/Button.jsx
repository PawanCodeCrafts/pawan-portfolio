import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, link, icon }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.btn_color_outline}
        >
            {text}  <span className={styles.arrow_rotate}>{icon}</span>
        </a>
    );
};

export default Button;
