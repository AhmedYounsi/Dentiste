/* eslint-disable */
import React from "react";
import Carousel from "react-elastic-carousel";
import Service1 from "../../assets/img/esthetique-dentaire-1-400x401.jpg";
import Service2 from "../../assets/img/Orthodontie-400x480.jpg";
import Service3 from "../../assets/img/chirurgie-dentaire.jpg";
import Service0 from "../../assets/img/Implantologie-1-1170x658.jpg";
function ServiceCarousel() {
  const  breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },

  ]
  return (
    <section id="service" className="service pb-5">
      <div className="container-fluid px-0">
        <div className="container">
          
          <div className="row mx-0">
            
            <div className="col-lg-12 col-md-12">
              <div className="service-left">
              <div className="col-lg-12">
              <div className="common-title padding-bottom-40">
                <h2 className="heading">Traitements Dentaires</h2>
              </div>
            </div>
                <h5 className="heading-5">
                  Des <b>traitements dentaires</b> adaptés à vos besoins :
                </h5>
                <div>
                  <p>
                    Nous vous garantissons des <b>traitements dentaires</b> adaptés à
                    vos besoins, <br /> prodigués par le docteur <b>Asma Cherif</b>, au
                    prix le plus juste et avec une prise en charge rapide,
                    complète et personnalisée. Ces <b>traitements dentaires</b> vous
                    permettront de conserver ou de rétablir une bonne santé
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="service-right">
                <div className="row">
                  <Carousel breakPoints={breakPoints} pagination={false} itemsToShow={3}>
                    <div className="col-md-12 col-sm-12">
                      <div
                        style={{ backgroundImage: `url(${Service0})` }}
                        className="service-item service-carousel"
                      >
                        <div className="heading-6 service-div">
                           <h3>Implantologie</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div
                        style={{ backgroundImage: `url(${Service2})` }}
                        className="service-item service-carousel"
                      >
                        <div className="heading-6 service-div">
                          <h3>Aligner par gouttière <br /> transparente</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <div
                        style={{ backgroundImage: `url(${Service3})` }}
                        className="service-item service-carousel"
                      >
                        <div className="heading-6 service-div">
                         <h3> Chirurgie dentaire</h3>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-btn-wrap">
        <a href="#" className="main-btn">
          Voir tous
        </a>
      </div>
    </section>
  );
}

export default ServiceCarousel;
