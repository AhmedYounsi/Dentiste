/* eslint-disable */
import React from "react";
import Logo from "../../assets/img/logo asma2.png"

function Footer() {
  return (
    <footer className="footer-area rel">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget widget logo-widget">
                <a href="index.html">
                  <img src={Logo} alt="Nav Logo" style={{width:130}} />
                </a>
                <ul>
                  <li>
                    <span className="icon">
                   <b>Email : </b>
                    </span>
                    docteurtop@gmail.com
                  </li>
                  <li>
                    <span className="icon">
                   <b>Téléphone : </b>
                    </span>
                    54 339 924 - 71 432 393
                  </li>
                  <li>
                    <span className="icon">
                     <b>Adresse</b>
                    </span>
                    23 Bis rue Habib Thameur Megrine Riadh 2034 <br /> – prés de la mosquée
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget widget widget_nav_menu">
                <p className="widget-title">Liens internes</p>
                <ul>
                  <li>
                    <a href="#">Présentation</a>
                  </li>
                  <li>
                    <a href="#">Le Cabinet</a>
                  </li>
                  <li>
                    <a href="#">Traitements</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  


                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget widget widget_nav_menu">
                <p className="widget-title">Liens utiles</p>
                <ul>
                  <li>
                    <a href="#">Ordre des Chirurgiens Dentistes </a>
                  </li>
                  <li>
                    <a href="#">Mentions légales</a>
                  </li>
                  <li>
                    <a href="#"> Plan du site</a>
                  </li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner">
                &copy; Copyright 2019 Tunisie Dentiste -  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
