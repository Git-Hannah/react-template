import React from "react";
import styles from "./styles.module.css";

const CheckboxCustom = () => {
    return (
        <label>
				<input className={styles.checkbox} type="checkbox" />
				<div className={styles.circle}>
					<svg viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
						/>
					</svg>
				</div>
			</label>
    );
};

export default CheckboxCustom;


/* <label>
	<input type="checkbox" />
	<div>
		<svg>
			<path />
		</svg>
	</div>
</label>; */
