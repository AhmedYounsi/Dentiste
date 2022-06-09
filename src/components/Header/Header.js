/* eslint-disable */
import React from "react";
import Logo from "../../assets/img/logo asma2.png";
import "./Header.scss";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="contact-header"></div>
        <div className="row">
          <div className="header-area">
            <div className="logo-area mt-1">
              <a href="index.html">
                <img src={Logo} className="logo_dentiste" alt="Nav Logo" />
              </a>
            </div>
            <nav className="navbar navbar-area navbar-expand-lg">
              <div className="container nav-container">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => alert("sdfsdf")}
                >
                  <span className="cross-menu">
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="fortis_main_menu">
                  <ul className="navbar-nav">
                    <li>
                      <NavLink className="nav-link" to="/">
                        Accueil
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="nav-link"
                        to="/cabinet-dentiste-tunisie"
                      >
                        Cabinet
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="nav-link"
                        to="/traitement-dentaire-tunisie"
                      >
                        Traitements
                      </NavLink>
                    </li>
                    <li>
                      <a href="about.html">{"Avant & Après"}</a>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="faq.html">faqs</a>
                        </li>
                        <li>
                          <a href="login.html">Sign In</a>
                        </li>
                        <li>
                          <a href="login-2.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="help-center.html">Help Center</a>
                        </li>
                        <li>
                          <a href="membership.html">Membership</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">FAQ</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                  {/* <div className="contact-header">
                    <div className="phone-div">
                      <BsTelephone />
                    </div>
                    <div className="phone-div">
                      <FiMail />
                    </div>
                  </div> */}
                </div>
              </div>
            </nav>

         
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
