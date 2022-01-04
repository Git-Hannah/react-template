import React from 'react';
import styles from './styles.module.css';

const Button = ({ children, className, ...props }) => {
    // Create a Button Component

    return (
        <button {...props} className={[styles.Button, className].join(" ")}>
            {children}
        </button>
    )
}

export default Button;