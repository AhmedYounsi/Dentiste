import React from "react";
import Carousel from "react-elastic-carousel";
import IMG_1 from "../../assets/img/hygiene-dentaire-conseils.jpg";
import IMG_2 from "../../assets/img/dentistes-angoisse.jpg";
import IMG_3 from "../../assets/img/dentistes-blanchiment.jpg";
import "./Stories.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Stories() {
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1400, itemsToShow: 3 },
  ];
  return (
    <div className="container stories paddind-section">
      <div className="col-lg-12">
        <div className="common-title padding-bottom-40">
          <h2 className="heading">Nos Derniers Articles</h2>
        </div>
      </div>
      <Carousel
          itemPadding={[0, 10]}
       
        breakPoints={breakPoints}
        itemsToShow={2}
      >
        <div className="article" 
       
        >
          <AiOutlinePlusCircle />
          <img
            src={require("../../assets/img/blog/sourire-eclatant.jpg")}
            alt="sourire eclatant dentaire tunisie"
          />
          <div className="date-article">
            <h3>Un sourire éclatant et des dents blanches</h3>
            <p className=""> 10 mai 2022</p>
          </div>
        </div>
        <div className="article">
          <AiOutlinePlusCircle />
          <img
            src={require("../../assets/img/blog/dents-taches-cafe-tasse.jpg")}
            alt="dents taches cafe"
          />
          <div className="date-article">
            <h3>Comment protéger nos dents des taches de café ?</h3>
            <p className=""> 18 février 2022</p>
          </div>
        </div>
        <div className="article">
          <AiOutlinePlusCircle />
          <img
            src={require("../../assets/img/blog/detartrage-dentaire-tunisie.jpg")}
            alt="détartrage dentaire tunisie"
          />
          <div className="date-article">
            <h3> Un détartrage peut-il rayer la dent ou abîmer les dents ?</h3>
            <p className="">01 juin 2022</p>
          </div>
        </div>
        <div className="article">
          <AiOutlinePlusCircle />
          <img src={IMG_1} alt="img" />
          <div className="date-article">
            <h3>Les 10 règles de l'hygiène dentaire</h3>
            <p className="">18 mai 2022</p>
          </div>
        </div>
        <div className="article">
          <AiOutlinePlusCircle />
          <img src={IMG_2} alt="img" />
          <div className="date-article">
            <h3>Attention aux angoissés</h3>
            <p className="">07 mai 2022</p>
          </div>
        </div>
        <div className="article">
          <AiOutlinePlusCircle />
          <img src={IMG_3} alt="img" />
          <div className="date-article">
            <h3>Blanchir les dents ne les fragilise pas</h3>
            <p className="">01 jun 2022</p>
          </div>
        </div>
      </Carousel>
      <br />
      <div className="main-btn-wrap">
        <button
          onClick={() => navigate("/actualite-dentiste-tunisie")}
          className="main-btn"
        >
          Voir tous
        </button>
      </div>
    </div>
  );
}

export default Stories;
