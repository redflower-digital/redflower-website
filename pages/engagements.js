import React, { useState } from "react";
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

  return (
    <div className={commitmentsStyles.commitments}>
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
