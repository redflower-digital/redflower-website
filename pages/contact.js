import React, { useState } from 'react';
import FormPart from '../Components/FormPart';
import FormPro from '../Components/FormPro';
import {Phone} from "../public/Icons/Phone";
import contactStyles from '../styles/Contact.module.css';

function Contact() {
    const [formType, setFormType] = useState("particulier");
    const handleChange =(e) => {
        setFormType(e.target.id);
  }
    return (
        <div className={contactStyles.contact}>
            <div className={contactStyles.headerContainer}>
                <div className={contactStyles.headerContact}/>
            </div>
            <div id={contactStyles.main}>
                <div className={contactStyles.dContener}>
                <div className={contactStyles.d1}></div>
                <div className={contactStyles.d2}></div>
                <div className={contactStyles.d3}></div>
                <div className={contactStyles.d4}></div>
                <div className={contactStyles.d5}></div>
                <div className={contactStyles.dTitle}></div>
            </div>
      </div>
            <div className={contactStyles.contactContent}>
                <h3 className={contactStyles.titleContact}><span className={contactStyles.divider}></span>Nous<br/><br/>contacter</h3>
                <p className={contactStyles.contactTextHead}>Vous pouvez nous contacter par téléphone au :</p>         
                    <button className={contactStyles.telephone}>
                        <a className={contactStyles.phoneNumber} href="tel:0672328519">
                        <Phone />
                            06.72.32.85.19
                        </a> 
                    </button>               
                <p className={contactStyles.contactTextHead}>ou via<br/>le formulaire de contact ci-dessous :</p>
                <div className={contactStyles.form}>
                    <div className={contactStyles.switchContainer}>
                        <p className={contactStyles.contactText}>Vous êtes :</p>
                        <div className={contactStyles.switch}>
                            <input type="radio" className={contactStyles.switchInput} name="entreprise" value="particulier" onClick={handleChange} id="particulier" defaultChecked={true}/>
                            <label htmlFor="particulier" className={contactStyles.switchLabel}>Un particulier</label>
                            <input type="radio" className={contactStyles.switchInput} name="entreprise" value="entreprise" onClick={handleChange} id="entreprise"/>
                            <label htmlFor="entreprise" className={contactStyles.switchLabel}>Une entreprise</label>
                            <span className={contactStyles.switchSelection}></span>
                        </div>
                    </div>
                    <div className={contactStyles.formContainer}>
                        {formType==="particulier"? <FormPart/> : (formType==="entreprise"? <FormPro/> :null)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
