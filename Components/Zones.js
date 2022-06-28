import React from "react";
import zoneStyles from "../styles/ZonesElement.module.css";
import ZoneBourgogne from "./ZoneBourgogne";
import ZoneRhoneAlpes from "./ZoneRhoneAlpes";

const mapFrance = "/img/map2.png";

function Zones() {
  return (
    <div className={zoneStyles.zones}>
      <div className={zoneStyles.zonesElementHeader}>
        <h3 className={zoneStyles.elementTitle}>Zones d'intervention</h3>
      </div>
      <p className={zoneStyles.elementText}>
        Installés à <strong>Charbonnières-les-Bains</strong>, commune située
        dans la banlieue lyonnaise, nos secteurs d’intervention se trouvent dans
        un large périmètre autour de <strong>Lyon</strong>:
      </p>
      <div className={zoneStyles.imgContainer}>
        <img
          src={mapFrance}
          className={zoneStyles.mapFrance}
          alt="carte de france"
        />
      </div>
      <p className={zoneStyles.elementTextCenter}>Cliquez sur les départements et villes pour découvrir nos zones d'interventions</p>
      <div className={zoneStyles.listDepartementsB}>
        <ZoneRhoneAlpes />
      </div>
      <p className={zoneStyles.elementTextCenter}>
        Ainsi que dans le sud de la Bourgogne Franche Comté :
      </p>
      <div className={zoneStyles.listDepartementsB}>
        <ZoneBourgogne />
      </div>
    </div>
  );
}

export default Zones;
