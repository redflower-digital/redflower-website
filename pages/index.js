import React from "react";
import Home from '../Components/Home'
import Head from "next/head";


export default function Index(props) {

  const addJsonLd = 
      `
      {
        "@context" : "http://schema.org",
        "@type" : "LocalBusiness",
        "name" : "Redflower débarras",
        "image" : "https://www.redflower-debarras.fr/_next/static/images/logo-redflower-11e2cdbf4e0750b0c9c5da44067e149c.png",
        "telephone" : "06 72 32 85 19",
        "email" : "redflowerdebarras@gmail.com",
        "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "36 Route de Paris",
          "addressLocality" : "Charbonnières-les-Bains",
          "addressRegion" : "Rhône",
          "addressCountry" : "France",
          "postalCode" : "69260"
        },
        "url" : "http://www.redflower-debarras.fr/",
        "aggregateRating" : {
          "@type" : "AggregateRating",
          "ratingValue" : "4,8",
          "ratingCount" : "35"
        }
      }
      `

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
          href="/favicon.ico"
          title="icone"
        />
        <meta property="og:title" content="Redflower débarras" />
        <meta
          property="og:description"
          content="Débarras appartement maison & Rachat de biens | devis gratuit"
        />
        <meta property="og:url" content="https://redflower-debarras.fr/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.placename" content="Lyon" />
        <meta name="msnbot" content="index,follow" />
        <meta name="ICBM" content="45.78498101131291, 4.7487209759413815" />
        <meta name="Geo.region" content="FR-69" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: addJsonLd }}
          key="item-jsonld"
        />
      </Head>
    );
  };
  
  Meta.defaultProps = {
    title:
      "Débarras appartement maison & Rachat de biens | devis gratuit",
    keywords:
      "débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne",
    description:
      "Débarras appartement ou maison  en Rhône-Alpes et Sud Bourgogne. Nous intervenons sur tout types de superficies et locaux.",
  };

  return (
    <>
    <Meta/>
    <Home />
    </>
  );
}
