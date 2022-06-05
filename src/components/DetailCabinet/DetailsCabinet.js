import React from "react";
import img_1 from "../../assets/img/icon_traitements.png";
import img_2 from "../../assets/img/icon_faq.png";
import img_4 from "../../assets/img/icon_centres.png";
import './DetailsCabinet.scss'
function DetailsCabinet() {
  return (
    <section className="coundown-section  p-4">
      <div className="container">
    
      <div className="col-lg-12">
              <div className="common-title padding-bottom-40">
                <h2 className="heading">Pourquoi nous choisir ?</h2>
              </div>
            </div>
        <div className="row">
          
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup">
              <div className="icon" style={{ overflow: "hidden" }}>
                <img src={img_1} alt="img" />
              </div>
              <div className="content">
                <span className="count-num">DES SOINS DE QUALITÉ</span>
                <h4 className="title">
                  La qualité des soins prodigués et la sécurité de nos patients
                  sont notre priorité !
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup">
              <div className="icon">
                <img src={img_4} alt="img" />
              </div>
              <div className="content">
                <span className="count-num">DU MATÉRIEL DE POINTE</span>
                <h4 className="title">
                  Nous disposons d’un matériel de pointe, adapté à la
                  morphologie des plus petits et adoptons une approche adaptée à
                  chacun
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-couterup">
              <div className="icon">
                <img src={img_2} alt="img" />
              </div>
              <div className="content">
                <span className="count-num">TRANSPARANCE A VOS QUESTIONS</span>
                <h4 className="title">
                Consultez notre rubrique FAQ pour plus d’informations.
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
