/* eslint-disable */
import React from "react";
import DoctorImage from "../../assets/img/doctor/2.png";
import DetailsCabinet from "../../components/DetailCabinet/DetailsCabinet";
import RendezVous from "../../components/RendezVous/RendezVous";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import Stories from "../../components/Stories/Stories";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div className="home" style={{ paddingBottom: 150 }}>
      <section className="our-doctor padding-top-25 padding-bottom-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-title padding-bottom-40">
                <h2 className="heading">Présentation</h2>
              </div>
            </div>
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
                            src={DoctorImage}
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
                          <div className="padding-top-30 padding-bottom-35">
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
                          <div className="d-flex">
                            <div className="main-btn-wrap">
                              <a href="#" className="main-btn">
                                Voir plus
                              </a>
                            </div>
                          </div>
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
      <DetailsCabinet />
      <ServiceCarousel />
      <RendezVous />
      <Stories />
    </div>
  );
}

export default Home;
