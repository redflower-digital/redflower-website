import React, { useState } from "react";
import image1 from "../public/img/reloc1.jpg";
import HorizontalScrollServices from "./HorizontalScrollServices.js";
import solidarite from "../public/img/solidarité.jpg";
import ecolo from "../public/img/environnement.jpg";
import Lottie from "lottie-react-web";
import toggleAnimation from "../public/Icons/SVG/swipe2.json";
import image2 from "../public/img/histoire-sans-fin.jpg";
import image3 from "../public/img/chineur-caladois.png";
import image4 from "../public/img/altitude-location.webp";
import HorizontalScrollSpecial from "./HorizontalScrollSpecial";
import Advantage from "./Advantage";
import homeStyles from "../styles/Home.module.css";

export default function Home(props) {
  const [scrollingAnimation, setScrollingAnimation] = useState(true);

  const handleScroll = (event) => {
    if (scrollingAnimation) {
      setTimeout(() => {
        setScrollingAnimation(false);
      }, 500);
    }
  };

  return (
    <div className={homeStyles.home}>
      <div className={homeStyles.headerContainer}>
        <div className={homeStyles.homeHeader}>
          <div className={homeStyles.homeHeaderContainer}>
            <img
              src={image1}
              className={homeStyles.imageAcceuil}
              alt="déménagement en cours"
            />
            <div className={homeStyles.textContainer}>
              <h2 className={homeStyles.presentation}>
                Votre partenaire
                <br />
                de débarras
                <br />
                en Auvergne-Rhône-Alpes
              </h2>
            </div>
          </div>
        </div>
        <div id={homeStyles.main}>
          <h2 className={homeStyles.presentation2}>
            Votre partenaire
            <br />
            de débarras en
            <br />
            Auvergne-Rhône-Alpes
          </h2>
          <div className={homeStyles.dContener}>
            <div className={homeStyles.d1}></div>
            <div className={homeStyles.d2}></div>
            <div className={homeStyles.d3}></div>
            <div className={homeStyles.d4}></div>
            <div className={homeStyles.d5}></div>
            <div className={homeStyles.dTitle}></div>
          </div>
        </div>
      </div>
      <div className={homeStyles.homeBody}>
        <h2 className={homeStyles.introductionHome}>
          <span>RedFlower</span> a pour objectif d’organiser le <strong>débarras</strong> de
          votre bien commercial ou privé en toutes circonstances.
        </h2>
        <h2 className={homeStyles.introductionHomeLine}>
          Forts de plus de dix années d’expérience, nous vous accompagnons lors de
          l'<strong>enlèvement</strong> de vos objets sur tous types de superficies.
        </h2>
        <h3 className={homeStyles.titleSection1}>
          <span className={homeStyles.divider}></span>Nos services
        </h3>
        <p className={homeStyles.introduction}>
          <strong>Particuliers</strong> ou{" "}
          <strong>
            entreprises<span className={homeStyles.asterisque}>*</span>
          </strong>
          , nos équipes professionnelles et souriantes interviennent pour des
          missions de <strong>débarras</strong> dans les plus brefs délais.
        </p>
        <p className={homeStyles.asterisqueDescription}>
          <span className={homeStyles.asterisque}>*</span> TVA récupérable
        </p>
        <div className={homeStyles.presentationContainer} onScroll={handleScroll}>
          <HorizontalScrollServices />
        </div>
        <div className={homeStyles.animationHome}>
          <Lottie
            direction={-1}
            options={{
              animationData: scrollingAnimation ? toggleAnimation : null,
            }}
          />
        </div>
        <h3 className={homeStyles.titleSection1}>
          <span className={homeStyles.divider}></span>Nos spécialisations
        </h3>
        <p className={homeStyles.introduction}>
          La satisfaction que nous devons à nos clients étant une priorité
          permanente, nous proposons des services uniques, et des solutions
          adaptées ayant démontré leur efficacité durant nos années d'exercices.
        </p>
        <div className={homeStyles.presentationContainer} onScroll={handleScroll}>
          <HorizontalScrollSpecial />
        </div>
        <h3 className={homeStyles.titleSection3}>
          <span className={homeStyles.divider}></span>Les avantages
        </h3>
        <Advantage />
        <h3 className={homeStyles.titleSection2}>
          <span className={homeStyles.divider}></span>Entreprise solidaire et engagée
        </h3>
        <div className={homeStyles.solidarity}>
          <p className={homeStyles.introduction}>
            Lors de nos <strong>débarras</strong>, nous travaillons de concert avec des
            associations, des gestes simples tels que les dons nous permettent
            de soutenir l'action sociale et les plus démunis.
          </p>
          <div className={homeStyles.cardPresentationS}>
            <h3 className={homeStyles.cardTitle}>Solidarité</h3>
            <p className={homeStyles.cardDescription}>
              Participez à l'économie sociale et solidaire.
            </p>
            <img
              src={solidarite}
              className={homeStyles.cardPresentationSolidarite}
              alt="solidarité"
            />
            <a href="/engagements" className={homeStyles.cardLinkSolidarite}>
              <button className={homeStyles.cardButton}>En savoir plus</button>
            </a>
          </div>
        </div>
        <div className={homeStyles.ecology}>
          <p className={homeStyles.introduction}>
            Dans un monde où la consommation et la surconsommation vont de
            pair, nous accordons une grande place à l’aspect environnemental de
            notre activité. Nous nous employons à réaliser un tri détaillé de
            tous les déchets pour que chaque élément soit recyclé.
          </p>
          <div className={homeStyles.cardPresentationE}>
            <h3 className={homeStyles.cardTitle}>Environnement</h3>
            <p className={homeStyles.cardDescription}>
              Limitez votre empreinte écologique.
            </p>
            <img
              src={ecolo}
              className={homeStyles.cardPresentationEco}
              alt="solidarité"
            />
            <a href="/engagements" className={homeStyles.cardLink}>
              <button className={homeStyles.cardButton}>En savoir plus</button>
            </a>
          </div>
        </div>
        <h3 className={homeStyles.titleSection3}>
          <span className={homeStyles.divider}></span>Nos partenaires
        </h3>
        <div className={homeStyles.logoContainer1}>
          <a href="http://lhistoiresansfin-antiquites.fr/" target="blank">
            <img
              src={image2}
              className={homeStyles.logoPartner}
              alt="logo histoire sans fin"
            />
          </a>
          <a href="https://fr-fr.facebook.com/JohnAndMarine/" target="blank">
            <img
              src={image3}
              className={homeStyles.logoPartner}
              alt="logo chineur caladois"
            />
          </a>
          <a href="https://www.altitude-location.fr/" target="blank">
            <img
              src={image4}
              className={homeStyles.logoPartnerAltitude}
              alt="logo altitude location"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
