import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import List from "../components/List";
import List_Item from "../components/List_Item";
import CheckboxCustom from "../components/CheckboxCustom";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */

const Typography = () => {
	return <div>




		
	</div>;
};

const Exercise = () => {
	return (
		<div>
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
