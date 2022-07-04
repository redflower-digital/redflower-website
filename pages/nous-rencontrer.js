import React from 'react';
import Head from "next/head";
import Stepper from '../Components/Stepper';
import meetUsStyles from '../styles/MeetUs.module.css';

function MeetUs() {

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
              content="Votre entreprise de débarras en Auvergne-Rhône-Alpes"
            />
            <meta property="og:url" content="https://redflower-debarras.fr/" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="geo.placename" content="Lyon" />
            <meta name="msnbot" content="index,follow" />
            <meta name="ICBM" content="45.78498101131291, 4.7487209759413815" />
            <meta name="Geo.region" content="FR-69" />
          </Head>
        );
      };
      
      Meta.defaultProps = {
        title:
        "Du devis au rendez-vous découvrez les étapes du débarras",
        keywords:
          "débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne",
        description:
          "Découvrez les étapes de nos prestations du débarras (simple, succession, Diogène) et de rachat et valorisation de biens.",
      };

    return (
        <div className={meetUsStyles.meetUs}>
            <Meta/>
            <div className={meetUsStyles.headerContainer}>
                <div className={meetUsStyles.headerMeetUs}/>
            </div>
            <div id={meetUsStyles.main}>
                <div className={meetUsStyles.dContener}>
                <div className={meetUsStyles.d1}></div>
                <div className={meetUsStyles.d2}></div>
                <div className={meetUsStyles.d3}></div>
                <div className={meetUsStyles.d4}></div>
                <div className={meetUsStyles.d5}></div>
                <div className={meetUsStyles.dTitle}></div>
                </div>
            </div>
            <div className={meetUsStyles.meetUsContent}>
                <h3 className={meetUsStyles.titleMeetUs}><span className={meetUsStyles.divider}></span>Prise de<br/><br/>rendez-vous</h3>
                <h2 className={meetUsStyles.introductionMeetUs}>Afin de vous assurer un service rapide et de qualité, ainsi que de prévoir le débarras de votre bien immobilier, découvrez les étapes de nos prestations :</h2>
                <Stepper />
            </div>  
        </div>
    )
}

export default MeetUs
