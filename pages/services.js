import React, { useState } from "react";
import Vehicules from "../Components/Vehicules";
import Devis from "../Components/Devis";
import Zones from "../Components/Zones";
import Interventions from "../Components/Interventions";
import serviceStyles from "../styles/Services.module.css";
import Lottie from "lottie-react-web";
import toggleAnimation from "../public/Icons/SVG/swipe2.json";

function Services() {
  const [display, SetDisplay] = useState("Devis");

  const getComponent = () => {
    switch (display) {
      case "Devis":
        return <Devis />;
      case "Zones":
        return <Zones />;
      case "Vehicules":
        return <Vehicules />;
        case "Interventions":
        return <Interventions />;
      default:
        return <Devis />;
    }
  };

  const [scrollingAnimation, setScrollingAnimation] = useState(true);

  const handleScroll = (event) => {
    if (scrollingAnimation) {
      setTimeout(() => {
        setScrollingAnimation(false);
      }, 500);
    }
  };

  return (
    <div className={serviceStyles.services}>
      <div className={serviceStyles.headerContainer}>
       <div className={serviceStyles.headerServices}/>
      </div>
      <div id={serviceStyles.main}>
        <div className={serviceStyles.dContener}>
          <div className={serviceStyles.d1}></div>
          <div className={serviceStyles.d2}></div>
          <div className={serviceStyles.d3}></div>
          <div className={serviceStyles.d4}></div>
          <div className={serviceStyles.d5}></div>
          <div className={serviceStyles.dTitle}></div>
        </div>
      </div>
      <div className={serviceStyles.servicesContent}>
        <h3 className={serviceStyles.titleServices}>
          <span className={serviceStyles.divider}></span>Nos services
        </h3>
        <h2 className={serviceStyles.introductionServices}>
          Chez <span>Redflower débarras</span>, nous favorisons l’humain avant
          tout ! Vous faites appel à une entreprise à taille humaine qui est à
          votre écoute et respecte vos besoins.
        </h2>
        <div className={serviceStyles.buttonBar} onScroll={handleScroll}>
          {display === "Devis" ? (
            <button
              className={serviceStyles.activeSubmenuButton}
              onClick={(e) => SetDisplay("Devis")}
            >
              Devis gratuit
              <span className={serviceStyles.activeButtonDecoration}></span>
            </button>
          ) : (
            <button
              className={serviceStyles.submenuButton}
              onClick={(e) => SetDisplay("Devis")}
            >
              Devis gratuit
              <span className={serviceStyles.buttonDecoration}></span>
            </button>
          )}
          {display === "Zones" ? (
            <button
              className={serviceStyles.activeSubmenuButton}
              onClick={(e) => SetDisplay("Zones")}
            >
              Secteurs d'intervention
              <span className={serviceStyles.activeButtonDecoration}></span>
            </button>
          ) : (
            <button
              className={serviceStyles.submenuButton}
              onClick={(e) => SetDisplay("Zones")}
            >
              Secteurs d'intervention
              <span className={serviceStyles.buttonDecoration}></span>
            </button>
          )}
          {display === "Vehicules" ? (
            <button
              className={serviceStyles.activeSubmenuButton}
              onClick={(e) => SetDisplay("Vehicules")}
            >
              Nos véhicules
              <span className={serviceStyles.activeButtonDecoration}></span>
            </button>
          ) : (
            <button
              className={serviceStyles.submenuButton}
              onClick={(e) => SetDisplay("Vehicules")}
            >
              Nos véhicules
              <span className={serviceStyles.buttonDecoration}></span>
            </button>
          )}
          {display === "Interventions" ? (
            <button
              className={serviceStyles.activeSubmenuButton}
              onClick={(e) => SetDisplay("Interventions")}
            >
              Nos interventions
              <span className={serviceStyles.activeButtonDecoration}></span>
            </button>
          ) : (
            <button
              className={serviceStyles.submenuButton}
              onClick={(e) => SetDisplay("Interventions")}
            >
              Nos interventions
              <span className={serviceStyles.buttonDecoration}></span>
            </button>
          )}
        </div>
        <div className={serviceStyles.animationHome}>
          <Lottie
            direction={-1}
            options={{
              animationData: scrollingAnimation ? toggleAnimation : null,
            }}
          />
        </div>
        <div className={serviceStyles.submenuContent}>{getComponent()}</div>
      </div>
    </div>
  );
}

export default Services;
