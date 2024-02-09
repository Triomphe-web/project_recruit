import React from "react";
import Jobs from "../components/Jobs";
import hiring from "../img/hiring.png";
import '../css/bootstrap.css'
import '../css/index.css'
import Header from "../components/Header";


export default function Emploi() {
    return (
        <div>
            <Header />
            <div class="search-container container">
            <form class="input-group">
                <input type="text" class="form-control rounded-end" placeholder="Rechercher..." />
                <button type="submit" class="btn btn-primary rounded-start">Rechercher</button>
            </form>
        </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
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

                    <div className="col-xs-12 col-md-6">
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
                </div>
            </div>
        </div>
        
    )
}