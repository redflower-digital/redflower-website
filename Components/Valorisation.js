import React from 'react';
const HistoireSF = "/img/histoire-sans-fin.jpg";
const Meubles = '/img/valorisation.png';
import {Check} from "../public/Icons/Check";
import valorisationStyles from '../styles/ValorisationElement.module.css';

function Valorisation() {
    return (
        <div className={valorisationStyles.valorisation}>
            <div className={valorisationStyles.valorisationElementHeader}>
                <h3 className={valorisationStyles.elementTitle}>Faites estimer vos biens</h3>
            </div>
            <p className={valorisationStyles.elementText}>Grâce à notre expérience dans le <strong>débarras</strong> et l’<strong>estimation d’objets</strong>, nous effectuons lors de nos missions une valorisation de vos biens en bon état pouvant être revendus.</p>
            <img src={ Meubles } className={valorisationStyles.meubles} alt="logo histoire sans fin"/>
            <p className={valorisationStyles.elementText}>Nous travaillons pour ce faire avec des dépôts ventes partenaires, ainsi que notre magasin d’antiquités brocante affilié L’Histoire Sans Fin, situé à Charbonnières-les-Bains près de Lyon. </p>
            <div className={valorisationStyles.histoiresfContainer}>
                <a href="http://lhistoiresansfin-antiquites.fr/" target="blank">
                    <img src={ HistoireSF } className={valorisationStyles.logoHistoiresf} alt="logo histoire sans fin"/>
                </a>
            </div>
            <h3 className={valorisationStyles.histoiresfCategories}>Les avantages :</h3>
            <p className={valorisationStyles.elementText}><Check />Donnez une nouvelle vie à vos meubles et objets.</p>
            <br />
            <p className={valorisationStyles.elementText}><Check />Le montant de l'estimation vient en <span>déduction du montant du devis</span>.</p>
            <br />
            <p className={valorisationStyles.elementText}><Check />Le <span>débarras</span> est <span>gratuit</span> si la valeur de la récupération est égale au coût de notre prestation.</p>
            <br />
            <p className={valorisationStyles.elementText}><Check />Lorsque la valeur est supérieure au montant du devis, <span>vous percevez la différence</span>!</p> 
        </div>
    )
}

export default Valorisation
