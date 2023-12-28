import { useEffect, useState } from "react";

import Header, { HeaderPhone } from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import TimeLine from "./components/Timeline.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import "./styles/App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [ratio, setRatio]=useState(window.innerWidth/window.innerHeight)
  console.log(ratio)
  useEffect(()=>{
    const resizeRatio=()=>{
setRatio(window.innerWidth/window.innerHeight)
    };
    window.addEventListener("resize", resizeRatio)
    return()=>{
      window.addEventListener("resize", resizeRatio)
    }
  },[ratio])
  return ratio <2 ?(
    
      <>
        <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home ratio={ratio}/>
        <Work />
        <TimeLine />
        <Services />
        <Testimonial />
        <Contact />
        <Footer />
        <Toaster />
      </>
    ) : <em id="customMessage">Plz rato to the view</em>
  

}

export default App;
