import React from "react";
import politiqueStyles from '../../styles/Politique.module.css';

const Politique = (({ isShownPolitique, closeModalPolitique }) =>  {
  return (isShownPolitique ? (
    <div className={politiqueStyles.modalOverlayPolitique}>
          <div
            className={politiqueStyles.modalWrapperPolitique}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={politiqueStyles.modalPolitique}>
            <button
              type="button-politique"
              className={politiqueStyles.modalCloseButtonPolitique}
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModalPolitique}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className={politiqueStyles.modalContentPolitique}>
              <div className={politiqueStyles.modalTextPolitique}>
                <h2 className={politiqueStyles.modalTitlePolitique}>Politique de confidentialité</h2>
                <h3 className={politiqueStyles.modalSectionPolitique}>Qui sommes-nous ?</h3>
                <p className={politiqueStyles.intro}>L’adresse de notre site Web est : http://www.redflower-debarras.fr.</p>
                <h3 className={politiqueStyles.modalSectionPolitique}>Utilisation des données personnelles collectées</h3>              
                <h4 className={politiqueStyles.modalSubsectionPolitique}>Commentaires</h4>
                <p>Quand vous laissez un commentaire sur notre site web, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l’agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.</p>
                <p>Une chaîne anonymisée créée à partir de votre adresse de messagerie (également appelée hash) peut être envoyée au service Gravatar pour vérifier si vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar sont disponibles ici : https://automattic.com/privacy/. Après validation de votre commentaire, votre photo de profil sera visible publiquement à coté de votre commentaire.</p>
                <h4 className={politiqueStyles.modalSubsectionPolitique}>Médias</h4>
                <p>Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et extraire des données de localisation depuis ces images.</p>
                <h4 className={politiqueStyles.modalSubsectionPolitique}>Formulaires de contact</h4>
                <p>Un formulaire de contact est mis à disposition sur la page de contact et sur la page d’accueil. Toute prise de contact est faite en toute confidentialité.</p>
                <h4 className={politiqueStyles.modalSubsectionPolitique}>Cookies</h4>
                <p>Si vous déposez un commentaire sur notre site, il vous sera proposé d’enregistrer votre nom, adresse de messagerie et site web dans des cookies. C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d’un an.</p>
                <p>Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.</p>
                <p>Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.</p>
                <p>En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.</p>
                <h4 className={politiqueStyles.modalSubsectionPolitique}>Contenu embarqué depuis d’autres sites</h4>
                <p>Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.</p>
                <p>Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.</p>
                <h4 className={politiqueStyles.modalSubsectionPolitique}>Statistiques et mesures d’audience</h4>
                <p>Les cookies peuvent être utilisés pour générer des statistiques et mesurer l’audience sur le site. Ces chiffres resteront confidentiels et aucune information personnelle n’en fait partie.</p>
                <h2 className={politiqueStyles.modalTitlePolitique}>Utilisation et transmission de vos données personnelles</h2>
                <p>Vos données personnelles sont stockées à titre informatif. Elles ne seront en aucun cas communiquées à des personnes ou des société tierces sans votre accord explicite.</p>
                <h2 className={politiqueStyles.modalTitlePolitique}>Durées de stockage de vos données</h2>
                <p>Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération.</p>
                <p>Pour les utilisateurs et utilisatrices qui s’enregistrent sur notre site (si cela est possible), nous stockons également les données personnelles indiquées dans leur profil. Tous les utilisateurs et utilisatrices peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur nom d’utilisateur·ice). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>
                <h2 className={politiqueStyles.modalTitlePolitique}>Les droits que vous avez sur vos données</h2>
                <p>Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.</p>
                <h2 className={politiqueStyles.modalTitlePolitique}>Transmission de vos données personnelles</h2>
                <p>Vos données personnelles ne sont en aucun cas transmises à des sociétés ou personnes tierces sans votre accord explicite.</p>
              </div>
              </div>
            </div>
          </div>
          </div>

  ) : null);
})

export default Politique;
