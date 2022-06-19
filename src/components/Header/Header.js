/* eslint-disable */
import React,{useState} from "react";
import Logo from "../../assets/img/logo asma2.png";
import "./Header.scss";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
          <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
    <header>
      <div className="contanct-header">
        <div className="contact-content">
          <div className="tel">
            <BsTelephoneFill />
            54 339 924 - 71 432 393
          </div>
          <div className="mail">
            <GrMail />
            docteurtop@gmail.com
          </div>
          <div className="adresse">
            <FaMapMarkerAlt />
            23 Bis rue Habib Thameur Megrine Riadh 2034
          </div>
        </div>
      </div>
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
                  onClick={() =>handleShow}
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
                      <NavLink className="nav-link" to="/avant-apres-dentiste">
                        Avant et Après
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="nav-link"
                        to="/actualite-dentiste-tunisie"
                        >
                        Actualités
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-link"
                        to="/question-dentiste-tunisie"
                        >
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-link"
                        to="/contact-dentiste-tunisie"
                        >
                        Contact
                      </NavLink>
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
                  </>
  );
}

export default Header;
