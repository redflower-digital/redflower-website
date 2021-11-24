import React from 'react';
import { CheckTable } from '../public/Icons/CheckTable';
import { Cross } from '../public/Icons/Cross';
import avanatgesStyle from '../styles/Avantages.module.css';

function Advantage() {
  const Content = [
    {
        title: 'Suivi personnalisé',
        part: true,
        pro: true
    },
    {
        title: 'TVA récupérable',
        part: false,
        pro: true
    },
    {
        title: 'Interventions urgentes',
        part: true,
        pro: true
    },
    {
        title: 'Bien immobilier disponible rapidement',
        part: true,
        pro: true
    },
    {
        title: 'Respect des délais de libération et de dédite',
        part: true,
        pro: true
    },
    {
        title: 'Rachat de mobilier',
        part: true,
        pro: true
    },
    {
        title: 'Eviter les taxes supplémentaires (taxe habitation...)',
        part: true,
        pro: true
    },
    {
        title: 'Limite les risques de cambriolages',
        part: true,
        pro: true
    },
    {
        title: 'Réglement via notaire (en cas de successions)',
        part: true,
        pro: false
    }
];
    return (
        <div className={avanatgesStyle.advantages}>
            
            <table className={avanatgesStyle.contentTable}>
            
        <thead className={avanatgesStyle.categories}>
        <tr className={avanatgesStyle.tableHeader}>
        <th></th>
          <th className={avanatgesStyle.advantagesColumn}>Particuliers</th>
          <th className={avanatgesStyle.advantagesColumn}>professionnels</th>
        </tr> 
        </thead>
        <tbody>
        {Content && Content.map((item,index) => {
                    return (
                      <tr className={avanatgesStyle.advantagesList} key={index}>
                        <td className={avanatgesStyle.advantagesTitle}>{item.title}</td>
                        {item.part ? <td className={avanatgesStyle.true}><CheckTable/></td>
                        :
                        <td className={avanatgesStyle.false}><Cross/></td>
                        }
                        {item.pro ? <td className={avanatgesStyle.true}><CheckTable/></td>
                        :
                        <td className={avanatgesStyle.false}><Cross/></td>
                        }
                      </tr>
                    )
                })}
        
        </tbody>
        
      </table>
        </div>
    )
}

export default Advantage
