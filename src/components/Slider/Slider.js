/* eslint-disable */
import React, { useState } from 'react'
import SliderImg from "../../assets/img/densite-tunisie-cabinet.png"
import SliderImg2 from "../../assets/img/dentiste-tunisie-traitement.jpg"
import "./Slider.scss"
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { NavLink } from 'react-router-dom';


function Slider() {
  const [Slide, setSlide] = useState(0)


  return (
    <div className="home-slider home-slider-one">
      <IoIosArrowDroprightCircle onClick={() => setSlide(1)} />
      <IoIosArrowDropleftCircle onClick={() => setSlide(0)} />
      <div className="container-fluid">

        <div className="row">
          <div className="scroll-down-area">
            <div className="slider-bottom-area">
              <div className="scroll-down"></div>
            </div>
          </div>

          <div className="home-slider-wrapper">

            <div className="slider-items">
              <div className="slider-content-area">
                <div className="slider-content">
                  <h1 className="slider-heading">
                    Cabinet Dentiste Tunisie
                  </h1>
                  <h2 className='m-0'> Le meilleur cabinet dentaire en tunisie, Pour tous !</h2>
                  <div className="padding-10 header-text">
                    <p>
                      Prenez un rendez-vous avec l’un des spécialisés dans la
                      chirurgie dentaire
                      <br />
                      <b> Dr Asma cherif</b>
                    </p>
                  </div>
                  <div className="main-btn-wrap mt-2">
                    <NavLink
                      className="nav-link primary-button"
                      to="/cabinet-dentiste-tunisie"
                    >
                      <span></span>
                      Prenez un Rendez-vous
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className='all-images'>
                <div

                  className={"slider-images " + (Slide == 0 ? "slider-show" : "to_left")}
                  style={{ backgroundImage: `url(${SliderImg})` }}
                ></div>
                <div
                  onClick={() => setSlide(0)}
                  className={"slider-images " + (Slide == 1 ? "slider-show" : "to_rigth")}
                  style={{ backgroundImage: `url(${SliderImg2})` }}
                ></div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider