import App from "../page/App";
import Emploi from "../page/Emploi";
import ParentAcceuil from "../page/ParentAcceuil";
import Home from "../page/Home";
import SignIn from '../page/Signin';
import { Routes, Route } from "react-router-dom";
import Security from "../page/Security";
import React from "react";


export default function Route_Path(){
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/jobs" element={<Emploi />} />
            <Route path="/acceuil" element={<ParentAcceuil />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<App />} />
        </Routes>
    )
}