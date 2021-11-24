import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationHeadphone from '../../public/Icons/SVG/headphone.json';
import contactStepStyles from '../../styles/ContactStepElement.module.css';

function ContactStep() {
    return (
        <div className={contactStepStyles.contactStep}>
            <div className={contactStepStyles.contactStepElementHeader}>
                <h3 className={contactStepStyles.elementTitle}>Prise de contact</h3>
            </div>
            <p className={contactStepStyles.elementText}>Nous répondons à vos questions et convenons avec vous d’une date de rendez-vous pour visiter <span>gratuitement</span> l'espace à débarrasser et valoriser vos biens.</p>
            <div className={contactStepStyles.animation}>
                    <Lottie
                        direction={1}
                        height={100}
                        options={{
                        animationData: toggleAnimationHeadphone
                        }}
                    /> 
            </div>
            <a href='/contact' className={contactStepStyles.contactStepButtonContainer}>
                <button className={contactStepStyles.stepperButton}>Nous contacter</button>
            </a>
        </div>
    )
}

export default ContactStep
