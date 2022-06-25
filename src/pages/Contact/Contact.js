/* eslint-disable */
import React from "react";
import RendezVous from "../../components/RendezVous/RendezVous";
import img_1 from "../../assets/img/icons/telephone-dentiste-tunisie.png";
import img_2 from "../../assets/img/icons/mail-dentiste-tunisie.png";
import img_3 from "../../assets/img/icons/adresse-dentiste-tunisie.png";
import { BiTimeFive,BiHandicap } from "react-icons/bi";
import { FaTrain,FaParking,FaRoad,FaWheelchair } from "react-icons/fa";
 
import "./Contact.scss";
import Horaires from "../../components/Horaires/Horaires";
function Contact() {
  return (
    <div>
        <section className="breadcrumb-area">
       
       <div className="breadcrumb-content">
         <div className="col-12 px-0">
           <div className="page-title">
           <h1 className="heading-2">Contactez-nous</h1>
           </div>
         </div>
         <ul className="page-list">
           <li>
             <a href="index.html">Accueil</a>
           </li>
           <li>Contact</li>
         </ul>
       </div>
  
 </section>
      <Horaires />
      {/* <div className="container py-4"> */}
      
        {/* <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup contact-items">
              <div className="image">
                <img className="icon-contact" src={img_1} alt="téléphone dentiste tunisie" />
              </div>

              <div className="content">
                <h3 className="valeur-title mt-3">Téléphone</h3>
                <h4 className="valeur-text">54 339 924 - 71 432 393</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-couterup contact-items">
              <div className="image">
                <img className="icon-contact" src={img_2} alt="mail dentiste tunisie" />
              </div>

              <div className="content">
                <h3 className="valeur-title mt-3">Email</h3>
                <h4 className="valeur-text">docteurtop@gmail.com</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-couterup contact-items">
              <div className="image">
                <img   src={img_3} alt="adresse dentiste tunisie" />
              </div>

              <div className="content">
                <h3 className="valeur-title mt-3">Adresse</h3>
                <h4 className="valeur-text">
                  23 Bis rue Habib Thameur Megrine Riadh 2034
                </h4>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <RendezVous />
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=36.7684390433394,%2010.224567685839622&t=k&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://123movies-a.com"></a>
          <br />
          <style>.mapouter{}</style>
          <a href="https://www.embedgooglemap.net"></a>
          <style>.gmap_canvas {}</style>
        </div>
      </div>{" "}
    </div>
  );
}

export default Contact;
