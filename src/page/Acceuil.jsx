import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import "../css/bootstrap.css";
import "../css/app.css";
import { Link } from "react-router-dom";
import GoImg from '../assets/goforit.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Acceuil(props) {
  const tab_status = props.status.map(item => item)
  console.log(`tableau : ${tab_status}`);
  function handle_select(e){
    console.log(e.target.value);
  }
  const [error,setError] = useState()
  return (
    <React.StrictMode>
    <ToastContainer />
    <Header />
      <div className="container">
      
        <br />
        <Link to="/" className="link_service">
          Acceuil
        </Link>
        <h1>Inscrivez vous , pour utiliser l'application</h1>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-6">
            <form>
              <label style={{ color: "white" }} htmlFor="username">
                Entrer votre nom :
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="John Doe"
                onChange={(e)=>{
                    props.setUsername(e.target.value)
                }}
              />

              <label style={{ color: "white" }} htmlFor="email">
                Entrer votre adresse email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="JohnDoe@gmail.com"
                onChange={(e)=>{
                  props.setEmail(e.target.value)
              }}
              />
              <label style={{ color: "white" }} htmlFor="status">
                Entrer votre status :
              </label>
              <select name="status" id="" className="form-control" onChange={(e)=>{
                  props.setResult(props.status[e.target.value])
              }}>
                <option>Selectionner une status</option>
                {
                  tab_status.map((status_i,key)=><option value={key}>{status_i}</option>)
                }
              </select>

              <label style={{ color: "white" }} htmlFor="motdepasse">
                Entrer votre mot de passe :
              </label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="pass"
                id="pass"
                className="form-control"
                onChange={(e)=>{
                  if (e.target.value.length < 8) {
                    setError('Entrer un mot de passe entre 8 à 12 caractères')
                  }
                  else{
                    setError("")
                    props.setPassword(e.target.value)
                  }
              }}
              />
              <small className="text-muted">
                Entrer un mot de passe entre 8 à 12 caractères
              </small>
              <p>{error}</p>
              <button className="btn btn-success mt-4" id="send" onClick={(e)=>{
                e.preventDefault()
                props.toggle(true)
                }}
              >Envoyer</button>
            </form>
            <br />
          </div>
          <div className="col-xs-12 col-md-12 col-lg-6">
            <img src={GoImg} alt="image" className="img-fluid" />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
