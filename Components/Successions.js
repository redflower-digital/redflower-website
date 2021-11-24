import React from 'react';
import successionStyles from '../styles/SuccessionsElement.module.css';

function Successions() {
    return (
        <div className={successionStyles.successions}>
            <div className={successionStyles.successionsElementHeader}>
                <h3 className={successionStyles.elementTitle}>Successions</h3>
            </div>
            <p className={successionStyles.elementText}>Nous vous accompagnons au cours des différents événements de la vie.</p>
            <br/>
            <p className={successionStyles.elementText}>Dans le cadre d'une succession, afin de faciliter la transition et les démarches liées à celle-ci, viennent s'ajouter à notre service de <strong>débarras</strong> divers <strong>services spécifiques</strong>.</p>
            <br/>
            <p className={successionStyles.elementText}>Nous prenons en compte votre situation et accordons une grande importance au respect des lieux et des objets ainsi qu’aux souvenirs s'y rattachant.</p>
            <h3 className={successionStyles.histoiresfCategories}>Régler via la caisse des dépôts :</h3>
            <p className={successionStyles.elementText}>Le <span>réglement de nos factures</span> peut être effectué par votre notaire <span>directement sur la succession</span> via la Caisse des Dépôts.</p>
            <br/>
            <p className={successionStyles.elementText}>Pensez à prendre conseil auprès de ce dernier.</p>
            <h3 className={successionStyles.histoiresfCategories}>Le rachat total :</h3>
            <p className={successionStyles.elementText}>Vous ne souhaitez pas conserver les meubles ou objets du logement à <strong>débarraser</strong>, nous pouvons vous aider. </p>
            <br/>
            <p className={successionStyles.elementText}>Quelle que soit la quantité de biens à revendre, nous sommes à même d'effectuer un <strong>rachat</strong> de l'ensemble de vos possessions au prix le plus juste.</p>
            <h3 className={successionStyles.histoiresfCategories}>Le rachat partiel :</h3>
            <p className={successionStyles.elementText}>Vous souhaitez uniquement vous séparer d'une partie de vos biens et conserver certains objets, nous pouvons également effectuer un <strong>rachat</strong> des objets sélectionnés par vos soins.</p>
        </div>
    )
}

export default Successions
