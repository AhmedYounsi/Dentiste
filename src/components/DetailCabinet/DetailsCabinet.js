import React from "react";
import img_1 from "../../assets/img/icons/traitement-denstiste-icon.png";
import img_2 from "../../assets/img/icons/question-dentiste-icon.png";
import img_4 from "../../assets/img/icons/materiels-dentiste-icon.png";
import "./DetailsCabinet.scss";
function DetailsCabinet() {
  return (
    <section className="paddind-section">
      <div className="container">
        <div className="col-lg-12">
          <div className="common-title padding-bottom-40">
            <h2 className="heading">Pourquoi nous choisir ?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup">
              <div className="icon">
                <img src={img_1} alt="traitement denstiste icon" />
              </div>
              <div className="content">
                <h3 className="valeur-title mt-3">DES SOINS DE QUALITÉ</h3>
                <h4 className="valeur-text">
                  La qualité des soins prodigués et la sécurité de nos patients
                  sont une priorité chez <br /> <b>Cabient dentiste tunisie</b>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup">
              <div className="icon">
                <img src={img_4} alt="question dentiste icon" />
              </div>
              <div className="content">
                <h3 className="valeur-title mt-3">DU MATÉRIEL DE POINTE</h3>
                <h4 className="valeur-text">
                  <b>Cabient dentiste tunisie</b> dispose d’un matériel de
                  pointe, adapté à la morphologie des plus petits et adoptons
                  une approche adaptée à chacun
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-couterup">
              <div className="icon">
                <img src={img_2} alt="materiels dentiste icon" />
              </div>
              <div className="content">
                <h3 className="valeur-title mt-3">
                  TRANSPARANCE A VOS QUESTIONS
                </h3>
                <h4 className="valeur-text">
                  Consultez notre rubrique FAQ pour plus d’informations. <br />
                  <b>Cabient dentiste tunisie </b>vous répond !
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsCabinet;
