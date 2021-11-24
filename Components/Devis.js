import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationDevis from '../public/Icons/SVG/devis1.json';
import {Time} from "../public/Icons/Time";
import devisStyles from '../styles/DevisElement.module.css';

function Devis() {
    return (
        <div className={devisStyles.devis}>
            <div className={devisStyles.devisElementHeader}>
                <h3 className={devisStyles.elementTitle}>Demandez votre devis</h3>
            </div>
            <p className={devisStyles.elementText}>L'équipe de <span>Redflower</span> vient physiquement à votre rencontre afin de cerner et définir au mieux vos besoins et attentes.</p>
            <br/>
            <p className={devisStyles.elementText}>Votre prestation passe par un <span>interlocuteur unique</span> du devis à la fin de prestation.</p>
            <Lottie
                direction={1}
                height={220}
                options={{
                  animationData: toggleAnimationDevis
                }}
            /> 
            <p className={devisStyles.elementText}>Lors des visites, nous vous proposons les solutions les plus adaptées à votre situation en tenant compte des procédés et équipements à engager lors de votre <strong>débarras</strong>.</p>
            <div className={devisStyles.timeIconContainer}>
                <Time />
            </div>
            <p className={devisStyles.elementText}>Dans les 24h qui suivent la visite, vous receverez un devis valable pour une durée d'un mois.</p>
            <a href='/contact' className={devisStyles.devisButtonContainer}>
                <button className={devisStyles.devisButton}>Prendre rendez-vous</button>
            </a>    
        </div>
    )
}

export default Devis
