import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react-web';
import toggleAnimation from '../../public/Icons/SVG/wash-your-hands.json';
import toggleAnimation1 from '../../public/Icons/SVG/gel.json';
import toggleAnimation2 from '../../public/Icons/SVG/mask.json';
import toggleAnimation3 from '../../public/Icons/SVG/social-distancing.json';
import Covid  from "../../public/img/covid.png";
import modalStyles from '../../styles/Modal.module.css';

const Modal = () => {
  const [isShown, setIsShown] = useState(false);

  const showModal = () => {
    setIsShown(true);
  };

  const closeModal = () => {
    setIsShown(false);
  };

  useEffect(() => {
    if (!sessionStorage.popupModal) {
      const timer = setTimeout(() => {
        setIsShown(true);
        sessionStorage.popupModal = 1;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);


  return isShown ? (
    <div className={modalStyles.modalOverlay}>
    <div className={modalStyles.modal} id="channelModal">
      <div className={modalStyles.modalDialog} role="document">
        <div className={modalStyles.modalContent}>
          <div className={modalStyles.modalHeader} onClick={closeModal}>
            <button type="button" className={modalStyles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true" onClick={closeModal}>&times;</span>
            </button>
          </div>
        <div className={modalStyles.logoModal}>
          <img src={ Covid } className={modalStyles.logoCovid} alt="logo coronavirus"/>
        </div>
        <p className={modalStyles.modalContent}>
        Durant la période de crise sanitaire, l'equipe de <span>RedFlower</span> assure ses services dans le respect des règles sanitaires et des gestes barrières. 
        </p>
        <div className={modalStyles.covidContent}>
          <div className={modalStyles.animation1}>
            <Lottie
                direction={1}
                height={80}
                options={{
                  animationData: toggleAnimation
                }}
            />
          </div>
          <div className={modalStyles.animation2}>
            <Lottie
                direction={1}
                options={{
                  animationData: toggleAnimation1
                }}
            />
          </div>
          
        </div>
        <div className={modalStyles.covidContent}>
        <div className={modalStyles.animation3}>
          <Lottie
                direction={1}
                options={{
                  animationData: toggleAnimation2
                }}
            />
            </div>
            <div className={modalStyles.animation4}>
            <Lottie
                direction={1}
                options={{
                  animationData: toggleAnimation3
                }}
            />
            </div>
        </div>
          </div>
        </div>
      </div>
      </div>
  ) : null;
};

export default Modal;