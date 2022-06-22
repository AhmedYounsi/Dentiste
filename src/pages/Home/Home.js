/* eslint-disable */
import React from "react";
import DetailsCabinet from "../../components/DetailCabinet/DetailsCabinet";
import RendezVous from "../../components/RendezVous/RendezVous";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import Stories from "../../components/Stories/Stories";
import { BsArrowRight } from "react-icons/bs";
import Slider from "../../components/Slider/Slider";
import Doctor from "../../components/Doctor/Doctor";
import { Helmet } from "react-helmet";
import Horaires from "../../components/Horaires/Horaires";
function Home() {
  return (
    <>
      <br />
      <Helmet htmlAttributes={{ lang: 'fr' }}>
        <meta charSet="utf-8" />
        <title>
          Dentiste tunisie cabinet | dentiste chirurgien tunisie
        </title>
        <meta
          name="description"
          content="dentiste tunisie vous aide a trouver un cabient dentiste en tunisien et de prendre une consultation qui vous gagantie des traitements dentaires"
        />
      </Helmet>
      <Slider />

      <div className="home" style={{ paddingBottom: 20 }}>
        <Doctor title={true} />
        <DetailsCabinet />
        <ServiceCarousel />
        <RendezVous />
        <Stories />
        <Horaires />
      </div>
    </>
  );
}

export default Home;
