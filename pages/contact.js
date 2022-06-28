import React, { useState } from 'react';
import Head from "next/head";
import FormPart from '../Components/FormPart';
import FormPro from '../Components/FormPro';
import {Phone} from "../public/Icons/Phone";
import contactStyles from '../styles/Contact.module.css';

function Contact() {
    const [formType, setFormType] = useState("particulier");
    const handleChange =(e) => {
        setFormType(e.target.id);
  }

  const Meta = ({ title, keywords, description }) => {
    return (
      <Head>
        <title>{title}</title>
        <meta httpEquiv="content-language" content="fr" />
        <meta name="language" content="fr" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/_next/static/favicon.ico"
          title="icone"
        />
        <meta property="og:title" content="Redflower débarras" />
        <meta
          property="og:description"
          content="Votre entreprise de débarras en Auvergne-Rhône-Alpes"
        />
        <meta property="og:url" content="https://redflower-debarras.fr/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.placename" content="Lyon" />
        <meta name="msnbot" content="index,follow" />
        <meta name="ICBM" content="45.78498101131291, 4.7487209759413815" />
        <meta name="Geo.region" content="FR-69" />
      </Head>
    );
  };
  
  Meta.defaultProps = {
    title:
      "REDFLOWER DEBARRAS Lyon | Contactez-nous",
    keywords:
      "débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne",
    description:
      "Vous souhaitez obtenir un devis ou plus d'informations, contactez nous via le formulaire ci-joint ou par téléphone",
  };


    return (
        <div className={contactStyles.contact}>
            <Meta/>
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
