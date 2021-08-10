import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Light = props => {
	const [on, setOn] = useState(true);
	return (
		<div
			className={"Led ".concat(props.color)}
			onClick={() => {
				if (on == true) {
					props.start(props.bolt);
					setOn(false);
				} else {
					props.start(4);
					setOn(true);
				}
			}}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	bolt: PropTypes.number,
	start: PropTypes.func
};

export default Light;
