import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatYouGet from "./components/WhatYouGet";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={((<Carousel />), (<WhatYouGet />))} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
