import React from "react";
function Navbar(props) {
	return (
		<nav className="bg-cyan-800 p-4 text-white flex gap-4 items-center">
			<h2 className="text-lg font-bold">Textify</h2>
			<a href="/">Home</a>
			<a href="/">About</a>
		</nav>
	);
}

export default Navbar;
