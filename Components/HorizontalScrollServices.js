import React from "react";
import image1 from "../public/img/Devis.jpg";
import image2 from "../public/img/map.png";
import image3 from "../public/img/camions.png";
import Link from 'next/link';
import HSS from '../styles/HorizontalScrollServices.module.css';

function HorizontalScrollServices() {
  return (
    <>
        <div className={HSS.swipeCard}>
          <h3 className= {HSS.cardTitle}>
            Devis gratuit
          </h3>
          <p className={HSS.cardDescription} >
            Préparez au mieux votre débarras.
          </p>
          <img src={image1} className= {HSS.cardPresentationBg} alt="mini carton sur clavier pc portable" />
          <Link href="/services">
            <button className={HSS.cardButton}>En savoir plus</button>
          </Link>
        </div>

        <div className={HSS.swipeCard}>
          <h3 className= {HSS.cardTitle}>
            Secteur d'intervention
          </h3>
          <p className={HSS.cardDescription} >
            Découvrez notre zone d'intervention.
          </p>
          <img src={image2} className= {HSS.image2Secteur} alt="carte de france région auvergne-rhône-alpes en rouge" />
          <Link href="/services">
            <button className={HSS.cardButton}>En savoir plus</button>
          </Link>
        </div>

        <div className={HSS.swipeCard}>
          <h3 className= {HSS.cardTitle}>
            Nos véhicules
          </h3>
          <p className={HSS.cardDescription} >
            Une gamme de véhicules adaptés.
          </p>
          <img src={image3} className= {HSS.image2Vehicules} alt="trois véhicules utilitaires" />
          <Link href="/services">
            <button className={HSS.cardButton}>En savoir plus</button>
          </Link>
        </div>
    </>
  );
}

export default HorizontalScrollServices;
