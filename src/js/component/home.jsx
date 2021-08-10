import React, { Fragment } from "react";
import { useState } from "react";
import Light from "./light.jsx";

//create your first component

export function Home() {
	const [stop, setStop] = useState("dark");
	const [warning, setWarning] = useState("dark");
	const [got, setGo] = useState("dark");

	const onPut = numb => {
		if (numb == 1) {
			setStop("red glow");
			setWarning("dark");
			setGo("dark");
		} else if (numb == 2) {
			setStop("dark");
			setWarning("yellow glow");
			setGo("dark");
		} else if (numb == 3) {
			setStop("dark");
			setWarning("dark");
			setGo("green glow");
		} else {
			setStop("dark");
			setWarning("dark");
			setGo("dark");
		}
	};

	return (
		<Fragment>
			<div className="semaphore">
				<Light color={stop} start={onPut} bolt={1} />
				<Light color={warning} start={onPut} bolt={2} />
				<Light color={got} start={onPut} bolt={3} />
			</div>
		</Fragment>
	);
}
