/* eslint-disable */
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Back from "./assets/img/D0QBdH.jpg";
import InfoFixed from "./components/InfoFixes/InfoFixed";

function App() {
  return (
    <div>
      <img src={Back} className="background_app" alt="" />
      {/* <InfoFixed /> */}
      <Header />
      <Slider />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
