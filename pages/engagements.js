import React, { useState } from "react";
import Head from "next/head";
import Ecology from "../Components/Ecology";
import Solidarity from "../Components/Solidarity";
import commitmentsStyles from '../styles/Commitments.module.css';

function Commitments() {

  const [displayCommit, SetDisplayCommit] = useState('Environnement')

  const getComponent = () =>{
    switch(displayCommit){
      case 'Environnement': 
        return <Ecology/>;
      case 'Solidarite': 
        return <Solidarity/>; 
      default: 
        return <Ecology/>
    }
  }

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
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"/>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/_next/static/favicon.ico"
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
        <link
          rel="canonical"
          href="https://www.redflower-debarras.fr/engagements"
          title="Débarras maison, appartement gratuit à Lyon (69) Rhône-Alpes"
        />
        <meta name="geo.placename" content="Lyon" />
        <meta name="msnbot" content="index,follow" />
        <meta name="ICBM" content="45.78498101131291, 4.7487209759413815" />
        <meta name="Geo.region" content="FR-69" />
      </Head>
    );
  };
  
  Meta.defaultProps = {
    title:
    "Débarras & écologie | tri | recyclage | encombrants",
    keywords:
      "débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne",
    description:
      "Redflower débarras est engagé dans une démarche éco-responsable, par le biais de tris sélectifs, mais également dans le cadre de la lutte contre le gaspillage et la surconsommation via des dons associatifs et le fait de donner une seconde vie à vos objet.",
  };

  return (
    <div className={commitmentsStyles.commitments}>
      <Meta/>
      <div className={commitmentsStyles.headerContainer}>
        <div className={commitmentsStyles.headerCommitments}/>
      </div>
      <div id={commitmentsStyles.main}>
        <div className={commitmentsStyles.dContener}>
          <div className={commitmentsStyles.d1}></div>
          <div className={commitmentsStyles.d2}></div>
          <div className={commitmentsStyles.d3}></div>
          <div className={commitmentsStyles.d4}></div>
          <div className={commitmentsStyles.d5}></div>
          <div className={commitmentsStyles.dTitle}></div>
        </div>
      </div>
      <div className={commitmentsStyles.commitmentsContent}>
        <h3 className={commitmentsStyles.titleCommitments}>
          <span className={commitmentsStyles.divider}></span>Nos<br/><br/>engagements
        </h3>
        <h2 className={commitmentsStyles.introductionCommitments}>
        Nous sommes très impliqués dans une démarche <strong>éco-responsable</strong>, que ce soit par le biais de <strong>tri sélectif</strong>, mais aussi par le <strong>don au associatif</strong> de vêtements, lingerie de maison, nourriture ( conserves ) ou de petit mobilier à qui nous donnons une seconde vie, dans le but de lutter contre le gaspillage.
        </h2>
        <div className={commitmentsStyles.selectBar}>
        {displayCommit === 'Environnement' ? <button className= {commitmentsStyles.activeSubmenuButton} onClick={e => SetDisplayCommit('Environnement')}>Environnement<span className={commitmentsStyles.buttonDecorationA}></span></button>
          :    <button className={commitmentsStyles.submenuButton} onClick={e => SetDisplayCommit('Environnement')}>Environnement<span className={commitmentsStyles.buttonDecoration}></span></button> }
        {displayCommit === 'Solidarite' ? <button className= {commitmentsStyles.activeSubmenuButton} onClick={e => SetDisplayCommit('Solidarite')}>Solidarité<span className={commitmentsStyles.buttonDecorationA}></span></button>
          : <button className={commitmentsStyles.submenuButton} onClick={e => SetDisplayCommit('Solidarite')}>Solidarité<span className={commitmentsStyles.buttonDecoration}></span></button>}
        </div>
        <div className={commitmentsStyles.submenuContent}>
          {getComponent()}
        </div>
      </div>
    </div>
  );
}

export default Commitments;
