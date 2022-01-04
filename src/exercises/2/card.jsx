import React from "react";

const Card = (props) => {
	const [visible, setVisible] = React.useState(false); //[Boolean, Function]

	return (
		<div className="card">
			<img className="card__image" src={props.image} alt="Image of kitty" />

			<div className="card__headline">
				<h3>{props.headline}</h3>
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

				{visible ? <div className="card__description">{props.description}</div> : null}
			</div>
		</div>
	);
};

export default Card;
