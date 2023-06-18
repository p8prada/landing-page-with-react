import React from "react";

const CardList = ({children}) => {

	return (
        <div className="container-fluid">
            <div className="row d-flex flex-wrap">   
                    {children}
            </div>
        </div>
	);
};

export default CardList;