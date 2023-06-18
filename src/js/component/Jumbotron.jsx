import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron m-4 p-4 bg-light text-black rounded">
			<h1 className="display-4 m-3">{props.title}</h1>
			<p className="lead m-3">{props.description}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
};

export default Jumbotron;