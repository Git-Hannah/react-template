import React from "react";
import styles from "./styles.module.css";

const Checkbox = ({ label }) => {
	return (
		<div>
			<input type="checkbox" id="input_1" />
			<label for="input_1">{label}</label>
{/* 
			<label>
				<input type="checkbox" />
				<div>
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
						/>
					</svg>
				</div>
			</label> */}
		</div>
	);
};

export default Checkbox;

