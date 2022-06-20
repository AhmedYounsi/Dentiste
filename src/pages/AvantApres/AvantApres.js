/* eslint-disable */
import React,{useState} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./AvantApres.scss";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function AvantApres() {
const [Etat, setEtat] = useState("Tous")
const before = require("../../assets/img/avant_apres/apres-facette-dentaire-tunisie.jpg")
const after =  require("../../assets/img/avant_apres/avant-facette-dentaire-tunisie.jpg")

  return (
    <div className="avant-apres padding-bottom-50">
      <section className="breadcrumb-area padding-50 mb-3">
        <div className="container-fluid">
          <div className="row">
            <div className="breadcrumb-content">
              <div className="col-12 px-0">
                <div className="page-title">
                  <h1 className="heading-2">Avant et Après</h1>
                </div>
              </div>
              <ul className="page-list">
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>Avant et après</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container  py-4">
        <div className="col-lg-12">
          <div className="common-title padding-bottom-40">
            <h2 className="heading">Le résultat est ici</h2>
          </div>
        </div>
        <div className="horizontal-scroll mb-3">
          <ul className="button-group filters-button-group">
            <li onClick={() => setEtat('Tous')} className={"button "+ ( Etat == "Tous" ? "is-checked" : "")}>Tous</li>
            <li onClick={() => setEtat('Blanchiment')}  className={"button "+ ( Etat == "Blanchiment" ? "is-checked" : "")}>Blanchiment</li>
            <li onClick={() => setEtat('Implantologie')}  className={"button "+ ( Etat == "Implantologie" ? "is-checked" : "")}>Implantologie</li>
            <li onClick={() => setEtat('Brigde')}  className={"button "+ ( Etat == "Brigde" ? "is-checked" : "")}>Brigde</li>
            <li onClick={() => setEtat('Facettes')} className={"button "+ ( Etat == "Facettes" ? "is-checked" : "")}>Facettes</li>
          </ul>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 1000: 3 }}
        >
          <Masonry>
            <div className="item">
              <img
                src={require("../../assets/img/avant_apres/blanchiment-dentaire-avant-apres-min.jpg")}
                alt="blanchiment-dentaire-tunisie"
              />
            </div>
            <div className="item">
              <img
                src={require("../../assets/img/avant_apres/facette-dentaire-avant-apres.jpg")}
                alt="facette-dentaire-tunisie"
              />
            </div>
            <div className="item">
              <img
                src={require("../../assets/img/avant_apres/Implants-dentaires-avant-apres.jpg")}
                alt="Implants-dentaires-tunisie"
              />
            </div>
            <div className="item">
              <img
                src={require("../../assets/img/avant_apres/Facettes-Avant-et-Apres-Dentiste-Paris-Dr-Zarrinpour-Cas-12.jpg")}
                alt="facettes-tunisie"
              />
            </div>
            <div className="item">
              <img
                src={require("../../assets/img/avant_apres/dents-complet.jpg")}
                alt=""
              />
            </div>
            <div className="item">
              <img
                src={require("../../assets/img/avant_apres/dreamstime_xxl_124747064-1024x683.jpg")}
                alt="detartrage-densite-tunisie"
              />
            </div>
         
          </Masonry>
        </ResponsiveMasonry>
        {/* <ReactCompareSlider
        className="slider"
  itemOne={<ReactCompareSliderImage src={after}  alt="Image one" />}
  itemTwo={<ReactCompareSliderImage src={before} alt="Image two" />}
/> */}
      </div>
    </div>
  );
}

export default AvantApres;
