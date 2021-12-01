import React from "react";

const Button = ({ color, text, onClick, type }) => {
	return (
		<>
			<button className={`btn`} style={{ backgroundColor: color, color: "whitesmoke" }} onClick={onClick} type={type}>
				{text}
			</button>
		</>
	);
};

export default Button;
