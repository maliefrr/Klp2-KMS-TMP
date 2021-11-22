import Header from "./components/Header";
import Carousel from "./components/Carousel";
import WhatYouGet from "./components/WhatYouGet";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Header />
			<Carousel />
			<WhatYouGet />
			<Footer />
		</div>
	);
}

export default App;
