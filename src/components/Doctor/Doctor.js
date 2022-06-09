/* eslint-disable */
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import DoctorImage from "../../assets/img/doctor/2.png";
import CabinetImage from "../../assets/img/cabinet-dentiste-tunisie-image.jpg";

function Doctor(props) {
  return (
    <section className="our-doctor padding-top-50 padding-bottom-50">
    <div className="container">
      <div className="row">
       { props.title && <div className="col-lg-12">
          <div className="common-title padding-bottom-40">
            <h2 className="heading">Présentation</h2>
          </div>
        </div>}
        <div className="col-lg-12 doctor-slider">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="doctor-slider-img">
                      <img
                        src={props.title ? DoctorImage : CabinetImage}
                        className="d-block w-100"
                        alt="Slider Img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="doctor-slider-content">
                      <h4 className="heading-4">
                        Cabinet du docteur <b>Asma Cherif</b>
                      </h4>
                      <h6 className="heading-6">Médecin dentiste principal</h6>
                      <div className="padding-top-30 padding-bottom-0">
                        <div className="presentation-div">
                        <p>
                          Chirurgien dentiste , avec plus de 20 ans
                          d’expérience professionnelle, offre ses services
                          au sein de son propre Cabinet dentaire spécialisé
                          en prothèse fixée et en implantologie
                        </p>
                        <br />
                          <p>
                            <BsArrowRight />
                            Implantologie orale
                          </p>
                          <p>
                            {" "}
                            <BsArrowRight />
                            Chirurgie bucco-dentaire
                          </p>
                          <p>
                            {" "}
                            <BsArrowRight />
                            Dentiste esthétique
                          </p>
                        </div>
                        <br />
                        <p>
                          Ex. Attaché des cliniques en Allemagne <br />
                          Ex. Attachée au service Chirurgie Maxilo-Faciale
                          et Esthétique de l’Hôpital Charles Nicole Tunis
                        </p>
                       </div>
                    { props.title && <div className="d-flex mt-4">
                        <div className="main-btn-wrap">
                          <a  href="#" className="main-btn">
                            Voir plus
                          </a>
                        </div>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Doctor