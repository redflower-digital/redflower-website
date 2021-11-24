import React from 'react';
import interventionsStyles from "../styles/Interventions.module.css";
import image1 from "../public/img/inter-1-1.jpg";
import image2 from "../public/img/inter-1-2.jpg";
import image3 from "../public/img/inter-1-3.jpg";
import image4 from "../public/img/inter-2-1.jpg";
import image5 from "../public/img/inter-2-2.jpg";
import image6 from "../public/img/inter-2-3.jpg";
import image7 from "../public/img/inter-3-1.jpg";
import image8 from "../public/img/inter-3-2.jpg";
import image9 from "../public/img/inter-3-3.jpg";
import image10 from "../public/img/inter-4-1.jpg";
import image11 from "../public/img/inter-4-2.jpg";
import image12 from "../public/img/inter-4-3.jpg";
import image13 from "../public/img/inter-5-1.jpg";
import image14 from "../public/img/inter-5-2.jpg";
import image15 from "../public/img/inter-5-3.jpg";
import image16 from "../public/img/inter-6-1.jpg";
import image17 from "../public/img/inter-6-2.jpg";
import image18 from "../public/img/inter-6-3.jpg";
import image19 from "../public/img/inter-7-1.jpg";
import image20 from "../public/img/inter-7-2.jpg";
import image21 from "../public/img/inter-7-3.jpg";
import image22 from "../public/img/inter-8-1.jpg";
import image23 from "../public/img/inter-8-2.jpg";
import image24 from "../public/img/inter-8-3.jpg";
import image25 from "../public/img/inter-9-1.jpg";
import image26 from "../public/img/inter-9-2.jpg";
import image27 from "../public/img/inter-9-3.jpg";
import image28 from "../public/img/inter-10-1.jpg";
import image29 from "../public/img/inter-10-2.jpg";
import image30 from "../public/img/inter-10-3.jpg";


