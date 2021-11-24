import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationFlower from '../public/Icons/SVG/flower-bloom.json';
import toggleAnimationRecycle from '../public/Icons/SVG/recycle.json';
import { Warning } from '../public/Icons/Warning';
import ecologyStyles from '../styles/EcologyElement.module.css';

function Ecology() {
    return (
        <div className={ecologyStyles.ecologyElement}>
            <div className={ecologyStyles.ecologyElementHeader}>
                <h3 className={ecologyStyles.elementTitle}>Ecologie</h3>
            </div>
            <div className={ecologyStyles.ecologyContainer}>
                <p className={ecologyStyles.elementText}>Conscients que l’environnement est placé au cœur de notre métier, et attachés à des valeurs qui nous sont chères, chez <span>RedFlower</span>, nous nous inscrivons dans une démarche environnementale responsable.</p>
                <div className={ecologyStyles.animation}>
                    <Lottie
                        direction={1}
                        height={120}
                        options={{
                        animationData: toggleAnimationFlower
                        }}
                    /> 
                </div>
                <p className={ecologyStyles.elementText}>Nous réalisons sur chacune de nos prestations un tri des encombrants précis et systématique afin d'optimiser le recyclage des déchets.</p>
                <div className={ecologyStyles.animation}>
                    <Lottie
                        direction={1}
                        height={120}
                        options={{
                        animationData: toggleAnimationRecycle
                        }}
                    /> 
                </div>   
                <p className={ecologyStyles.elementText}>Les déchets sont séparés en plusieurs catégories afin qu’ils soient retraités de façon optimale (bois, métaux, verres, gravats, papiers, cartons, produits dangereux, objets électriques, etc … ).</p>
                <p className={ecologyStyles.warningText}><Warning /> Pour des raisons de sécurité, les matériaux dangereux (amiante, eternit...) ne pourront être enlevés par nos soins, mais uniquement par notre partenaire spécialisé.</p>
            </div>
        </div>
    )
}

export default Ecology
