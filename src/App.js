import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatYouGet from "./components/WhatYouGet";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import { useState } from "react";
import AddNew from "./components/AddNew";
import Kerohanian from "./components/Kerohanian";
function App() {
	const [showAdd, setShowAdd] = useState(false);
	const [dataProker, setDataProker] = useState([
		{
			id: 1,
			namaDivisi: "kerohanian",
			namaProker: "Belajar membaca Alqur’an",
			status: false,
			penanggungJawab: "Badrun Purnama",
		},
		{
			id: 2,
			namaDivisi: "kerohanian",
			namaProker: "Taddarus Alqur’an",
			status: false,
			penanggungJawab: "Ld. Hasrinto",
		},
		{
			id: 3,
			namaDivisi: "kerohanian",
			namaProker: "Ilkom Beramal",
			status: true,
			penanggungJawab: "Badrun Purnama",
		},
		{
			id: 4,
			namaDivisi: "kerohanian",
			namaProker: "Ilkom Beramal",
			status: false,
			penanggungJawab: "Badrun Purnama",
		},
		{
			id: 5,
			namaDivisi: "kewirausahaan",
			namaProker: "Seminar Kewirausahaan ",
			status: false,
			penanggungJawab: "Nining Ardianti",
		},
		{
			id: 6,
			namaDivisi: "kewirausahaan",
			namaProker: "Usaha HMPS Ilkom",
			status: false,
			penanggungJawab: "Muhammad ulil Amri",
		},
	]);

	const addData = ({ proker, penanggungJawab }) => {
		console.log(proker, penanggungJawab);
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
										{showAdd === true ? <AddNew onAdd={addData} /> : ""}
										<Kerohanian data={dataProker} />
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
