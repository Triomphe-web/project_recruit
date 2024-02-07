import React from "react";
import {NavLink} from 'react-router-dom'
import HeaderUser from "../components/Header_user";


/**
 *
 *
 * @export
 * @param {} props
 * @return {JSX} 
 */
export default function Home(props){
    console.log(props);
    return(
        <>
        <HeaderUser />
        <div className="container">
            <div className="row">
                <div className=" col-12">
                    <h3 className="text-light mt-5">Bienvenue 👋.</h3>
                    
                    <h4>Monsieur {props.username} <b>[{props.result}]</b></h4>
                    <hr />
                </div>
            </div>
            <br />

            <div className="row">
            <h1>{props.result == "Candidat" ? "Voir les offres" : "Deposer Offre"}</h1>
            </div>

            
            

            {/* <h1>{props.username}</h1>
            <h2>{props.email}</h2>
            <h3>{props.password}</h3>
            <h3>{props.result}</h3> */}
        </div>
        </>
    )
}