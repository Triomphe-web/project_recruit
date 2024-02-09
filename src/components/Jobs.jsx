import React from "react";
import '../css/bootstrap.css'


export default function Feedback(props){
    const {image,name,company, desc} = props
    return(
        <div className="d-flex m-4 border border-dark">
            <div>
                <img src={image} alt="image" width={90} height={90}/>
            </div>
            <div className="m-2">
                <h3 className="text-success">{name}</h3>
                <h5 className="text-light">{company}</h5>
                <h6 className="text-primary">{desc}</h6>
            </div>
        </div>
    )
}