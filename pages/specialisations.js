import React, { useState } from "react";
import Head from "next/head";
import Valorisation from "../Components/Valorisation";
import Successions from "../Components/Successions";
import Diogene from "../Components/Diogene";
import specialisationStyles from '../styles/Specialisation.module.css';
import Lottie from "lottie-react-web";
import toggleAnimation from "../public/Icons/SVG/swipe2.json";

function Specialisation() {

  const [displaySpecial, SetDisplaySpecial] = useState('Valorisation')

  const getComponent = () =>{
    switch(displaySpecial){
      case 'Valorisation': 
        return <Valorisation/>;
      case 'Successions': 
        return <Successions/>; 
      case 'Diogene': 
        return <Diogene/>;
      default: 
        return <Valorisation/>
    }
  }

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
    "Nos spécialisations: rachat | Succession | Diogène",
    keywords:
      "débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne",
    description:
      "Nous mettons notre expérience dans les domaines du débarras et de l'estimation de biens à votre disposition. Nous intervenons avec discrétion et respect, du débarras simple au débarras de succession ou pour syndrome de Diogène",
  };

  return (
    <div className={specialisationStyles.specialisation}>
      <Meta/>
      <div className={specialisationStyles.headerContainer}>
        <div className={specialisationStyles.headerSpecialisation}/>
      </div>
      <div id={specialisationStyles.main}>
        <div className={specialisationStyles.dContener}>
          <div className={specialisationStyles.d1}></div>
          <div className={specialisationStyles.d2}></div>
          <div className={specialisationStyles.d3}></div>
          <div className={specialisationStyles.d4}></div>
          <div className={specialisationStyles.d5}></div>
          <div className={specialisationStyles.dTitle}></div>
        </div>
      </div>
      <div className={specialisationStyles.specialisationContent}>
        <h3 className={specialisationStyles.titleSpecialisation}>
          <span className={specialisationStyles.divider}></span>Nos<br/><br/>spécialisations
        </h3>
        <h2 className={specialisationStyles.introductionSpecialisation}>
        Notre équipe est toujours au plus proche de ses clients , nous intervenons avec <strong>discrétion et respect</strong>.</h2>
        <h2 className={specialisationStyles.introductionSpecialisation}>Notre expérience (pour la <strong>valorisation de vos biens</strong> et les situations compliquées comme le <strong>syndrome de Diogène </strong>) et 
        notre professionnalisme pour respecter vos conditions d'intervention quelles qu'elles soient...</h2>
        <h2 className={specialisationStyles.introductionSpecialisation}>Tous ses fondements font parties intégrantes de notre entreprise.
        </h2>
        <div className={specialisationStyles.buttonBar} onScroll={handleScroll}>
        {displaySpecial === 'Valorisation' ? <button className= {specialisationStyles.activeSubmenuButton} onClick={e => SetDisplaySpecial('Valorisation')}>Valorisation de biens<span className={specialisationStyles.buttonDecorationA}></span></button>
         : <button className={specialisationStyles.submenuButton} onClick={e => SetDisplaySpecial('Valorisation')}>Valorisation de biens<span className={specialisationStyles.buttonDecoration}></span></button>}
         {displaySpecial === 'Successions' ? <button className= {specialisationStyles.activeSubmenuButton} onClick={e => SetDisplaySpecial('Successions')}>Successions<span className={specialisationStyles.buttonDecorationA}></span></button>
         : <button className={specialisationStyles.submenuButton} onClick={e => SetDisplaySpecial('Successions')}>Successions<span className={specialisationStyles.buttonDecoration}></span></button>}
         {displaySpecial === 'Diogene' ? <button className= {specialisationStyles.activeSubmenuButton} onClick={e => SetDisplaySpecial('Diogene')}>Syndrôme de diogène<span className={specialisationStyles.buttonDecorationA}></span></button>
         : <button className={specialisationStyles.submenuButton} onClick={e => SetDisplaySpecial('Diogene')}>Syndrôme de diogène<span className={specialisationStyles.buttonDecoration}></span></button>}
        </div>
        <div className={specialisationStyles.animationHome}>
          <Lottie
            direction={-1}
            options={{
              animationData: scrollingAnimation ? toggleAnimation : null,
            }}
          />
        </div>
        <section className={specialisationStyles.submenuContent}>
          {getComponent()}
        </section>
      </div>
    </div>
  );
}

export default Specialisation;
