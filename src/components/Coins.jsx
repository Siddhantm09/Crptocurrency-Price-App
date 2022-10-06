import React from "react";


 export default function  Coin({name,icon,price,symbol}){

    return(
    <div className="coin">
        <div className="row">
            <div className="col">

            </div>
            <div className="col">
                
            </div>
        </div>
        <h5>Name:{name}</h5>
        <img src={icon}/>
        <h3>Price:{price}</h3>
        <h3>Symbol:{symbol}</h3>
    </div>
    
    )
}
