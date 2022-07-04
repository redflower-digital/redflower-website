import React, { useState } from "react";
import Head from "next/head";
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

  const Meta = ({ title, keywords, description }) => {
    return (
      <Head>
        <title>{title}</title>
        <meta httpEquiv="content-language" content="fr" />
        <meta name="language" content="fr" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon.ico"
          title="icone"
        />
        <meta property="og:title" content="Redflower débarras" />
        <meta
          property="og:description"
          content="Debarras appartement, maison, locaux"
        />
        <meta property="og:url" content="https://redflower-debarras.fr/services" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://redflower-debarras.fr/services"/>
        <meta name="geo.placename" content="Lyon" />
        <meta name="msnbot" content="index,follow" />
        <meta name="ICBM" content="45.78498101131291, 4.7487209759413815" />
        <meta name="Geo.region" content="FR-69" />
      </Head>
    );
  };
  
  Meta.defaultProps = {
    title:
    "Debarras appartement, maison, locaux",
    keywords:
      "débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne",
    description:
      "Obtenez un devis gratuit et sans engagement pour toute intervention de débarrassage sur tout types de superficies et locaux.",
  };

  return (
    <div className={serviceStyles.services}>
          <Meta/>
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
