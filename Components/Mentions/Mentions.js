import React, {  useState } from "react";
import ReactDOM from "react-dom";
import mentionsStyles from '../../styles/Mentions.module.css';

const Mentions = ({ isShown, closeModal }) => {

  return (isShown ? (
    <div className={mentionsStyles.modalOverlayMentions} >
          <div
            className={mentionsStyles.modalWrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={mentionsStyles.modalMentions}>
              <button
                type="button"
                className={mentionsStyles.modalCloseButtonMentions}
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className={mentionsStyles.modalContentMentions}>                 
                <div className={mentionsStyles.modalTextMentions}>
                <h2 className={mentionsStyles.modalTitleMentions}>Mentions légales</h2>
                <h3 className={mentionsStyles.modalSectionMentions}>Coordonnées</h3>
                <p className={mentionsStyles.intro}>
                Société RedFlower
                <br/>
                Jean-Baptiste Vernier
                <br/>
                36 Route de Paris, 69260 Charbonnières-les-Bains
                <br/>
                06.72.32.85.19
                <br/>
                <br/>
                Forme Juridique : Entreprise Individuelle (EI), pas de capital social
                <br/>
                N° SIRET : 75002542100033
                <br/>
                N° TVA intracommunautaire : FR7675002542100033
                </p>
                <h3 className={mentionsStyles.modalSectionMentions}>Conditions générales de vente</h3>
                <p>Modalités de paiement : le paiement peut se faire par chèque, virement ou espèce (dans une limite de 1 000 €).
                Conditions de règlement : le règlement doit se faire sous 15 jours après la réception de la facture. Tout retard peut entraîner des pénalités.
                Le devis est valable jusqu’à 1 mois à partir de sa réception.
                Coût de la communication : prix d’un appel mobile.</p>
                </div>
              </div>
            </div>
          </div>
          </div>

  ) : null);
}

export default Mentions;
