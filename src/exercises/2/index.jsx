import React from "react";
import Card from "./card";

/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */

const items = Array.from({ length: 5 }, () => {
	return {
		headline: "Kitty",
		description: "this is a kitten",
		image: "https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2l0dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
	};
});
console.log(items);

// const Card = (props) => {
// 	const [visible, setVisible] = React.useState(false); //[Boolean, Function]

// 	return (
// 		<div className="card">
// 			<img className="card__image" src={props.image} alt="Image of kitty" />

// 			<div className="card__headline">
// 				<h3>{props.headline}</h3>
// 			</div>

// 			<div className="card__action">
// 				<button
// 					className="card__button"
// 					onClick={() => {
// 						console.log("Image of kitty");
// 						setVisible(!visible);
// 					}}
// 				>
// 					{visible ? "Hide" : "Show"}
// 				</button>

// 				{visible ? <div className="card__description">{props.description}</div> : null}
// 			</div>
// 		</div>
// 	);
// };

const Exercise = () => {
	return (
		<div>
			{items.map((item) => {
				return (
					<Card
						headline={item.headline}
						description={item.description}
						image={item.image}
					/>
				);
			})}
		</div>
	);
};

export default Exercise;
