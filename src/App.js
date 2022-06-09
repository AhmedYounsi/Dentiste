/* eslint-disable */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Back from "./assets/img/D0QBdH.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabine from "./pages/Cabine/Cabine";
import Traitements from "./pages/Traitements/Traitements";
function App() {
  return (
    <div>
      <img src={Back} className="background_app" alt="" />
      {/* <InfoFixed /> */}
      <Header />

      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet-dentiste-tunisie" element={<Cabine />} />
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
