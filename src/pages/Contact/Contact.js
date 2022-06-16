import React from "react";
import RendezVous from "../../components/RendezVous/RendezVous";
import img_1 from "../../assets/img/telephone-icon.png";
import img_2 from "../../assets/img/mail-icon.png";
import img_3 from "../../assets/img/adresse-icon.png";

import "./Contact.scss";
function Contact() {
  return (
    <div>
      <section className="breadcrumb-area padding-50 mb-3">
        <div className="container-fluid">
          <div className="row">
            <div className="breadcrumb-content">
              <div className="col-12 px-0">
                <div className="page-title">
                  <h1 className="heading-1">Contactez-nous</h1>
                </div>
              </div>
              <ul className="page-list">
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup contact-items">
              <img src={img_1} alt="img" />

              <div className="content">
                <h3 className="valeur-title mt-3">Téléphone</h3>
                <h4 className="valeur-text">54 339 924 - 71 432 393</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup contact-items">
              <img src={img_2} alt="img" />

              <div className="content">
                <h3 className="valeur-title mt-3">Email</h3>
                <h4 className="valeur-text">docteurtop@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-couterup contact-items">
              <img src={img_3} alt="img" />

              <div className="content">
                <h3 className="valeur-title mt-3">Adresse</h3>
                <h4 className="valeur-text">
                  23 Bis rue Habib Thameur Megrine Riadh 2034
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RendezVous />
    </div>
  );
}

export default Contact;
