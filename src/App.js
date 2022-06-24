/* eslint-disable */
import React,{useEffect} from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Back from "./assets/img/D0QBdH.jpg";
import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import Cabine from "./pages/Cabine/Cabine";
import Traitements from "./pages/Traitements/Traitements";
import Contact from "./pages/Contact/Contact";
import AvantApres from "./pages/AvantApres/AvantApres";
import Actualites from "./pages/Actualites/Actualites";
import FAQ from "./pages/FAQ/FAQ";
function App() {
  const location = useLocation()
  useEffect(() => {
 window.scrollTo(0,0)
  }, [location.pathname])
 
useEffect(() => {
  window.onscroll = function (e) {
    const element = document.querySelector(".header");
    const route = document.querySelector(".header");
    if(window.scrollY > 110){
     element.classList.add("scrolled-header");
    }
    else{
      element.classList.remove("scrolled-header");
    }
};

}, [])

   
  return (
    <div>
      <img src={Back} className="background_app" alt="dnetiste tunisie background" />
      {/* <InfoFixed /> */}
      <Header />

      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/cabinet-dentiste-tunisie" element={<Cabine />} />
          <Route path="/contact-dentiste-tunisie" element={<Contact />} />
          <Route path="/avant-apres-dentiste" element={<AvantApres />} />
          <Route path="/actualite-dentiste-tunisie" element={<Actualites />} />
          <Route path="/question-dentiste-tunisie" element={<FAQ />} />
          <Route
            path="/traitement-dentaire-tunisie"
            element={<Traitements />}
          />  
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
