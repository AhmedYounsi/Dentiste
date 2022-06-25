/* eslint-disable */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import DoctorImage from "../../assets/img/dentiste-tunisie-docteur.png";
import CabinetImage from "../../assets/img/dentiste-tunisie-asma-cherif.jpg";
import { NavLink, useNavigate } from "react-router-dom";

function Doctor(props) {
  const navigate = useNavigate();
  return (
    <section className="our-doctor paddind-section">
      <div className="container">
        <div className="row">
          {props.title && (
            <div className="col-lg-12">
              <div className="common-title padding-bottom-40">
                <h2 className="heading">Présentation</h2>
              </div>
            </div>
          )}
          <div className="col-lg-12 doctor-slider">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-5 col-lg-6 dentiste-img">
                      <div className="doctor-slider-img">
                        <img
                          src={props.title ? DoctorImage : CabinetImage}
                          className="d-block w-100 mb-2"
                          alt="dentiste tunisie asma cherif"
                        />
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                      <div className="doctor-slider-content">
                        <h2 className="heading-4 m-0">
                          Cabinet dentiste <b>Asma Cherif</b>
                        </h2>
                        <h3 className="heading-6">
                          Médecin dentiste principal
                        </h3>
                        <div className="padding-top-30 padding-bottom-0">
                          <div className="presentation-div">
                            <p>
                              Chirurgien dentiste , avec plus de 20 ans
                              d’expérience professionnelle, Asma cherif offre ses
                              services au sein de son propre Cabinet dentaire
                              spécialisé en : <br />
                              <b>Implants dentaires , Blanchiment dentaire</b>
                              <br />
                              <p>
                                {" "}
                                Bienvenue chez notre cabinet Tunisie Dentiste{" "}
                              </p>
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
                            Ex. Attachée au service Chirurgie Maxilo-Faciale et
                            Esthétique de l’Hôpital Charles Nicole Tunis
                          </p>
                        </div>
                        {props.title && (
                          <div className="d-flex mt-4">
                            <div className="main-btn-wrap">
                              <NavLink
                                className="nav-link primary-button"
                                to="/cabinet-dentiste-tunisie"
                              >
                                <span></span>
                                Découvrire notre cabinet
                              </NavLink>
                            </div>
                          </div>
                        )}
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
  );
}

export default Doctor;
