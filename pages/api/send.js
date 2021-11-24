const sgMail = require('@sendgrid/mail');

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '50mb',
      },
    },
  }

export default async function (req, res) {
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const data = req.body;


const msg = {
  to: process.env.email_destinataire,
  from: process.env.email,
  subject: `${data.status} viens de soumettre une demande de contact`,
  html: data.status === 'Une entreprise' ? 
        ` <h1 style="color: #ff0000">PERSONNE A CONTACTER :</h1>
          <h2>IDENTITE : ${data.name} ${data.firstName}</h2>
          <h2>NUMERO DE TELEPHONE : ${data.phoneNumber}</h2>
          <h2>EMAIL : ${data.email}</h2>
          <h2>MESSAGE : ${data.message}</h2>
          </br>
          </br>
          </br>
          <h1 style="color: #ff0000">SOCIETE :</h1>
          <h2>RAISON SOCIALE : ${data.societe}</h2>
          <h2>ADRESSE : ${data.adressSociete}</h2>
          <h2>CODE POSTAL : ${data.cpSociete}</h2>
          <h2>VILLE : ${data.citySociete}</h2>
          </br>
          </br>
          </br>
          <h1 style="color: #ff0000">INFORMATIONS DU BIEN:</h1>
          <h2>ADRESSE : ${data.adress}</h2>
          <h2>CODE POSTAL : ${data.cp}</h2>
          <h2>VILLE : ${data.city}</h2>
          <h2>SUPERFICIE : ${data.superficie}</h2>
          <h2>ETAGE : ${data.floor}</h2>
          `

          :

          `<h1 style="color: #ff0000">PERSONNE A CONTACTER :</h1>
          <h2>IDENTITE : ${data.name} ${data.firstname}</h2>
          <h2>NUMERO DE TELEPHONE : ${data.phoneNumber}</h2>
          <h2>EMAIL : ${data.email}</h2>
          <h2>MESSAGE : ${data.message}</h2>
          </br>
          </br>
          </br>
          <h1 style="color: #ff0000">INFORMATIONS DU BIEN:</h1>
          <h2>TYPE : ${data.type}</h2>
          <h2>ADRESSE : ${data.adress}</h2>
          <h2>CODE POSTAL : ${data.cp}</h2>
          <h2>VILLE : ${data.city}</h2>
          <h2>SUPERFICIE : ${data.superficie}</h2>
          <h2>ETAGE : ${data.floor}</h2>
          `
          
          
          ,
          ...( data.attachment1 || data.attachment2 || data.attachment3 ?
          {attachments: 
          [ 
            {
              content: data.attachment1 ? `${data.piece1}` : '',
              type : "image/jpg",
               filename: `Pièce jointe 1`,
               disposition: 'attachment',
            },
            {
              content: data.attachment2 ? `${data.piece2}` : '',
              type : "image/jpg",
               filename: `Pièce jointe 2`,
               disposition: 'attachment',
            },
            {
              content: data.attachment3 ? `${data.piece3}` : '',
              type : "image/jpg",
               filename: `Pièce jointe 3`,
               disposition: 'attachment',
            },]}: null)
  
};

  return new Promise((resolve,reject)=>{

sgMail
  .send(msg)
  .then(response => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(response))
    resolve();
  })
  .catch(error => {
    res.json(error);
    res.status(405).end();
    return resolve();});
  })
}