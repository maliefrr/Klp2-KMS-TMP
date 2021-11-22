import React from "react";
import Button from "./Button";

const WhatYouGet = () => {
	return (
		<div>
			<h1 className="head text-center h2">Knowledge Management System HMPS Ilmu Komputer UHO</h1>
			<div className="hero">
				<div className="hero-section">
					<img
						src="assets/img/think.png"
						alt="access this assets here https://www.freepik.com/free-vector/flat-thinking-concept_4457129.htm#page=1&query=think&position=23&from_view=search"
						height="400"
						width="400"
					/>
					<div>
						<h2 className="h3">Apa yang kamu dapatkan dari web ini ?</h2>
						<ol>
							<li>Informasi program kerja yang terdapat pada HMPS Ilmu Komputer UHO</li>
							<li>Jadwal rapat himpunan</li>
							<li>Informasi tentang pengurus HMPS Ilmu Komputer</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatYouGet;
