import React, { useState } from "react";
import useFormSubmit from "./FormSubmit/UseFormSubmit";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Plus2 } from "../public/Icons/Plus2.js";
import FormSubmit from "./FormSubmit/FormSubmit.js";
import formProStyles from "../styles/Contact.module.css";

const fetch = require("node-fetch");

const useStyles = makeStyles((theme) => ({
  entreprise: {
    maxWidth: 450,
  },
  input: {
    maxWidth: 450,
  },
  inputA: {
    width: '80%',
    maxWidth: '400px'
},
  cp: {
    width: 90,
    marginRight: 15,
  },
  adress: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 400,
  },
  city: {
    width: "55%",
    maxWidth: 260,
  },
  floor: {
    width: 90,
    marginRight: 15,
  },
  superficie: {
    width: "55%",
    maxWidth: 200,
  },
  detail: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: 300,
  },
  typeContainer: {
    margin: "20px auto",
    fontWeight: 700,
  },
  adressInput: {
    display: 'flex',
    justifyContent:'center',
    },
  type: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    margin: "0 auto",
    marginTop: 50,
    padding: 10,
    background: "linear-gradient(45deg, #f88787 20%, #FF0000 95%)",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
    borderRadius: 10,
    border: "none",
    boxShadow: "rgb(192, 5, 5) 0px 2px 10px",
  },
}));

function FormPro() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [data, setData] = useState({
    status: "Une entreprise",
    societe: "",
    adressSociete: "",
    cpSociete: "",
    citySociete: "",
    name: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    adress: "",
    cp: "",
    city: "",
    floor: "",
    superficie: "",
    message: "",
    attachment1: "",
    attachment2: "",
    attachment3: "",
  });

  const handleChange1 = (event) => {
    const piece1 = event.target.files[0];
    let reader = new FileReader()
    setFile1(URL.createObjectURL(event.target.files[0]));
    reader.readAsDataURL(piece1)
    reader.onload = () => {
        const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
        setData(prevState => ({...prevState, attachment1: __dirname+reader.result}));
        setData(prevState => ({...prevState, piece1: base64String}));
    }
}

const handleChange2 = (event) => {
    const piece2 = event.target.files[0];
    let reader = new FileReader()
    setFile2(URL.createObjectURL(event.target.files[0]));
    reader.readAsDataURL(piece2)
    reader.onload = () => {
        const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
        setData(prevState => ({...prevState, attachment2: __dirname+reader.result}));
        setData(prevState => ({...prevState, piece2: base64String}));
    }
}

