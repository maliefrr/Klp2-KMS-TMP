import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatYouGet from "./components/WhatYouGet";
import Table from "./components/Table";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./components/Button";
function App() {
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
								<div className="row mt-3">
									<div className="col-md-1"> </div>
									<div className="col-md">
										<Button color="#916bbf" text="Add New" />
										<Table />
									</div>
									<div className="col-md-1"></div>
								</div>{" "}
								<Footer margin="110" />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
