import React from "react";
import PropTypes from "prop-types";

const CardWithProps = (props) => {
	return (
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center m-0 p-0">
		<div className="card m-4 text-center">
            <img className="card-img-top img-fluid" src="https://placeholder.com/500x325"  alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer bg-white">
                <a href="#" className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
        </div>        
	);
};

CardWithProps.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
};

export default CardWithProps;