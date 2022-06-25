/* eslint-disable */
import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./AvantApres.scss";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function AvantApres() {
  const [Etat, setEtat] = useState("tous");
  const [FilterRef, setFilterRef] = useState([]);
  const before = require("../../assets/img/avant_apres/apres-facette-dentaire-tunisie.jpg");
  const after = require("../../assets/img/avant_apres/avant-facette-dentaire-tunisie.jpg");

  const AllRefs = [
    {
      id: 1,
      title: "Blanchiment dentaire",
      category: "blanchiment",
      img: require("../../assets/img/avant_apres/blanchiment-dentaire-avant-apres-min.jpg"),
    },
    {
      id: 2,
      title: "Facette dentaire",
      category: "facettes",
      img: require("../../assets/img/avant_apres/facette-dentaire-avant-apres.jpg"),
    },
    {
      id: 3,
      title: "Implants dentaires",
      category: "implantologie",
      img: require("../../assets/img/avant_apres/Implants-dentaires-avant-apres.jpg"),
    },
    {
      id: 4,
      title: "Facette dentaire",
      category: "facettes",
      img: require("../../assets/img/avant_apres/Facettes-Dentiste-tunisie-12.jpg"),
    },
    {
      id: 5,
      title: "Implants dentaires",
      category: "implantologie",
      img: require("../../assets/img/avant_apres/dents-complet.jpg"),
    },
    {
      id: 6,
      title: "Blanchiment dentaire",
      category: "blanchiment",
      img: require("../../assets/img/avant_apres/blanchiment-dentaire-tunisie.jpg"),
    },
  ];

  useEffect(() => {
    setFilterRef(AllRefs);
  }, []);

  useEffect(() => {
    if (Etat == "tous") {
      setFilterRef(AllRefs);
      return;
    }
    var arr = AllRefs.filter((el) => el.category == Etat);
    setFilterRef(arr);
  }, [Etat]);

  return (
    <div className="avant-apres padding-bottom-50">
      <section className="breadcrumb-area">
        <div className="breadcrumb-content">
          <div className="col-12 px-0">
            <div className="page-title">
              <h1 className="heading-2">Resultat Cabinet</h1>
            </div>
          </div>
          <ul className="page-list">
            <li>
              <a href="index.html">Accueil</a>
            </li>
            <li>Avant Après</li>
          </ul>
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
            <li
              onClick={() => setEtat("tous")}
              className={"button " + (Etat == "tous" ? "is-checked" : "")}
            >
              Tous
            </li>
            <li
              onClick={() => setEtat("blanchiment")}
              className={
                "button " + (Etat == "blanchiment" ? "is-checked" : "")
              }
            >
              Blanchiment
            </li>
            <li
              onClick={() => setEtat("implantologie")}
              className={
                "button " + (Etat == "implantologie" ? "is-checked" : "")
              }
            >
              Implantologie
            </li>
            <li
              onClick={() => setEtat("brigde")}
              className={"button " + (Etat == "brigde" ? "is-checked" : "")}
            >
              Brigde
            </li>
            <li
              onClick={() => setEtat("facettes")}
              className={"button " + (Etat == "facettes" ? "is-checked" : "")}
            >
              Facettes
            </li>
          </ul>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 1000: 3 }}
        >
          <Masonry>
            {FilterRef.map((el, index) => {
              return (
                <div key={index} className="item">
                  <img src={el.img} alt="detartrage-densite-tunisie" />
                  <h3 className="titre-ref"> {el.title} </h3>
                </div>
              );
            })}
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
