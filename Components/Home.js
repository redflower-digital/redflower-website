import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react-web";
import toggleAnimation from "../public/Icons/SVG/swipe2.json";
import Advantage from "./Advantage";
import homeStyles from "../styles/Home.module.css";
import Link from 'next/link';
import HSS from '../styles/HorizontalScrollServices.module.css';
import {AnimatePresence, motion} from 'framer-motion'
import HSSP from '../styles/HorizontalScrollSpecial.module.css';

const image2 = "/img/histoire-sans-fin.jpg";
const image3 = "/img/chineur-caladois.png";
const image4 = "/img/altitude-location.webp";
const serviceCard1 = "/img/Devis.jpg";
const serviceCard2 = "/img/map.png";
const serviceCard3 = "/img/camions.png";
const special1 = "/img/canape.png";
const special2 = "/img/valorisation1.jpg";
const special3 = "/img/encombrants.png";
const special4 = "/img/cartons.png";
const image1 = "/img/reloc1.jpg";
const solidarite = "/img/solidarité.jpg";
const ecolo = "/img/environnement.jpg";

export default function Home() {
  const [serviceWidth, setServiceWidth] = useState(0);
  const [scrollingAnimation, setScrollingAnimation] = useState(true);
  const [specialWidth, setSpecialWidth] = useState(true);

  const serviceCarousel = useRef();
  const specialCarousel = useRef();

  const size = useWindowSize();

  function useWindowSize() {
   
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    function resolveSwipper() {
      return new Promise(resolve => {
        setTimeout(() => {
          setServiceWidth(serviceCarousel.current.scrollWidth - serviceCarousel.current.offsetWidth + 20);
          setSpecialWidth(
            specialCarousel.current.scrollWidth - specialCarousel.current.offsetWidth + 20
          );
        }, 300);
      });
    }
  
    useEffect(() => {
      resolveSwipper()
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []);
    return windowSize;
  }

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
          <div className={homeStyles.imageAcceuil}>
              <Image
              src={image1}
              layout="fill"
              objectFit="cover"
              alt="débarras en cours"
            />
          </div>
            <div className={homeStyles.textContainer}>
              <h1 className={homeStyles.presentation}>
                Votre partenaire
                <br />
                de débarras
                <br />
                en Auvergne-Rhône-Alpes
              </h1>
            </div>
          </div>
        </div>
        <div id={homeStyles.main}>
          <h1 className={homeStyles.presentation2}>
            Votre partenaire
            <br />
            de débarras en
            <br />
            Auvergne-Rhône-Alpes
          </h1>
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
          <span>RedFlower Debarras</span> a pour objectif d’organiser le <strong>débarras</strong> de
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
        <motion.div
          className={homeStyles.carousel}
          ref={serviceCarousel}
          whileTap={{ cursor: "grabbing" }}
        >
        <motion.div
            drag= "x"
            dragConstraints={{ right: 0, left: -serviceWidth }}
            className={homeStyles.presentationContainer} onScroll={size < 960 ? handleScroll : null}>
      
        <motion.div className={HSS.swipeCard}>
          <h3 className= {HSS.cardTitle}>
            Devis gratuit
          </h3>
          <p className={HSS.cardDescription} >
            Préparez au mieux votre débarras.
          </p>
          <div style={{ position: "absolute", width: "120%", height: "120%", zIndex: "0", filter: "brightness(65%)" }}>
            <Image
              alt="calcul sur une calculatrice"
              src={serviceCard1}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/services">
            <button className={HSS.cardButton}>En savoir plus</button>
          </Link>
        </motion.div>

        <motion.div className={HSS.swipeCard}>
          <h3 className= {HSS.cardTitle}>
            Secteur d'intervention
          </h3>
          <p className={HSS.cardDescription} >
            Découvrez notre zone d'intervention.
          </p>
          <div  className= {HSS.image2Secteur}>
            <Image
              alt="carte de france région auvergne-rhône-alpes en rouge"
              src={serviceCard2}
              layout="fill"
              objectFit="contain"
            />
          </div>
         <Link href="/services">
            <button className={HSS.cardButton}>En savoir plus</button>
          </Link>
        </motion.div>

        <motion.div className={HSS.swipeCard}>
          <h3 className= {HSS.cardTitle}>
            Nos véhicules
          </h3>
          <p className={HSS.cardDescription} >
            Une gamme de véhicules adaptés.
          </p>
          <div  className= {HSS.image2Vehicules}>
            <Image
              alt="carte de france région auvergne-rhône-alpes en rouge"
              src={serviceCard3}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/services">
            <button className={HSS.cardButton}>En savoir plus</button>
          </Link>
        </motion.div>
        </motion.div>
        </motion.div>
     
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
        <motion.div
          className={homeStyles.carousel}
          ref={specialCarousel}
          whileTap={{ cursor: "grabbing" }}
        >
        <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -specialWidth }}
            className={homeStyles.presentationContainer} onScroll={handleScroll}>
            <motion.div className={HSSP.swipeCard}>
          <h3 className= {HSSP.cardTitle}>
            Successions
          </h3>
          <p className={HSSP.cardDescription} >
            Bénéficiez de services et conseils expérimentés.
          </p>
          <div  className= {HSSP.image1Valorisation}>
            <Image
              alt="illustration card"
              src={special1}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/specialisations">
            <button className={HSSP.cardButton}>En savoir plus</button>
          </Link>
        </motion.div>
        <motion.div className={HSSP.swipeCard}>
          <h3 className= {HSSP.cardTitle}>
            Valorisation de vos biens
          </h3>
          <p className={HSSP.cardDescription} >
            Estimations par des professionnels de l'antiquité et de la brocante.
          </p>
          <div  className= {HSSP.cardPresentationBgSuccession}>
            <Image
              alt="tourne disque ancien"
              src={special2}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/specialisations">
            <button className={HSSP.cardButton}>En savoir plus</button>
          </Link>
        </motion.div>
        
        <motion.div className={HSSP.swipeCard}>
          <h3 className= {HSSP.cardTitle}>
            Syndrome de Diogène
          </h3>
          <p className={HSSP.cardDescriptionDiogene} >
            Interventions liées au syndrome de Diogène.
          </p>
          <div  className= {HSSP.containerDiogene}>
            <div className= {HSSP.specialDiogene}>
              <Image              
                alt="affaires empilées"
                src={special3}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className= {HSSP.secondImage}>
            <Image
              alt="cartons empilés"
              src={special4}
              layout="fill"
              objectFit="contain"
            />
            </div>
          </div>
          <Link href="/specialisations">
            <button className={HSSP.cardButton}>En savoir plus</button>
          </Link>
        </motion.div>
            </motion.div>
            </motion.div>
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
            <div  className= {homeStyles.cardPresentationSolidarite}>
            <Image
              alt="solidarité"
              src={solidarite}
              layout="fill"
              objectFit="cover"
            />
          </div>
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
            <div  className= {homeStyles.cardPresentationEco}>
            <Image
              alt="écologie"
              src={ecolo}
              layout="fill"
              objectFit="cover"
            />
          </div>
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
            <div className={homeStyles.logoPartner}>
              <Image
              src={image2}
              layout="fill"
              objectFit="contain"
              alt="logo histoire sans fin"
            />
          </div>
          </a>
          <a href="https://fr-fr.facebook.com/JohnAndMarine/" target="blank">
          <div className={homeStyles.logoPartner}>
              <Image
              src={image3}
              layout="fill"
              objectFit="contain"
              alt="logo chineur caladois"
            />
          </div>
          </a>
          <a href="https://www.altitude-location.fr/" target="blank">
          <div className={homeStyles.logoPartnerAltitude}>
              <Image
              src={image4}
              layout="fill"
              objectFit="contain"
              alt="logo altitude location"
            />
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}
