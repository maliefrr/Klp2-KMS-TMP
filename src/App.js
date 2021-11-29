import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatYouGet from "./components/WhatYouGet";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import AddNew from "./components/AddNew";
import Kerohanian from "./components/Kerohanian";
import Kewirausahaan from "./components/Kewirausahaan";
import axios from "axios";
function App() {
	const [showAdd, setShowAdd] = useState(false);
	const [dataProker, setDataProker] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/proker").then((response) => setDataProker(response.data));
	}, []);

	console.log(dataProker);
	const addData = (data) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newData = { id, ...data };
		setDataProker([...dataProker, newData]);
	};
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								{" "}
								<Carousel /> <WhatYouGet /> <Footer />{" "}
							</>
						}
					/>
					<Route
						path="/proker"
						element={
							<>
								{" "}
								<div className="row mt-4">
									<div className="col-md-2"> </div>
									<div className="col-md mt-4">
										<div className="mb-4">
											<h2 className="text-center">Divisi HMPS Ilmu Komputer</h2>
										</div>
										<Table data={dataProker} />
									</div>
									<div className="col-md-2"></div>
								</div>{" "}
								<Footer margin="223" />
							</>
						}
					/>
					<Route
						path="/proker/kerohanian"
						element={
							<>
								<div className="mt-4 row">
									<div className="col-md-2"></div>
									<div className="col-md">
										<h3 className="text-center">Divisi Kerohanian</h3>
										<Button text={showAdd == false ? "Add New" : "Close"} color={showAdd === false ? "#916bbf" : "#d92404"} onClick={() => setShowAdd(!showAdd)} showAdd={setShowAdd} />
										{showAdd === true ? <AddNew onAdd={addData} divisi="kerohanian" /> : ""}
										<Kerohanian data={dataProker} />
									</div>
									<div className="col-md-2"></div>
								</div>
							</>
						}
					/>
					<Route
						path="/proker/kewirausahaan"
						element={
							<>
								<div className="mt-4 row">
									<div className="col-md-2"></div>
									<div className="col-md">
										<h3 className="text-center">Divisi Kerohanian</h3>
										<Button text={showAdd == false ? "Add New" : "Close"} color={showAdd === false ? "#916bbf" : "#d92404"} onClick={() => setShowAdd(!showAdd)} showAdd={setShowAdd} />
										{showAdd === true ? <AddNew onAdd={addData} divisi="kewirausahaan" /> : ""}
										<Kewirausahaan data={dataProker} />
									</div>
									<div className="col-md-2"></div>
								</div>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
