import React from 'react';
import VehiculesCards from './VehiculesCards';
import vehiculesStyles from "../styles/Vehicules.module.css";
import { Plus } from "../public/Icons/Plus";

const monteMeuble = "/img/Vehicules/monte-meuble.png";
const remorque2 = "/img/Vehicules/remorque2r.png";
const remorque4 = "/img/Vehicules/remorque4r1.png";

function Vehicules() {
    return (
        <div className={vehiculesStyles.vehicules}>
            <div className={vehiculesStyles.vehiculesElementHeader}>
                <h3 className={vehiculesStyles.elementTitle}>Nos catégories de vehicules</h3>
            </div>
            <p className={vehiculesStyles.elementText}>Pour satisfaire aux caractéristiques techniques de chaque prestations, nous disposons de gammes de véhicules adaptées aux besoins des principaux types de situations :</p>
            <h3 className={vehiculesStyles.vehiculesCategories}>Nos utilitaires :</h3>
            <VehiculesCards />
            <h3 className={vehiculesStyles.vehiculesCategories}>Véhicules spécifiques :</h3>
            <div className={vehiculesStyles.cardVehicule}>
                <img src={monteMeuble} className= {vehiculesStyles.monteMeubles} alt="illustration vehicule" />
                <h3 className= {vehiculesStyles.vehiculeTitle}>
                    Monte-meubles
                </h3>
                <div className={vehiculesStyles.textContainer}>
                    <p className= {vehiculesStyles.vehiculeText}><Plus />Chargements volumineux</p>
                    <p className= {vehiculesStyles.vehiculeText}><Plus />Accès difficiles</p>
                </div>
            </div>
            <h3 className={vehiculesStyles.vehiculesCategories}>Nos remorques :</h3>
            <div className={vehiculesStyles.container}>
            <div className={vehiculesStyles.cardVehicule}>
                <img src={remorque2} className= {vehiculesStyles.remorque2r} alt="illustration remorque 2 roues" />
                <h3 className= {vehiculesStyles.vehiculeTitle}>
                    Remorque 2 roues
                </h3>
                <div className={vehiculesStyles.textContainer}>
                    <p className= {vehiculesStyles.vehiculeText}><Plus />Petits chargements</p>
                    <p className= {vehiculesStyles.vehiculeText}><Plus />Zones à hauteur limitée</p>
                </div>
            </div>
            <div className={vehiculesStyles.cardVehicule}>
                <img src={remorque4} className= {vehiculesStyles.remorque4r} alt="illustration remorque 4 roues" />
                <h3 className= {vehiculesStyles.vehiculeTitle}>
                    Remorque 4 roues
                </h3>
                <div className={vehiculesStyles.textContainer}>
                    <p className= {vehiculesStyles.vehiculeText}><Plus />Petits chargement</p>
                    <p className= {vehiculesStyles.vehiculeText}><Plus />Zones à hauteur limitée</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Vehicules


