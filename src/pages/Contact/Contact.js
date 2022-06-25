/* eslint-disable */
import React from "react";
import RendezVous from "../../components/RendezVous/RendezVous";

 
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
