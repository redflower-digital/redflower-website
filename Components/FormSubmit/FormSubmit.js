import React from "react";
import ReactDOM from "react-dom";
import Lottie from "lottie-react-web";
import toggleSpinner from "../../public/Icons/SVG/spinner.json";
import toggleValidation from "../../public/Icons/SVG/validation.json";
import toggleError from "../../public/Icons/SVG/error.json";
import submitStyles from '../../styles/FormSubmit.module.css';

const FormSubmit = ({ isShowing, hide, formSubmit, formSubmition, error }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={submitStyles.modalOverlaySubmit} />
          <div
            className={submitStyles.modalWrapperSubmit}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={submitStyles.modalSubmit}>
              <div className={submitStyles.modalHeaderSubmit}>
                <button
                  type="button"
                  className={submitStyles.modalCloseButtonSubmit}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide && formSubmition}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {formSubmit ? 
                <div className={submitStyles.submitContentSubmit}>
                  <div className={submitStyles.animationSubmitSubmit}>
                    <Lottie
                      direction={1}
                      height={80}
                      options={{
                        animationData: toggleValidation,
                        loop: false
                      }}
                    />
                  </div>
                  <h4 className={submitStyles.modalContentSubmit}>
                    Votre message a bien été envoyé!
                  </h4>
                </div>
               : 
                <div className={submitStyles.submitContentSubmit}>
                  <div className={submitStyles.animationSubmitSubmit}>
                    <Lottie
                      direction={1}
                      height={80}
                      options={{
                        animationData: error ? toggleError :toggleSpinner,
                        loop: toggleSpinner ? true : false
                      }}
                    />
                  </div>
                  {
                      error ?
                        <h4 className={submitStyles.modalContentSubmit}>Une erreur est survenu, veuillez réesayer!</h4>
                    :
                        <h4 className={submitStyles.modalContentSubmit}>Veuillez patientez...</h4>
                    }
                </div>
              }
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default FormSubmit;
