import React from "react";
import Jobs from "../components/Jobs";
import hiring from "../img/hiring.png";
import '../css/bootstrap.css'

export default function Emploi() {
    return (
        <div className="ml-5 mt-4">
            <Jobs
                image={hiring}
                name="Développeur .NET"
                desc="Nous recrutons plusieur Développeur .NET"
                
            />

            <Jobs
                image={hiring}
                name="Développeur React"
                desc="Nous recrutons plusieur Développeur .NET"
                
            />

            <Jobs
                image={hiring}
                name="Développeur Python"
                desc="Nous recrutons plusieur Développeur .NET"
                
            />
        </div>
    )
}