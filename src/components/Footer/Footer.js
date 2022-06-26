/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo asma2.png"

function Footer() {
  return (
    <footer className="footer-area rel">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget widget logo-widget">
                 
                  <img src={Logo} alt="dentiste tunisie logo" style={{width:130}} />
               
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
                  <NavLink to="/cabinet-dentiste-tunisie">
                  Le Cabinet
                </NavLink>
                 
                  </li>
                  <li>
                  <NavLink to="/traitement-dentaire-tunisie">
                  Traitements
                </NavLink>
                   
                  </li>
                  <li>
                  <NavLink to="/contact-dentiste-tunisie">
                  Contact
                </NavLink>
              
                  </li>
                  
                  <li>
                  <NavLink to="/actualite-dentiste-tunisie">
                  Actualités
                </NavLink>
              
                  </li>
                  


                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget widget widget_nav_menu">
                <p className="widget-title">Liens utiles</p>
                <ul>
                  <li>
                    <a href="https://www.ordre-chirurgiens-dentistes.fr/">Ordre des Chirurgiens Dentistes </a>
                  </li>
                  <li>
                    <a href="https://vymaps.com/TN/Conseil-national-de-l-Ordre-des-m-decins-dentistes-de-Tunisie-684154/">Conseil National</a>
                  </li>
                  <li>
                  <NavLink to="/">
                  Plan du site
                </NavLink>
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
