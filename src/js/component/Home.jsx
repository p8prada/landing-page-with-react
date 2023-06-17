import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar></NavBar>

			<Jumbotron
			title="A Warm Welcome!"
			description="Eiusmod ut reprehenderit anim velit aliqua nostrud do deserunt officia velit dolor. Fugiat non culpa consequat in esse. Eu eu ad eiusmod qui consectetur pariatur eu incididunt qui eu. Ullamco exercitation ullamco adipisicing laboris nostrud cillum. Adipisicing et magna commodo et. Nostrud laborum pariatur culpa ipsum ex laborum nisi fugiat voluptate sunt. Lorem deserunt culpa ipsum magna qui in aliqua eiusmod."
			buttonLabel="Call to action!"
			buttonURL="https://reactjs.org/"
			></Jumbotron>
		</div>
	);
};

export default Home;
