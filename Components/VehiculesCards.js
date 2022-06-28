import React from "react";
import vehiculesCardsStyle from '../styles/VehiculesCards.module.css';
import { Plus } from "../public/Icons/Plus";

const vehicule6m = "img/Vehicules/6m3.png";
const vehicule10m = "img/Vehicules/10m3.png";
const vehicule30m = "img/Vehicules/30m3(1).png";

function VehiculesCards() {
  return (
    <div className={vehiculesCardsStyle.container}>
        <div className={vehiculesCardsStyle.cardVehicule}>
          <img src={vehicule6m} className= {vehiculesCardsStyle.vehicule6m} alt="illustration vehicule" />
          <h3 className= {vehiculesCardsStyle.vehiculeTitle}>
            6m³
          </h3>
          <div className={vehiculesCardsStyle.textContainer}>
            <p className= {vehiculesCardsStyle.vehiculeText}><Plus />Petits et moyens chargements</p>
            <p className= {vehiculesCardsStyle.vehiculeText}><Plus />Zones à hauteur limitée</p>
          </div>
        </div>

        <div className={vehiculesCardsStyle.cardVehicule}>
          <img src={vehicule10m} className= {vehiculesCardsStyle.vehicule10m} alt="illustration vehicule" />
          <h3 className= {vehiculesCardsStyle.vehiculeTitle}>
            10m³
          </h3>
          <div className={vehiculesCardsStyle.textContainer}>
            <p className= {vehiculesCardsStyle.vehiculeText}><Plus />Volume de chargement</p>
            <p className= {vehiculesCardsStyle.vehiculeText}><Plus />Zones à hauteur limitée</p>
          </div>
        </div>

        <div className={vehiculesCardsStyle.cardVehicule}>
          <img src={vehicule30m} className= {vehiculesCardsStyle.vehicule30m} alt="illustration vehicule" />
          <h3 className= {vehiculesCardsStyle.vehiculeTitle}>
            30m³
          </h3>
          <div className={vehiculesCardsStyle.textContainer}>
            <p className= {vehiculesCardsStyle.vehiculeText}><Plus />Capacité de chargement importante</p>
          </div>
        </div>
    </div>
  );
}

export default VehiculesCards;
