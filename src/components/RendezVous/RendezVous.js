/* eslint-disable */
import React, { useState } from "react";
import Image from "../../assets/img/cabinet-dentiste-rendez-vous.jpg";
import "./RDV.scss"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function RendezVous() {
  const [Nom, setNom] = useState("")
  const [Prenom, setPrenom] = useState("")
  const [Mail, setMail] = useState("")
  const [Sujet, setSujet] = useState("")
  const [Adresse, setAdresse] = useState("")
  const [Tel, setTel] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Send = () => {
    if (Nom == "" || Prenom == "" || Mail == "" || Sujet == "" || Adresse == "" || Tel == "") {
      alert("champs vides")
      return
    }
    else {
      setNom("")
      setPrenom("")
      setMail("")
      setSujet("")
      setAdresse("")
      setTel("")
      handleShow()
    }
  }
  return (
    <section className="appointment-section padding-top-25 padding-bottom-25 rltv">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demande Rendez-vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>Votre demande de rendez-vous a été effectué avec succès</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="modal-btn-x" onClick={handleClose}>
            Fermer
          </Button>
         
        </Modal.Footer>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="common-title padding-bottom-20">
              <h2 className="heading">Rendez-vous dentiste</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 ">
            <div className="appointment-content">
              <div className="tab-content">
                <div className="appointment-img-area">
                  <img src={Image} alt="cabinet densite tunisie rendez vous" />

                </div>
                <div className="appointment">
                  <h3 className="">
                    Obtenez un rendez-vous chez cabinet dentiste tunisie
                  </h3>
                  <div className="form_rdv ">
                    <input value={Nom} onChange={e => setNom(e.target.value)} placeholder="Nom" type="text" className="mr-2" />
                    <input value={Prenom} onChange={e => setPrenom(e.target.value)} placeholder="Prenom" type="text" />
                  </div>
                  <div className="form_rdv  ">
                    <input value={Mail} onChange={e => setMail(e.target.value)} placeholder="Email" type="text" className="mr-2 input_mail" />
                    <input value={Tel} onChange={e => setTel(e.target.value)} placeholder="Téléphone" type="text" />
                  </div>
                  <div className="form_rdv  ">
                    <input value={Adresse} onChange={e => setAdresse(e.target.value)} placeholder="Adresse" className="mr-2" type="text" />
                    <input value={Sujet} onChange={e => setSujet(e.target.value)} placeholder="Sujet" type="text" />
                  </div>
                  <button onClick={Send} className="main-btn w-100">Valider le Rendez-vous</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RendezVous;
