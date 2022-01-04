import React from "react";
import styles from "./styles.module.css";

const List = ({ children, className, ...props }) => {
	return (
		<ul {...props} className={[className, styles.List].join(" ")}>
			{children}
		</ul>
	);
};

export default List;
