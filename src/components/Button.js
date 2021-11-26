import React from "react";

const Button = ({ color, text, onClick }) => {
	return (
		<>
			<button className={`btn`} style={{ backgroundColor: color, color: "whitesmoke" }} onClick={onClick}>
				{text}
			</button>
		</>
	);
};

export default Button;
