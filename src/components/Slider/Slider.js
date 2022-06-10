/* eslint-disable */
import React from 'react'
import SliderImg from "../../assets/img/slider/slider-01.png"
import "./Slider.scss"
function Slider() {
  return (
    <div className="home-slider home-slider-one">
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
                  Le meilleur de la santé dentaire <br /> Pour tous !
                </h1>
                <div  className="padding-20 header-text">
                  <p>
                    Prenez un rendez-vous avec l’un des spécialisés dans la
                    chirurgie dentaire
                    <br />
                    <b> Dr Asma cherif</b>
                  </p>
                </div>
                <div className="main-btn-wrap">
                  <a href="#" className="main-btn">Prenez Un rendez-vous</a>
                </div>
              </div>
            </div>
            <div
              className="slider-img"
              style={{backgroundImage:`url(${SliderImg})`}}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Slider