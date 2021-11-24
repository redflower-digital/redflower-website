import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationMeet from '../../public/Icons/SVG/Consult.json';
import visitStyles from '../../styles/VisitElement.module.css';

function Visit() {
    return (
        <div className={visitStyles.visit}>
            <div className={visitStyles.visitElementHeader}>
                <h3 className={visitStyles.elementTitle}>Visite du bien</h3>
            </div>
            <p className={visitStyles.elementText}>Vous rencontrerez un membre de l'équipe qui sera votre interlocuteur unique tout au long de la prestation. Vous échangerez au sujet de vos attentes et exigences de l'éventuelle prestation.</p>
            <br />
            <p className={visitStyles.elementText}>Après avoir évalué la surface et le volume de biens à débarrasser, ce dernier vous exposera les solutions les plus adaptées à vos besoins.</p>
            <div className={visitStyles.animation}>
                    <Lottie
                        direction={1}
                        height={150}
                        options={{
                        animationData: toggleAnimationMeet
                        }}
                    /> 
            </div>
            <p className={visitStyles.elementText}>Si vous possédez du mobilier ou des objets que vous ne souhaitez pas conserver et que vous optez pour la revalorisation, notre collaborateur peut également procéder à une estimations de vos biens.</p>
            <a href='/specialisations' className={visitStyles.visitButtonContainer}>
                <button className={visitStyles.stepperButtonValorisation}>Valorisation de vos biens</button>
            </a>           
            <p className={visitStyles.elementText}>Al'issue de la visite, vous recevrez votre <span>devis gratuit</span> sous <span>24h</span> d'une validité d'un mois à nous retourner en cas d'acceptation.</p>
        </div>
    )
}

export default Visit;
