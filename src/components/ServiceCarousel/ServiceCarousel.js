/* eslint-disable */
import React from "react";
import Carousel from "react-elastic-carousel";
import Service2 from "../../assets/img/traitements/orthodontie-tunisie.jpg";
import Service3 from "../../assets/img/traitements/chirurgie-dentaire-tunisie.jpg";
import Service0 from "../../assets/img/traitements/implant-dentaire-tunisie.jpg";
import Service5 from "../../assets/img/traitements/chirurgie-dent-de-sagesse.jpg";
import Service4 from "../../assets/img/traitements/esthetique-dentaire-tunisie.jpg";
import Service6 from "../../assets/img/traitements/bridge-dentaire-tunisie.jpg";
import Service7 from "../../assets/img/traitements/blanchiement-dentaire-tunisie.jpg";
import "./ServiceCarousel.scss";
import { useNavigate } from "react-router-dom";
function ServiceCarousel() {
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
    <section id="service" className="service paddind-section">
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12">
              <div className="service-left pt-0">
                <div className="col-lg-12">
                  <div className="common-title padding-bottom-40">
                    <h2 className="heading">Traitements Dentaires</h2>
                  </div>
                </div>
              <div className="d-flex">
            
                <div className="m-auto traitement-text">
                <h3 className="heading-2">
                  Des <b>traitements dentaires</b> adaptés à vos besoins :
                </h3>
                  <p>
                    Chez dentiste tunisie nous vous garantissons des <b>traitements dentaires</b>{" "}
                    adaptés à vos besoins <br /> Prodigués par le docteur{" "}
                    <b>Asma Cherif</b> chirurgien dentiste, au tarif le plus juste. <br />
                    Ces <b>traitements dentaires</b> vous permettront de
                    conserver ou de rétablir une bonne santé
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div className="service-right">
              <Carousel
                itemPadding={[10, 10]}
                breakPoints={breakPoints}
                itemsToShow={3}
              >
                <div
                  style={{ backgroundImage: `url(${Service0})` }}
                  className="service-item service-carousel "
                >
                  <div className="heading-6 service-div">
                    <h3>Implants dentaires</h3>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${Service2})` }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Aligner par gouttière <br /> transparente
                    </h3>
                  </div>
                </div>
                <div
                  style={{ backgroundImage: `url(${Service7})` }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                    Blanchiment dentaire
                    </h3>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${Service3})` }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3> Chirurgie dentaire</h3>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${Service4})` }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Facettes dentaires <br /> veneers
                    </h3>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${Service5})` }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Chirurgie <br /> Dent de sagesse
                    </h3>
                  </div>
                </div>

                <div
                  style={{ backgroundImage: `url(${Service6})` }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Bridge <br /> Ceramique - Zircone
                    </h3>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="main-btn-wrap">
        <button
          onClick={() => navigate("/traitement-dentaire-tunisie")}
          className="main-btn"
        >
          Voir tous
        </button>
      </div>
    </section>
  );
}

export default ServiceCarousel;
