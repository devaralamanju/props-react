import React from "react";

function Product(p){

    return(
        <>
        <h2>id:{p.id}</h2>
        <h2>Name:{p.name}</h2>
        <h2>Actual Price:{p.aprice}</h2>
        <h2>Offer Price:{p.dprice}</h2>
        
        </>
    )
}

export default Product