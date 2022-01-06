import React from "react";
import styles from "./styles.module.css";

const typeScale = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    caption: "small",
    body1: "p",
    body2: "p"
}

const Typography = ({ 
    children, 
    className,
    variant="body1", 
    component=typeScale[variant], 
    ...rest }) => {
	const Component = component ;
	return (
		<Component {...rest} className={[styles[variant], className].join(" ")} >
			{children}
		</Component>
	);
};

export default Typography;
