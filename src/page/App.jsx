import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import '../css/bootstrap.css'
import '../css/app.css'
import logo from '../img/1094981.jpg'
import facebookLogo from '../img/facebook.png'
import twitterLogo from '../img/twitter.png'
import instagramLogo from '../img/insta.png'
import Feedback from "../components/FeedBack";
import 'animate.css'



/**
 *
 *
 * @export App
 * @return {JSX} 
 */
export default function App(){
    return(
        <>
        <Header />
        <div className="container">
            <p className="service">Service</p>
            <h1 className="animate__animated animate__fadeInUp">Bienvenue sur la plateforme de recrutement 100% gratuit et Open-source</h1>
            <h5 className="text">Bienvenue sur E-recruit, la plateforme de recrutement qui vous connecte aux opportunités de carrière exceptionnelles. Nous comprenons l'importance de trouver le bon emploi, celui qui correspond à vos compétences, vos aspirations et vos valeurs. C'est pourquoi nous vous offrons un accès gratuit à notre vaste réseau de recruteurs et d'entreprises à la recherche de talents comme vous.</h5>
            <br />
            <Link to='/acceuil' className="btn btn-warning">Commencer votre carrière</Link>
            
            <div className="row mt-5">
                <img src={logo} alt="logo" className="img-responsive front__img" />
            </div>
            <br />
                <div className="rowssss">
                <hr />
                <h4>Feedback</h4>
                <Feedback 
                    image={facebookLogo}
                    name="Facebook" 
                    desc="Merci beaucoup à E-recruit , en plus l'érgonomie est parfaite" 
                />

                <Feedback 
                    image={twitterLogo}
                    name="Twitter" 
                    desc="#find_your_carrier_here, j'adore le projet "
                />

                <Feedback 
                    image={instagramLogo}
                    name="Instagram" 
                    desc="Vous trouverez dans mes stories les plus belle rencontre et opportunité que j'ai fait grace à E-recruit"
                />

                
                
                
            </div>
        </div>
        </>
    )
}