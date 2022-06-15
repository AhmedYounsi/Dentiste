/* eslint-disable */
import React from "react";
import DoctorImage from "../../assets/img/doctor/2.png";
import DetailsCabinet from "../../components/DetailCabinet/DetailsCabinet";
import RendezVous from "../../components/RendezVous/RendezVous";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import Stories from "../../components/Stories/Stories";
import { BsArrowRight } from "react-icons/bs";
import Slider from "../../components/Slider/Slider";
import Doctor from "../../components/Doctor/Doctor";
import { Helmet } from "react-helmet";
function Home() {
 
  return (
    <>
      <br />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dentiste tunisie cabinet | chirurgien dentiste tunisie</title>
        <meta
          name="description"
          content="dentiste tunisie est le site internet qui vous aide a trouver un dentiste tunisien et de prendre une consultation qui vous gagantie des traitements dentaires"
        />
      </Helmet>
      <Slider />

      <div className="home" style={{ paddingBottom: 150 }}>
        <Doctor title={true} />
        <DetailsCabinet />
        <ServiceCarousel />
        <RendezVous />
        <Stories />
      </div>
    </>
  );
}

export default Home;
