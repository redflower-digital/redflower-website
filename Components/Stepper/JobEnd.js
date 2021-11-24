import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationClean from '../../public/Icons/SVG/vaccum.json';
import toggleAnimationKeys from '../../public/Icons/SVG/keys.json';
import jobEndStyles from '../../styles/JobEndElement.module.css';

function JobEnd() {
    return (
        <div className={jobEndStyles.jobEnd}>
            <div className={jobEndStyles.jobEndElementHeader}>
                <h3 className={jobEndStyles.elementTitle}>Fin d'intervention</h3>
            </div>
            <p className={jobEndStyles.elementText}>Le débarras terminé, nous procédons à un <span>nettoyage de surface</span> (avec <span>possibilité</span> de prestation de <span>nettoyage complet</span> sur devis).</p>
            <div className={jobEndStyles.animation}>
                    <Lottie
                        direction={1}
                        height={150}
                        options={{
                        animationData: toggleAnimationClean
                        }}
                    /> 
            </div>
            <p className={jobEndStyles.elementText}>Chaque prestations se finalise par un <span>état des lieux</span> en votre présence durant lequel nous procéderons à la <span>remise des clés</span> de votre bien.</p>
            <div className={jobEndStyles.animation}>
                    <Lottie
                        direction={1}
                        height={150}
                        options={{
                        animationData: toggleAnimationKeys
                        }}
                    /> 
            </div>
        </div>
    )
}

export default JobEnd;
