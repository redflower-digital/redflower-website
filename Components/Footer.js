import React, {useState} from 'react';
import {Location} from "../public/Icons/Location";
import {Phone} from "../public/Icons/Phone";
import {Mail} from "../public/Icons/Mail";
import Mentions from './Mentions/Mentions';
import Politique from './PolitiqueConfidentialite/Politique';
import footerStyles from '../styles/Footer.module.css';
import SocialLinks from '../Components/SocialLinksFooter';

function Footer() {
    const [isShown, setIsShown] = useState(false);
    const [isShownPolitique, setIsShownPolitique] = useState(false);

    const showModal = () => {
        setIsShown(true);
    };

    const closeModal = (e) => {
        e.preventDefault()
        setIsShown(false);
    };

    const showModalPolitique = () => {
        setIsShownPolitique(true);
    };

    const closeModalPolitique = (e) => {
        e.preventDefault()
        setIsShownPolitique(false);
    };

    return (
        <>
        {isShown ? <Mentions isShown={isShown} closeModal={closeModal}/> : null}
        {isShownPolitique ? <Politique isShownPolitique={isShownPolitique} closeModalPolitique={closeModalPolitique} /> : null}
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerContent}>
                <div className={footerStyles.compagny}>
                    <h2 className={footerStyles.compagnyName}>RedFlower</h2>
                    <a className={footerStyles.googleLink} 
                        href="https://www.google.fr/maps/place/36+Route+de+Paris,+69260+Charbonni%C3%A8res-les-Bains/@45.7848632,4.74644,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4ece039aeb4f7:0x946b452cb9bcc697!8m2!3d45.7848595!4d4.7486287" 
                        target="blank">
                        <div className={footerStyles.adressLocation}>
                            <div className={footerStyles.locationLogo}>
                                <Location />
                                <p className={footerStyles.adresse}>36 Route de Paris</p>
                            </div>
                            <p className={footerStyles.adresse}>69260 Charbonnières-les-Bains</p>
                        </div>
                    </a>
                    <div className={footerStyles.horaires}>
                        <p className={footerStyles.contactHours}>Lundi - Dimanche :</p>
                        <p className={footerStyles.contactHours}>7H-21H</p>
                    </div>
                    <div className={footerStyles.footerContact}>
                        <a className={footerStyles.footerPhone} href="tel:0672328519">
                            <div className={footerStyles.phone}>
                                <Phone />
                                <p className={footerStyles.contactPhone}>06 72 32 85 19</p>
                            </div>
                        </a>
                        <a className={footerStyles.footerMail} href="mailto:redflowerdebarras@gmail.com ">
                            <div className={footerStyles.mail}>
                                <Mail />
                                <p className={footerStyles.contactMail}>redflowerdebarras@gmail.com </p>    
                            </div>
                        </a>
                        <SocialLinks/>
                    </div>
                </div>
                <p className={footerStyles.copyright}>© 2021</p>
                <div className={footerStyles.menuFooter}>
                    <button className={footerStyles.footerLink} onClick ={showModal}>Mentions légales</button>
                    <button className={footerStyles.footerLink} onClick ={showModalPolitique}>Politique de confidentialité</button>
                </div>   
            </div>       
        </footer>
        </>
    )
}

export default Footer
