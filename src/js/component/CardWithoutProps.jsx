import React from "react";

const CardWithoutProps = () => {
	return (
        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center m-0 p-0">
		<div className="card m-4 text-center">
            <img className="card-img-top img-fluid" src="https://placeholder.com/500x325"  alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Lorem deserunt culpa ipsum magna qui in aliqua eiusmod. (no props)</p>
            </div>
            <div className="card-footer bg-white">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
        </div>        
	);
};

export default CardWithoutProps;