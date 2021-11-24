import React from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimationDonation from '../public/Icons/SVG/box-open.json';
import toggleAnimationGift from '../public/Icons/SVG/gift.json';
import {Check} from "../public/Icons/Check";
import solidarityStyles from '../styles/SolidarityElement.module.css';

function Solidarity() {
    return (
        <div className={solidarityStyles.solidarityElement}>
            <div className={solidarityStyles.solidarityElementHeader}>
                <h3 className={solidarityStyles.elementTitle}>Solidarité</h3>
            </div>
            <p className={solidarityStyles.elementTextParagraphe}>Certains objets ne peuvent être revendus, mais ceux qui sont en bon état peuvent faire le bonheur d’un nouveau propriétaire.</p>
            <div className={solidarityStyles.animation}>
                    <Lottie
                        direction={1}
                        height={150}
                        options={{
                        animationData: toggleAnimationGift
                        }}
                    /> 
            </div>
            <p className={solidarityStyles.elementTextParagraphe}>Des gestes simples tels que les dons nous permettent de soutenir les personnes dans le besoin.</p>
            <p className={solidarityStyles.elementTextParagraphe}>Ainsi, si vous souhaitez aider des associations, vous pouvez laisser des objets en bon état dans le bien immobilier à débarrasser, nous nous occuperons de leur future destination.</p>
            <div className={solidarityStyles.animationCarton}>
                    <Lottie
                        direction={-1}
                        height={200}
                        options={{
                        animationData: toggleAnimationDonation
                        }}
                    /> 
            </div>
            <p className={solidarityStyles.elementTextParagraphe}>Lors de nos débarras, nous travaillons de concert avec des associations auxquelles nous portons divers dons :</p>
            <p className={solidarityStyles.elementTextParagraphe}><Check />Vêtements, linge de lit et de toilette en bon état</p>
            <br />
            <p className={solidarityStyles.elementTextParagraphe}><Check />Produits d’hygiène et de nettoyage neufs</p>
            <br />
            <p className={solidarityStyles.elementTextParagraphe}><Check />Denrées non périmées</p>
        </div>
    )
}

export default Solidarity;
