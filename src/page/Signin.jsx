import React from "react";
import goodman from '../assets/jason-goodman.jpg'
import Header from "../components/Header";
import styled from "styled-components";


/** @type {StyleSheet} */
const LabelStyled = styled.label`
    color: #fff;
    font-weight: lighter;
`



/**
 *
 *j
 * @export
 * @return {JSX SignIn} 
 */
export default function SignIn(){
    return(
        <React.StrictMode>
            <Header />
            <br />
            <div className="container">
                <h1>Connecter vous et entrer dans l'environnement du profésionnel </h1>

                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-6">
                        <form action="">
                            <LabelStyled style={{color:"white"}}>Entrer votre adresse email :</LabelStyled>
                            <input type="email" name="email" id="email__form" className="form-control" placeholder="johndoe@gmail.com" />
                            <LabelStyled style={{color:"white"}}>Entrer votre adresse Mot de passe :</LabelStyled>
                            <input type="password" name="pass" id="pass__form" className="form-control" />

                            <input type="submit" value="Se connecter" className="btn btn-success mt-5" />
                        </form>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-6">
                        <p className="text-muted">Jason Goodman - développeur web</p>
                        <img src={goodman} alt="image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}