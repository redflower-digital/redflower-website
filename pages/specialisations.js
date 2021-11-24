import React, { useState } from "react";
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

  return (
    <div className={specialisationStyles.specialisation}>
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
