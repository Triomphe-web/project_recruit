import React, {useState} from "react";
import Acceuil from "./Acceuil";
import Home from "./Home";

export default function ParentAcceuil(){
    const [result, setResult] = useState()
    const [status, setStatus] = useState(["Candidat","Recruteur"])
    const [show, toggle] = useState(false)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
            {!show && <Acceuil username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                show={show}
                toggle={toggle}
                status={status}
                setStatus={setStatus}
                setResult={setResult}/>}
            {show && <Home username={username}
                email={email}
                password={password}
                result={result}
                />}
        </div>
    )
}