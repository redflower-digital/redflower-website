import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationEquipement from '../../public/Icons/SVG/donation.json';
import toggleAnimationWaste from '../../public/Icons/SVG/waste.json';
import interventionStyles from '../../styles/InterventionElement.module.css';

function Intervention() {
    return (
        <div className={interventionStyles.intervention}>
            <div className={interventionStyles.interventionElementHeader}>
                <h3 className={interventionStyles.elementTitle}>Intervention</h3>
            </div>
            <p className={interventionStyles.elementText}>Nos équipes interviennent équipées du matériel nécessaire pour protéger et transporter vos biens, et ainsi vider votre appartement, votre maison ou votre bureau de façon efficace et rapide.</p>
            <div className={interventionStyles.animation}>
                    <Lottie
                        direction={1}
                        height={120}
                        options={{
                        animationData: toggleAnimationEquipement
                        }}
                    /> 
            </div>
            <p className={interventionStyles.elementText}>Nous trions le contenu du bien à débarrasser de manière responsable et optimisons ainsi le recyclage des objets et le traitement des déchets.</p>
            <div className={interventionStyles.animationWaste}>
                    <Lottie
                        direction={1}
                        height={200}
                        options={{
                        animationData: toggleAnimationWaste
                        }}
                    /> 
            </div>
        </div>
    )
}

export default Intervention;
