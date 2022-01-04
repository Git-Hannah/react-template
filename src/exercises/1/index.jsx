import React from "react";
import "./styles.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [imageVisible, setImageVisible] = React.useState(true);
	const [visible, setVisible] = React.useState(false); //[Boolean, Function]
	return (
		<div className="card">
			<button
				className="card__button"
				onClick={() => {
					setImageVisible(!imageVisible);
				}}
			>
				{imageVisible ? "Look how pretty!" : "Where is the kitty?"}
			</button>

			{imageVisible ? (
				<img
					src="https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2l0dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
					alt="Image of kitty"
					className="card__image"
				/>
			) : null}
			<div className="card__headline">
				<h3>Kitty</h3>
			</div>

			<div className="card__action">
				<button
					className="card__button"
					onClick={() => {
						console.log("Image of kitty");
						setVisible(!visible);
					}}
				>
					{visible ? "Hide" : "Show"}
				</button>

				{visible ? (
					<div className="card__description">
						<p>This is a pretty kitty!</p>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Exercise;
