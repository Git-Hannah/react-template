import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import List from "../components/List";
import List_Item from "../components/List_Item";
import CheckboxCustom from "../components/CheckboxCustom";
import Typography from "../components/Typography";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */

const Exercise = () => {
	return (
		<div>
			<Typography variant="h1" component="h2">
				Item
			</Typography>
			<Typography variant="h2">Item</Typography>
			<Typography variant="h3">Item</Typography>
			<Typography variant="caption">Item</Typography>
			<Typography variant="body2" className="fancy" component="div">
				Item
			</Typography>
			<Typography aria-label="hallo" className="fancy">
				Item
			</Typography>
			<br />
			<br />
			<br />
			<Button>Click me</Button>
			<Checkbox label={"Check me"}></Checkbox>
			<List>
				<List_Item>
					<Checkbox label={"Clean apartment"} />
				</List_Item>
				<List_Item>
					<Checkbox label={"Buy groceries"} />
				</List_Item>
			</List>
			<CheckboxCustom />
			<ul>
				<li>Etwas</li>
			</ul>
		</div>
	);
};

export default Exercise;
