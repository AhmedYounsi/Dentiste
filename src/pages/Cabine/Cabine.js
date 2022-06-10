/* eslint-disable */
import React from "react";
import RendezVous from "../../components/RendezVous/RendezVous";
import background from "../../assets/img/breadcrumb-bg.png";
import Image from "../../assets/img/about/07.png";
import Doctor from "../../components/Doctor/Doctor";
import { BsCheck2Square } from "react-icons/bs";
import "./Cabine.scss";
function Cabine() {
  return (
    <div className="">
      <section
        className="breadcrumb-area padding-50"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="breadcrumb-content">
              <div className="col-12 px-0">
                <div className="page-title">
                  <h1 className="heading-1">Notre Cabinet</h1>
                </div>
              </div>
              <ul className="page-list">
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>Cabinet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <Doctor title={false} />
      <section className="why-choose-section padding-50 ">
        <div className="container">
          <div className="row">
         
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <div className="common-title padding-bottom-30">
                  <h2 className="heading line-none">
                   Pourquoi choisir notre cabinet ?{" "}
                  </h2>
                </div>

                <div className="valeur-area">
                  <p>
                    <BsCheck2Square />
                    La satisfaction des patients
                  </p>
                  <p>
                    <BsCheck2Square />
                    A la fine pointe de technologie
                  </p>
                  <p>
                    <BsCheck2Square />
                  Le cadre au travail
                  </p>
                  <p>
                    <BsCheck2Square />
                    Douceurs des traitements
                  </p>
                  <p>
                    <BsCheck2Square />
                  Le plan de carrière
                   
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-lg-1">
              <div className="why-choose-img">
                <img src={Image} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <RendezVous />
    </div>
  );
}

export default Cabine;
