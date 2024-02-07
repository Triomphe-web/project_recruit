import React from "react";

export default function Feedback(props){
    const {image,name, desc} = props
    return(
        <div>
            <p>
                <img src={image} alt="logo" width={30} height={30}/>
                <strong className="text-primary">{name}: </strong> {desc}</p>
            <hr />
        </div>
    )
}