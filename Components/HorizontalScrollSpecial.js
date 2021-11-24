import React from "react";
import image1 from "../public/img/canape.png";
import image2 from "../public/img/valorisation1.jpg";
import image3 from "../public/img/encombrants.png";
import image4 from "../public/img/cartons.png";
import Link from 'next/link';
import HSSP from '../styles/HorizontalScrollSpecial.module.css';

function HorizontalScrollSpecial() {
  return (
    <>
        <div className={HSSP.swipeCard}>
          <h3 className= {HSSP.cardTitle}>
            Successions
          </h3>
          <p className={HSSP.cardDescription} >
            Bénéficiez de services et conseils expérimentés.
          </p>
          <img src={image1} className= {HSSP.image1Valorisation} alt="illustration card" />
          <Link href="/specialisations">
            <button className={HSSP.cardButton}>En savoir plus</button>
          </Link>
        </div>

        <div className={HSSP.swipeCard}>
          <h3 className= {HSSP.cardTitle}>
            Valorisation de vos biens
          </h3>
          <p className={HSSP.cardDescription} >
            Estimations par des professionnels de l'antiquité et de la brocante.
          </p>
          <img src={image2} className= {HSSP.cardPresentationBgSuccession} alt="maquette de maison et clés" />
          <Link href="/specialisations">
            <button className={HSSP.cardButton}>En savoir plus</button>
          </Link>
        </div>
        
        <div className={HSSP.swipeCard}>
          <h3 className= {HSSP.cardTitle}>
            Syndrome de Diogène
          </h3>
          <p className={HSSP.cardDescriptionDiogene} >
            Interventions liées au syndrome de Diogène.
          </p>
          <img src={image3} className= {HSSP.imageDiogene} alt="maquette de maison et clés" />
          <img src={image4} className= {HSSP.secondImage} alt="maquette de maison et clés" />
          <Link href="/specialisations">
            <button className={HSSP.cardButton}>En savoir plus</button>
          </Link>
        </div>
         
    </>
  );
}

export default HorizontalScrollSpecial;
