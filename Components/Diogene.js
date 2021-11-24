import React from 'react';
import diogeneStyles from '../styles/DiogeneElement.module.css';

function Diogene() {
    return (
        <div className={diogeneStyles.diogene}>
            <div className={diogeneStyles.diogeneElementHeader}>
                <h3 className={diogeneStyles.elementTitle}>Le syndrome de Diogène</h3>
            </div>
            <p className={diogeneStyles.elementText}>Le syndrome de Diogène est un dérèglement psychologique et comportemental connu mais peu étudié, qui conduit bien souvent à une accumulation compulsive (ou syllogomanie) accompagnée d'une négligence des conditions de vie.</p>
            <p className={diogeneStyles.elementText}>Les personnes atteintes du syndrome de Diogène présentent de fortes dispositions à un isolement social quasi-total et assumé.</p>
            <p className={diogeneStyles.elementText}>En complément d’une aide psychologique, une action de débarras suivie d’un grand nettoyage peut se révéler efficace pour enrayer les symptômes.</p>
            <h3 className={diogeneStyles.diogeneCategories}>Bienveillance et discrétion :</h3>
            <p className={diogeneStyles.elementText}>Nous débarrassons votre bien immobilier avec professionnalisme, bienveillance et discrétion.</p>
            <p className={diogeneStyles.elementText}>Notre objectif est avant tout de permettre à la personne atteinte du syndrome de Diogène de repartir sur des bases saines et de l’aider à sortir d’une situation éprouvante.</p>
            <p className={diogeneStyles.elementText}>Nous pouvons effectuer des débarras personnalisés (complets ou partiels), selon vos choix.</p>
            <p className={diogeneStyles.elementText}>Pour en savoir plus sur notre prestation de débarras pour syndrome de Diogène, n’hésitez pas à nous contacter.</p>
            <a href='/contact' className={diogeneStyles.diogeneButtonContainer}>
                <button className={diogeneStyles.devisButton}>Nous contacter</button>
            </a>
        </div>
    )
}

export default Diogene


