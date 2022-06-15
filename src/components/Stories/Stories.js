import React from "react";
import Carousel from "react-elastic-carousel";
import IMG_1 from "../../assets/img/hygiene-dentaire-conseils.jpg";
import IMG_2 from "../../assets/img/dentistes-angoisse.jpg";
import IMG_3 from "../../assets/img/dentistes-blanchiment.jpg";
import "./Stories.scss";
import { AiOutlinePlusCircle } from 'react-icons/ai';

function Stories() {

  const  breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
 
      ]
  return (
    <div className="container stories">
      <div className="col-lg-12">
        <div className="common-title padding-bottom-40">
          <h2 className="heading">Nos Derniers Articles</h2>
        </div>
      </div>
      <Carousel pagination={false} itemPadding={[0, 5]} breakPoints={breakPoints} itemsToShow={3} >
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
    </div>
  );
}

export default Stories;
