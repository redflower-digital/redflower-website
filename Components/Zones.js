import React from 'react';
import mapFrance from "../public/img/map2.png";
import zoneStyles from '../styles/ZonesElement.module.css';

function Zones() {
    return (
        <div className={zoneStyles.zones}>
            <div className={zoneStyles.zonesElementHeader}>
                <h3 className={zoneStyles.elementTitle}>Zones d'intervention</h3>
            </div>
            <p className={zoneStyles.elementText}>Installés à <strong>Charbonnières-les-Bains</strong>, commune située dans la banlieue lyonnaise, nos secteurs d’intervention se trouvent dans un large périmètre autour de <strong>Lyon</strong>:</p>
            <div className={zoneStyles.departementsContainer}>
                <img src={ mapFrance } className={zoneStyles.mapFrance} alt="carte de france"/>
                <ul className={zoneStyles.listDepartements}>
                    <li>Rhône (69)</li>
                    <p className={zoneStyles.city}><strong>Anse, L'Arbresle, Belleville, Le Bois-d'Oingt, Brignais, Genas, Gleizé, Mornant, Lyon, Saint-Symphorien-d'Ozon, Tarare, Thizy-les-Bourgs, Vaugneray, Villefranche-sur-Saône.</strong></p>
                    <li>Ain (01)</li>
                    <p className={zoneStyles.city}><strong>Ambérieu-en-Bugey, Attignat, Bellegarde-sur-Valserine, Belley, Bourg-en-Bresse, Ceyzériat, Châtillon-sur-Chalaronne, Nantua, Gex, Hauteville-Lompnes, Lagnieu, Meximieux, Miribel, Oyonnax, Pont-d'Ain, Replonges, Saint-Étienne-du-Bois, Saint-Genis-Pouilly, Thoiry, Trévoux, Villars-les-Dombes, Vonnas.</strong></p>
                    <li>Isère (38)</li>
                    <p className={zoneStyles.city}><strong>Bièvre, Bourgoin-Jallieu, Chartreuse-Guiers, Charvieu-Chavagneux, Échirolles, Fontaine-Seyssinet, Fontaine-Vercors, Le Grésivaudan, L'Isle-d'Abeau, La Verpillière, La Tour-du-Pin, Le Grand-Lemps, Le Pont-de-Claix, Grenoble, Matheysine-Trièves, Meylan, Morestel, Oisans-Romanche, Roussillon, Saint-Martin-d'Hères, Tullins, Vienne, Voiron.</strong></p>
                    <li>Drôme (26)</li>
                    <p className={zoneStyles.city}><strong>Bourg-de-Péage, Crest, Dieulefit, Drôme des collines, Grignan, Le Tricastin, Loriol-sur-Drôme, Montélimar, Le Diois, Valence, Nyons, Romans-sur-Isère, Saint-Vallier, Tain-l'Hermitage, Vercors-Monts du Matin.</strong></p>
                    <li>Ardèche (07)</li>
                    <p className={zoneStyles.city}><strong>Annonay, Aubenas, Berg-Helvie, Bourg-Saint-Andéol, Guilherand-Granges, Haut-Eyrieux, Privas, Haut-Vivarais, Haute-Ardèche, La Voulte-sur-Rhône, Lamastre,  Largentière, Le Cheylard, Le Pouzin, Le Teil, Les Cévennes ardéchoises, Les Vans, Privas, Rhône-Eyrieux, Sarras, Thueyts, Tournon-sur-Rhône, Vallon-Pont-d'Arc.</strong></p>
                    <li>Savoie (73)</li>
                    <p className={zoneStyles.city}><strong>Aix-les-Bains, Albertville, Bourg-Saint-Maurice, Bugey savoyard, Chambéry, La Motte-Servolex, La Ravoire, Le Pont-de-Beauvoisin, Modane, Montmélian, Moûtiers, Saint-Alban-Leysse, Saint-Jean-de-Maurienne, Saint-Pierre-d'Albigny, Ugine.</strong></p>
                    <li>Haute-Savoie (74)</li>
                    <p className={zoneStyles.city}><strong>Annecy, Annemasse, Bonneville, Cluses, Evian-les-bains, Faverges-Seythenex, Gaillard, Le Mont-Blanc, La Roche-sur-foron, Rumilly, Saint-Julien-en-Genevois, Sallanches, Sciez, Seynod, Thonon-les-Bains.</strong></p>
                    <li>Loire (42)</li>
                    <p className={zoneStyles.city}><strong>Villars, Saint-Etienne, Saint-Priest-en-Jarez, Boën-sur-Lignon, Renaison, Charlieu, Le Coteau, Montbrison, Le Pillat, Firminy, Sorbiers, Feurs, Rive-de-Gier, Roanne, Saint-Just-Saint-Rambert, Andrézieux-Bouthéon, Saint-Chamond, La Talaudière, Saint-Jean-Bonnefonds,  Le Bessat, Tarentaise, Saint-Genest-Malifaux, Saint-Romain-les-Atheux, Planfoy, Chambles, Saint-Genest-Lerp, Roche-la-Molière, La Ricamarie.</strong></p>
                    <li>Haute-Loire (43)</li>
                    <p className={zoneStyles.city}><strong>Aurec-sur-Loire, Bas-en-Basset, Boutières, Brioude, Emblavez-et-Meygal, Gorges de l'Allier-Gévaudan, Le Puy-en-Velay, Les Deux Rivières et Vallées, Mézenc, Monistrol-sur-Loire, Pays de Lafayette,Plateau du Haut-Velay granitique, Saint-Paulien, Sainte-Florine, Velay volcanique, Yssingeaux.</strong></p>
                </ul>
            </div>
            <p className={zoneStyles.elementTextCenter}>Ainsi que dans le sud de la Bourgogne Franche Comté :</p>
            <ul className={zoneStyles.listDepartementsB}>
                <li>Saône-et-Loire (71)</li>
                <p className={zoneStyles.city2}><strong>Autun, Blanzy, Chagny, Chalon-sur-Saône, Charolles, Chauffailles, Cluny, Cuiseaux, Digoin, Gergy, Givry, Gueugnon, Hurigny, La Chapelle-de-Guinchay, Le Creusot, Louhans, Mâcon, Montceau-les-Mines, Ouroux-sur-Saône, Paray-le-Monial, Pierre-de-Bresse, Saint-Rémy, Saint-Vallier, Tournus.</strong></p>
                <li>Jura (39)</li>
                <p className={zoneStyles.city2}><strong>Arbois, Authume, Bletterans, Champagnole, Dole, Lons-le-Saunier, Moirans-en-Montagne, Mont-sous-Vaudrey, Morez, Poligny, Mont-sous-Vaudrey, Saint-Amour, Saint-Claude, Saint-Laurent-en-Grandvaux, Saint-Lupicin, Tavaux.</strong></p>
                <li>Doubs (25)</li>
                <p className={zoneStyles.city2}><strong>Audincourt, Baume-les-Dames, Bavans, Besançon, Bethoncourt, Frasne, Maîche, Montbéliard, Morteau, Ornans, Pontarlier, Saint-Vit, Valdahon, Valentigney.</strong></p>
            </ul>
        </div>
    )
}

export default Zones
