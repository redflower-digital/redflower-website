import React from 'react';
import Stepper from '../Components/Stepper';
import meetUsStyles from '../styles/MeetUs.module.css';

function MeetUs() {
    return (
        <div className={meetUsStyles.meetUs}>
            <div className={meetUsStyles.headerContainer}>
                <div className={meetUsStyles.headerMeetUs}/>
            </div>
            <div id={meetUsStyles.main}>
                <div className={meetUsStyles.dContener}>
                <div className={meetUsStyles.d1}></div>
                <div className={meetUsStyles.d2}></div>
                <div className={meetUsStyles.d3}></div>
                <div className={meetUsStyles.d4}></div>
                <div className={meetUsStyles.d5}></div>
                <div className={meetUsStyles.dTitle}></div>
                </div>
            </div>
            <div className={meetUsStyles.meetUsContent}>
                <h3 className={meetUsStyles.titleMeetUs}><span className={meetUsStyles.divider}></span>Prise de<br/><br/>rendez-vous</h3>
                <h2 className={meetUsStyles.introductionMeetUs}>Afin de vous assurer un service rapide et de qualité, ainsi que de prévoir le débarras de votre bien immobilier, découvrez les étapes de nos prestations :</h2>
                <Stepper />
            </div>  
        </div>
    )
}

export default MeetUs
