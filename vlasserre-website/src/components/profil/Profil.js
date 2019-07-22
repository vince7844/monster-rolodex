import React from 'react';
import profil from "../../assets/img/profil.jpg";
import "./Profil.css";


const Profil = () => {
    return(
        <div className="profil">
            <img src={profil} alt="Photo de Profil"></img>
            <p>Bonjour et bienvenue sur mon site &#128512;
               À travers ce site je souhaite exposer 
               mes différents projets pour vous donner 
               un premier avis et une vue d'ensemble sur 
               mes compétences.<br /> Bon visionnage !</p>
        </div>
    );
}

export default Profil;