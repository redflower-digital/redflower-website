import React from 'react';
import billStyles from '../../styles/BillElement.module.css';

function Bill() {
    return (
        <div className={billStyles.bill}>
            <div className={billStyles.billElementHeader}>
                <h3 className={billStyles.elementTitle}>Facture</h3>
            </div>
            <p className={billStyles.elementText}>La prestation achevée, nous vous faisons parvenir <span>une facture conforme au devis</span> que vous avez signé.</p>
            <br/>
            <p className={billStyles.elementText}>Vous disposez d'un délai de <span>15 jours</span> pour effectuer le réglement<span>*</span>.</p>
            <p className={billStyles.warningText}>* A convenir en avance pour tout réglement par notaire sur la succession via la Caisse des Dépôts.</p>
        </div>
    )
}

export default Bill;
