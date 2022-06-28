import React, { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
} from "framer-motion";
import zoneStyles from "../styles/ZonesElement.module.css";

export default function ZoneBourgogne() {
  return (
    <AnimateSharedLayout>
      <motion.ul className={zoneStyles.listDepartementsB} layout>
        {departements.map((departement, index) => (
          <Item departement={departement} key={index} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item({ departement }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className={zoneStyles.departementContainer}>
      <motion.li
        className={zoneStyles.listDepartements}
        layout
        onClick={toggleOpen}
      >
        <motion.div className={zoneStyles.layoutDepartement} layout>
          {departement.region} ({departement.numero})
        </motion.div>
        <motion.div layout />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={zoneStyles.listCities}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {departement.city.map((city, index) => (
                <motion.p className={zoneStyles.city} key={index}>
                  <Link href={city.slug}>
                    <strong>{city.name}</strong>
                  </Link>
                </motion.p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
    </div>
  );
}

const departements = [
  {
    region: "Saône-et-Loire",
    numero: 71,
    city: [
      { name:"Autun", slug: "autun" },
      { name:"Blanzy", slug: "blanzy" },
      { name:"Bourbon-Lancy", slug: "bourbon-lancy" },
      { name:"Branges", slug: "branges" },
      { name:"Buxy", slug: "buxy" },
      { name:"Chagny", slug: "chagny" },
      { name:"Chalon-sur-Saône", slug: "chalon-sur-saone" },
      { name:"Champforgeuil", slug: "champforgeuil" },
      { name:"Charolles", slug: "charolles" },
      { name:"Charnay-lès-Mâcon", slug: "charnay-les-macon" },
      { name:"Châtenoy-le-Royal", slug: "chatenoy-le-royal" },
      { name:"Chauffailles", slug: "chauffailles" },
      { name:"Ciry-le-Noble", slug: "ciry-le-noble" },
      { name:"Cluny", slug: "cluny" },
      { name:"Crêches-sur-Saône", slug: "creches-sur-saone" },
      { name:"Crissey", slug: "crissey" },
      { name:"Cuiseaux", slug: "cuiseaux" },
      { name:"Digoin", slug: "digoin" },
      { name:"Épinac", slug: "epinac" },
      { name:"Gergy", slug: "gergy" },
      { name:"Givry", slug: "givry" },
      { name:"Gueugnon", slug: "gueugnon" },
      { name:"Hurigny", slug: "hurigny" },
      { name:"La Chapelle-de-Guinchay", slug: "la-chapelle-de-guinchay" },
      { name:"Breuil", slug: "le-breuil" },
      { name:"Creusot", slug: "le-creusot" },
      { name:"Louhans", slug: "louhans" },
      { name:"Lux", slug: "lux" },
      { name:"Mâcon", slug: "macon" },
      { name:"Montceau-les-Mines", slug: "montceau-les-mines" },
      { name:"Montchanin", slug: "montchanin" },
      { name:"Ouroux-sur-Saône", slug: "ouroux-sur-saone" },
      { name:"Paray-le-Monial", slug: "paray-le-monial" },
      { name:"Pierre-de-Bresse", slug: "pierre-de-bresse" },
      { name:"Romanèche-Thorins", slug: "romaneche-thorins" },
      { name:"Saint-Germain-du-Plain", slug: "saint-germain-du-plain" },
      { name:"Saint-Marcel", slug: "saint-marcel" },
      { name:"Saint-Rémy", slug: "saint-remy" },
      { name:"Saint-Vallier", slug: "saint-vallier" },
      { name:"Sancé", slug: "sance" },
      { name:"Sanvignes-les-Mines", slug: "sanvignes-les-mines" },
      { name:"Sennecey-le-Grand", slug: "sennecey-le-grand" },
      { name:"Sornay", slug: "sornay" },
      { name:"Torcy", slug: "torcy" },
      { name:"Tournus", slug: "tournus" },
      { name:"Varennes-le-Grand", slug: "varennes-le-grand" },
    ],
  },
  {
    region: "Jura",
    numero: 39,
    city: [
      { name:"Arbois", slug: "arbois" },
      { name:"Authume", slug: "authume" },
      { name:"Bletterans", slug: "bletterans" },
      { name:"Champagnole", slug: "champagnole" },
      { name:"Dole", slug: "dole" },
      { name:"Lons-le-Saunier", slug: "lons-le-saunier" },
      { name:"Moirans-en-Montagne", slug: "moirans-en-montagne" },
      { name:"Mont-sous-Vaudrey", slug: "mont-sous-vaudrey" },
      { name:"Morez", slug: "morez" },
      { name:"Poligny", slug: "poligny" },
      { name:"Mont-sous-Vaudrey", slug: "mont-sous-vaudrey" },
      { name:"Saint-Amour", slug: "saint-amour" },
      { name:"Saint-Claude", slug: "saint-claude" },
      { name:"Saint-Laurent-en-Grandvaux", slug: "saint-laurent-en-grandvaux" },
      { name:"Saint-Lupicin", slug: "saint-lupicin" },
      { name:"Tavaux", slug: "tavaux" },
    ],
  },
  {
    region: "Doubs",
    numero: 25,
    city: [
      { name:"Audincourt", slug: "audincourt" },
      { name:"Baume-les-Dames", slug: "baume-les-dames" },
      { name:"Bavans", slug: "bavans" },
      { name: "Besançon", slug: "besançon" },
      { name:"Bethoncourt", slug: "bethoncourt" },
      { name:"Frasne", slug: "frasne" },
      { name:"Grand-Charmont", slug: "grand-charmont" },
      { name:"Maîche", slug: "maîche" },
      { name:"Mandeure", slug: "mandeure" },
      { name:"Montbéliard", slug: "montbéliard" },
      { name:"Morteau", slug: "morteau" },
      { name:"Ornans", slug: "ornans" },
      { name:"Pontarlier", slug: "pontarlier" },
      { name:"Pont-de-Roide-Vermondans", slug: "pont-de-roide-vermondans" },
      { name:"Saint-Vit", slug: "saint-vit" },
      { name:"Seloncourt", slug: "seloncourt" },
      { name:"Sochaux", slug: "sochaux" },
      { name:"Valdahon", slug: "valdahon" },
      { name:"Valentigney", slug: "valentigney" },
      { name:"Villers-le-Lac", slug: "villers-le-Lac" }, 
    ],
  },
];
