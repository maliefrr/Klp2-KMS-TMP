import React from "react";

const Button = ({ color, text }) => {
	return (
		<>
			<button className={`btn mt-4`} style={{ backgroundColor: color, color: "whitesmoke" }}>
				{text}
			</button>
		</>
	);
};

export default Button;
