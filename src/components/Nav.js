import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="navigation">
			<ul>
				<li className="navbar">
					<Link to="/">Home</Link>
				</li>
				<li className="navbar">
					<Link to="/proker">Proker</Link>
				</li>
				<li className="navbar">
					<Link to="/jadwal">Schedule</Link>
				</li>
				<li className="navbar">
					<Link to="/pengurus">Kepengurusan</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
