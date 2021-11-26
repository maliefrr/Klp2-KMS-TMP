import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatYouGet from "./components/WhatYouGet";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import { useState } from "react";
import AddNew from "./components/AddNew";
function App() {
	const [showAdd, setShowAdd] = useState(false);
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
										<Table />
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
										<Button text="Add New" color="#916bbf" onClick={() => setShowAdd(!showAdd)} showAdd={setShowAdd} />
										{showAdd === true ? <AddNew /> : ""}
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
