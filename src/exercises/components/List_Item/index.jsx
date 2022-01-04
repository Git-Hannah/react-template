import React from "react";
import styles from "./styles.module.css";

const List_Item = ({ children, className, ...props }) => {
	return (
		<li {...props} className={[styles.List_Item, className].join(" ")}>
			{children}
		</li>
	);
};

export default List_Item;