function Interventions() {
    return (
        <div className={interventionsStyles.interventions}>
            <div className={interventionsStyles.interventionsElementHeader}>
                <h3 className={interventionsStyles.elementTitle}>Nos interventions</h3>
            </div>
            <p className={interventionsStyles.elementText}>Découvrez et consultez la collection de photos avant/après prestation, afin me mieux apprécier notre qualité de travail.</p>
            <h3 className={interventionsStyles.interventionsCategories}>Appartement de type F5 à Sainte-Foy-les-Lyon (69) :</h3>
            <p className={interventionsStyles.elementText}>Nos équipes sont intervenues de 6h30 du matin à 17h00.<br/>30 m3 de déchets triés sont partis au recyclage en déchèterie et 20m3 de mobilier et objets ont pu être revalorisés par l’intermédiaire de notre réseau, ce qui est un excellent ratio.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image1}
                className={interventionsStyles.image}
                alt="intervention sainte-foy-les-lyon 1"
                />
                <img
                src={image2}
                className={interventionsStyles.image}
                alt="intervention sainte-foy-les-lyon 2"
                />
                <img
                src={image3}
                className={interventionsStyles.image}
                alt="intervention sainte-foy-les-lyon 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Maison de 400m² avec sous-sol et grenier dans la loire (42) :</h3>
            <p className={interventionsStyles.elementText}>Une grosse équipe a été mobilisée pour la réalisation de ce chantier de 3 jours.<br/>Nous avons demandé une dépose de bennes avec rotation, au total nous comptons 4 bennes de déchets soit 120 m3, ainsi que 3 bennes de ferraille revalorisée..</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image4}
                className={interventionsStyles.image}
                alt="intervention dans la loire 1"
                />
                <img
                src={image5}
                className={interventionsStyles.image}
                alt="intervention dans la loire 2"
                />
                <img
                src={image6}
                className={interventionsStyles.image}
                alt="intervention dans la loire 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Maison de 250m² à Saint-Andéol-le-Château (69) :</h3>
            <p className={interventionsStyles.elementText}>Outre le débarras de l’intégralité du bien, y compris les aménagements extérieurs, la revalorisation du mobilier et des objets a été conséquente pour cette intervention.<br/>La plupart des meubles est partie en dépôt vente, ce qui a fait considérablement baisser la facture du client. Les livres ont également été donnés à des associations locales.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image7}
                className={interventionsStyles.image}
                alt="intervention à Saint-Andéol-le-Château 1"
                />
                <img
                src={image8}
                className={interventionsStyles.image}
                alt="intervention à Saint-Andéol-le-Château 2"
                />
                <img
                src={image9}
                className={interventionsStyles.image}
                alt="intervention à Saint-Andéol-le-Château 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Maison d’environ 300m² en Savoie, à Saint-Jean-de-Couz (73) :</h3>
            <p className={interventionsStyles.elementText}>La maison devait être entièrement vidée dans des délais très courts.<br/>Nous avons évacué tous les objets, le mobilier, les encombrants et les déchets, du grenier au sous-sol.<br/>Le tri a été réalisé sur place en séparant le bois, le carton, le métal, le verre et les déchets de tous types. Sur cette intervention, nous nous sommes servis de 3 camions simultanément, deux en rotation pour la déchetterie et un pour la récupération du mobilier.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image10}
                className={interventionsStyles.image}
                alt="intervention à Saint-Jean-de-Couz 1"
                />
                <img
                src={image11}
                className={interventionsStyles.image}
                alt="intervention à Saint-Jean-de-Couz 2"
                />
                <img
                src={image12}
                className={interventionsStyles.image}
                alt="intervention à Saint-Jean-de-Couz 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Appartement de 100m² + cave et balcon à Villeurbanne (69) :</h3>
            <p className={interventionsStyles.elementText}>Une équipe de 5 personnes était sur le chantier pour effectuer le tri et la mise en déchetterie. Les livres et les vêtements ont été donnés à des associations, le mobilier est quant à lui parti en dépôt vente.<br/>Il n’était pas simple de stationner, nous avons donc déposé une demande auprès de l’OTEP, service de la mairie, pour bloquer des places de stationnement et intervenir plus facilement sur place.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image13}
                className={interventionsStyles.image}
                alt="intervention à Villeurbanne 1"
                />
                <img
                src={image14}
                className={interventionsStyles.image}
                alt="intervention à Villeurbanne 2"
                />
                <img
                src={image15}
                className={interventionsStyles.image}
                alt="intervention à Villeurbanne 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Grange à Cerzat, en Haute-Loire (43) :</h3>
            <p className={interventionsStyles.elementText}>Débarras d’une grange très encombrée de divers outils et machines, avec un grand amoncellement de copeaux de bois. Nous avons effectué ce débarras au mois de juillet, alors que le département était en alerte canicule, ce qui nous a poussé à nous adapter pour terminer le travail efficacement.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image16}
                className={interventionsStyles.image}
                alt="intervention Grange à Cerzat 1"
                />
                <img
                src={image17}
                className={interventionsStyles.image}
                alt="intervention Grange à Cerzat 2"
                />
                <img
                src={image18}
                className={interventionsStyles.image}
                alt="intervention Grange à Cerzat 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Maison de 300m² soumis au syndrome de Diogène avec nettoyage à Lyon (74) :</h3>
            <p className={interventionsStyles.elementText}>Bien comprenant également un très grand grenier sous pente. Nous sommes intervenus sur 2 jours consécutifs avec une équipe de 5 personnes au vu de l’ampleur du chantier.<br/>Un tri minutieux des déchets a été effectué, et tous les vêtements de cette adresse ont été triés, sélectionnés et donnés à des associations.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image19}
                className={interventionsStyles.image}
                alt="intervention à Gaillard, en Haute-Savoie 1"
                />
                <img
                src={image20}
                className={interventionsStyles.image}
                alt="intervention à Gaillard, en Haute-Savoie 2"
                />
                <img
                src={image21}
                className={interventionsStyles.image}
                alt="intervention à Gaillard, en Haute-Savoie 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Appartement soumis au syndrome de Diogène avec nettoyage à Lyon (69) :</h3>
            <p className={interventionsStyles.elementText}>L’appartement de 50m² était rempli de déchets et objets divers, Nous avons évacué plus de 38m3 d’encombrants, suivie d’une prestation de ménage qui a duré 5 heures à 4 personnes.<br/>L’appartement en est ressorti propre et habitable sans souci.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image22}
                className={interventionsStyles.image}
                alt="intervention soumis au syndrome de Diogène avec nettoyage à Lyon 1"
                />
                <img
                src={image23}
                className={interventionsStyles.image}
                alt="intervention soumis au syndrome de Diogène avec nettoyage à Lyon 2"
                />
                <img
                src={image24}
                className={interventionsStyles.image}
                alt="intervention soumis au syndrome de Diogène avec nettoyage à Lyon 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Appartement de 60m² avec cave et garage à Thoiry (01) (avec nettoyage complet) :</h3>
            <p className={interventionsStyles.elementText}>La personne à qui appaertenait le bien était atteinte d’accumulation compulsive.<br/>Enlèvement de 80m3 d’encombrants et de déchets réalisé en 2 jours, suivi d’un nettoyage complet.<br/>Une fois notre intervention terminée, l’appartement était prêt à être mis en vente.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image25}
                className={interventionsStyles.image}
                alt="intervention appartement de 60m² avec cave et garage à Thoiry 1"
                />
                <img
                src={image26}
                className={interventionsStyles.image}
                alt="intervention appartement de 60m² avec cave et garage à Thoiry 2"
                />
                <img
                src={image27}
                className={interventionsStyles.image}
                alt="intervention appartement de 60m² avec cave et garage à Thoiry 3"
                />
            </div>
            <h3 className={interventionsStyles.interventionsCategories}>Maison avec enlèvement de 220m3 d’encombrants (syndrome de Diogène) à Annonay, en Ardèche (07) :</h3>
            <p className={interventionsStyles.elementText}>Débarras d’une maison à Annonay en Ardèche d’une surface de 320m² en comptant le garage et la cave.<br/>L’intervention a duré 3 jours et demi pour un enlèvement de 220m3 d’encombrants.</p>
            <div className={interventionsStyles.illustration}>
                <img
                src={image28}
                className={interventionsStyles.image}
                alt="intervention de 220m3 d’encombrants (syndrome de Diogène) 1"
                />
                <img
                src={image29}
                className={interventionsStyles.image}
                alt="intervention de 220m3 d’encombrants (syndrome de Diogène) 2"
                />
                <img
                src={image30}
                className={interventionsStyles.image}
                alt="intervention de 220m3 d’encombrants (syndrome de Diogène) 3"
                />
            </div>
        </div>
    )
}

export default Interventions
