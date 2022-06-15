import React from "react";
import Image from "../../assets/img/rendez_vous.jpg";
function RendezVous() {
  return (
    <section className="appointment-section padding-top-80 padding-bottom-100 rltv">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="common-title padding-bottom-20">
              <h2 className="heading">Prendre rendez-vous</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 px-4">
            <div className="appointment-content">
              <div className="tab-content">
                <div className="appointment-img-area">
                  <img src={Image} alt="img" />
                   
                </div>
                <div className="appointment">
                  <h3>
                    {" "}
                    Obtenez immédiatement les soins de qualité que vous méritez
                  </h3>
                  <div className="form_rdv mb-3">
                    <input placeholder="Nom" type="text" className="mr-2" />
                    <input placeholder="Prenom" type="text" />
                  </div>
                  <div className="form_rdv mb-3">
                    <input placeholder="Email" type="text" className="mr-2 input_mail" />
                    <input placeholder="Téléphone" type="text" />
                  </div>
                  <div className="form_rdv mb-3">
                  <input placeholder="Adresse" className="mr-2" type="text" />
                    <input placeholder="Sujet" type="text" />
                  </div>
                  <button className="main-btn w-100">Valider le Rendez-vous</button>
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