const handleChange3 = (event) => {
    const piece3 = event.target.files[0];
    let reader = new FileReader()
    setFile3(URL.createObjectURL(event.target.files[0]));
    reader.readAsDataURL(piece3)
    reader.onload = () => {
        const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '');
        setData(prevState => ({...prevState, attachment3: __dirname+reader.result}));
        setData(prevState => ({...prevState, piece3: base64String}));
    }
    console.log(event.target.files[0])
    console.log(data.piece3)
}

  const handleChangePhone = (e) => {
    setData((prevState) => ({
      ...prevState,
      phoneNumber: e.target.value
        .replace(/\D+/, "")
        .slice(0, 13)
        .replace(/(\d{2})(?=\d)/g, "$1 "),
    }));
  };

  const handleChangeEmail = (e) => {
    setData((prevState) => ({
      ...prevState,
      email: e.target.value.slice(0, 50),
    }));
  };

  const handleChangeCpSociete = (e) => {
    setData((prevState) => ({
      ...prevState,
      cpSociete: e.target.value.replace(/\D+/, "").slice(0, 5),
    }));
  };

  const handleChangeCp = (e) => {
    setData((prevState) => ({
      ...prevState,
      cp: e.target.value.replace(/\D+/, "").slice(0, 5),
    }));
  };

  const handleChangeFloor = (e) => {
    setData(prevState => ({...prevState, floor: e.target.value
        .replace(/\D+/, '')
        .slice(0, 2) }))};

  const handleChangeSuperficie = (e) => {
    setData((prevState) => ({
      ...prevState,
      superficie: e.target.value.replace(/\D+/, "").slice(0, 4),
    }));
  };

  const resetData = (e) => {
    setData({
      status: "Une entreprise",
      societe: "",
      adressSociete: "",
      cpSociete: "",
      citySociete: "",
      name: "",
      firstName: "",
      phoneNumber: "",
      email: "",
      adress: "",
      cp: "",
      city: "",
      floor: "",
      superficie: "",
      message: "",
      attachment1: "",
      attachment2: "",
      attachment3: "",
    });
    setFile1("");
    setFile2("");
    setFile3("");
  };

  const { isShowing, toggle } = useFormSubmit();
  const [isSubmit, setIsSubmit] = useState(true);
  const [submition, setSubmition] = useState(false);
  const [error, setError] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setSubmition(true);
    setIsSubmit(false);
    fetch("/api/send", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    })
      .then((res) => {
        res.status === 200;
        resetData();
        setIsSubmit(true);
      })
      .catch(() => {
        setError(true);
        console.log("Message not sent");
      });
  };
  const initialize = (e) => {
    setSubmition(false);
    setError(false);
  };

  const classes = useStyles();

  return (
    <div>
      <form id={formProStyles.contactForm} onSubmit={formSubmit}>
      <div className={formProStyles.formSection}>
        <div className={formProStyles.entreprise}>
          <TextField
            className={classes.entreprise}
            required
            id="outlined-basic"
            margin="dense"
            value={data.societe}
            name="societe"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                societe: e.target.value,
              }))
            }
            label="Raison sociale"
            variant="outlined"
          />
        </div>
        <div className={formProStyles.adresseInput}>
          <TextField className={classes.adressInput} id="outlined-multiline-flexible" multiline margin="dense" value={data.adressSociete} name="adresse-societe" onChange={e => setData(prevState => ({...prevState, adressSociete: e.target.value}))} label="Adresse" variant="outlined" />
        </div>
        <div className={classes.adress}>
          <TextField
            type="tel"
            className={classes.cp}
            required
            id="outlined-basic"
            margin="dense"
            value={data.cpSociete}
            name="cp-societe"
            onChange={handleChangeCpSociete}
            label="CP"
            variant="outlined"
          />
          <TextField
            className={classes.city}
            required
            id="outlined-basic"
            margin="dense"
            value={data.citySociete}
            name="city-societe"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                citySociete: e.target.value,
              }))
            }
            label="Ville"
            variant="outlined"
          />
        </div>
        </div>
        <p className={formProStyles.contactText}>
          Personne à contacter :
        </p>
        <div className={formProStyles.oneLine}>
          <div className={formProStyles.name}>
            <TextField
              className={classes.input}
              required
              id="outlined-basic"
              margin="dense"
              value={data.name}
              name="name"
              onChange={(e) =>
                setData((prevState) => ({ ...prevState, name: e.target.value }))
              }
              label="Nom"
              variant="outlined"
            />
          </div>
          <div className={formProStyles.firstname}>
            <TextField
              className={classes.input}
              required
              id="outlined-basic"
              margin="dense"
              value={data.firstName}
              name="firstName"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  firstName: e.target.value,
                }))
              }
              label="Prénom"
              variant="outlined"
            />
          </div>
        </div>
        <div className={formProStyles.oneLine}>
          <div className={formProStyles.phoneForm}>
            <TextField
              className={classes.input}
              type="tel"
              required
              id="outlined-basic"
              margin="dense"
              value={data.phoneNumber}
              name="phoneNumber"
              onChange={handleChangePhone}
              label="Téléphone"
              variant="outlined"
            />
          </div>
          <div className={formProStyles.email}>
            <TextField
              className={classes.input}
              type="email"
              id="outlined-basic"
              margin="dense"
              value={data.email}
              name="email"
              onChange={handleChangeEmail}
              required
              label="Adresse email"
              variant="outlined"
            />
          </div>
        </div>
        <p className={formProStyles.contactText}>Le bien :</p>
        <div className={formProStyles.formSection}>
          <div className={formProStyles.adresseInput}>
          <TextField className={classes.adressInput} id="outlined-multiline-flexible" multiline margin="dense" value={data.adress} name="adresse" onChange={e => setData(prevState => ({...prevState, adress: e.target.value}))} label="Adresse" variant="outlined" />
          </div>
          <div className={classes.adress}>
            <TextField
              className={classes.cp}
              type="tel"
              required
              id="outlined-basic"
              margin="dense"
              value={data.cp}
              name="cp"
              onChange={handleChangeCp}
              label="CP"
              variant="outlined"
            />
            <TextField
              className={classes.city}
              required
              id="outlined-basic"
              margin="dense"
              value={data.city}
              name="city"
              onChange={(e) =>
                setData((prevState) => ({ ...prevState, city: e.target.value }))
              }
              label="Ville"
              variant="outlined"
            />
          </div>
            <div className={classes.detail}>
                <TextField type="tel" className={classes.floor} id="outlined-basic" margin="dense" value={data.floor} name="floor" onChange={handleChangeFloor} label="Etage" variant="outlined" />
                <TextField type="tel" className={classes.superficie} id="outlined-basic" margin="dense" label="Superficie (m²)" value={data.superficie} name="superficie" onChange={handleChangeSuperficie} variant="outlined" />
            </div>
          <p className={formProStyles.contactText}>
            Votre message :
          </p>
          <div className={formProStyles.formSection}>
            <div className={formProStyles.message}>
              <textarea
                className={formProStyles.messageForm}
                required
                value={data.message}
                name="message"
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    message: e.target.value,
                  }))
                }
                placeholder="Entrez votre message"
              />
            </div>
          </div>
          <p className={formProStyles.contactText}>
            Joindre des photos:
          </p>
          <div className={formProStyles.formSection}>
            <div className={formProStyles.fileSection}>
              <div className={formProStyles.imageForm}>
                <label
                  htmlFor="file-upload1"
                  className={formProStyles.customFileUpload}
                >
                  <Plus2 />
                </label>
                <input
                  id="file-upload1"
                  type="file"
                  onChange={handleChange1}
                  accept="image/png, image/jpeg"
                />
                <img
                  src={file1}
                  className={formProStyles.uploadImage}
                  alt="Pièce jointe 1"
                />
              </div>
              <div className={formProStyles.imageForm}>
                <label
                  htmlFor="file-upload2"
                  className={formProStyles.customFileUpload}
                >
                  <Plus2 />
                </label>
                <input
                  id="file-upload2"
                  type="file"
                  onChange={handleChange2}
                  accept="image/png, image/jpeg"
                />
                <img
                  src={file2}
                  className={formProStyles.uploadImage}
                  alt="Pièce jointe 2"
                />
              </div>
              <div className={formProStyles.imageForm}>
                <label
                  htmlFor="file-upload3"
                  className={formProStyles.customFileUpload}
                >
                  <Plus2 />
                </label>
                <input
                  id="file-upload3"
                  type="file"
                  onChange={handleChange3}
                  accept="image/png, image/jpeg"
                />
                <img
                  src={file3}
                  className={formProStyles.uploadImage}
                  alt="Pièce jointe 3"
                />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" className={classes.button}>
          Envoyer
        </Button>
        {submition ? (
          <FormSubmit
            isShowing={isShowing}
            hide={toggle}
            formSubmit={isSubmit}
            error={error}
            formSubmition={initialize}
          />
        ) : null}
      </form>
    </div>
  );
}

export default FormPro;
