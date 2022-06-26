/* eslint-disable */
import React from "react";
import Helmet from "react-helmet";
import DevisForm from "../../components/DevisForm/DevisForm";
import "./Devis.scss";
function Devis() {
  return (
    <div>
           <Helmet htmlAttributes={{ lang: "fr" }}>
        <meta charSet="utf-8" />
        <title>Devis en ligne dentiste tunisie | cabinet dentiste tunisie</title>
        <meta
          name="description"
          content="dentiste tunisie vous aide a trouver un cabient dentiste en tunisien et de prendre une consultation qui vous gagantie des traitements dentaires"
        />
      </Helmet>
      <section className="breadcrumb-area">
        <div className="breadcrumb-content">
          <div className="col-12 px-0">
            <div className="page-title">
              <h1 className="heading-2">Devis dentsite en ligne</h1>
            </div>
          </div>
          <ul className="page-list">
            <li>
              <a href="">Accueil</a>
            </li>
            <li>Devis</li>
          </ul>
        </div>
      </section>

      <DevisForm />
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
           
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=36%C2%B046'06.4%22N%2010%C2%B013'28.4%22E&t=k&z=19&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://123movies-to.org"></a>
          <br />
          <a href="https://www.embedgooglemap.net"></a>
        </div>
      </div>
    </div>
  );
}

export default Devis;
