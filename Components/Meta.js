import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta http-equiv="content-language" content="fr"/>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta charSet='utf-8' />
      <link rel="shortcut icon" type="image/png" href="https://www.redflower-debarras.fr/favicon.png" title="icone"/>
      <meta https-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta property="og:title" content="Redflower débarras" />
      <meta property="og:description" content="Votre entreprise de débarras en Auvergne-Rhône-Alpes" />
      <meta property="og:url" content="https://redflower-debarras.fr/" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://www.redflower-debarras.fr/" title="Débarras maison, appartement gratuit à Lyon (69) Rhône-Alpes"/>
      <meta name="geo.placename" content="Lyon" />
      <meta name="msnbot" content="index,follow"/>
      <meta name="ICBM" content="45.78498101131291, 4.7487209759413815" />
      <meta name="Geo.region" content="FR-69" />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'REDFLOWER DEBARRAS Lyon Rhône-Alpes appartement, maison, locaux, gratuit',
  keywords: 'débarras, entreprise, appartement, maison, enlèvement, biens, gratuit, rachat, valorisation, diogène, syllogomanie, succession, maison, garage, professionnel, monte-meuble, déménagement, Lyon, 69, 42, saint-etienne, Rhône, Auvergne-Rhône-Alpes, bourgogne',
  description: 'Redflower débarras débarasse votre bien sur Lyon, Rhône-Alpes et Sud Bourgogne. Nous intervenons sur tout types de superficies et locaux: appartement, maison, local commercial, cave, grenier, grange, garage...',
}

export default Meta;
