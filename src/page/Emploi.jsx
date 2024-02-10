import React, { useState, useEffect } from 'react';
import Jobs from "../components/Jobs";
import hiring from "../img/hiring.png";
import '../css/bootstrap.css'
import '../css/index.css'
import Header from "../components/Header";


export default function Emploi() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/articles.json');
            const data = await response.json();
            setJsonData(data);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
        };

        fetchData();
    }, []);
    return (
      <div>
        <Header />
        <div className="search-container container">
          <form className="input-group">
            <input type="text" className="form-control rounded-end" placeholder="Rechercher..." />
            <button type="submit" className="btn btn-primary rounded-start">
              Rechercher
            </button>
          </form>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-12 d-flex flex-column px-5 justify-content-center">
              {jsonData.map((item, index) => (
                <Jobs key={index} image={hiring} name={item.title} company={item.company} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}