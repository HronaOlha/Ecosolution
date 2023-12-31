import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Values from "./components/Values/Values";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import Faq from "./components/Faq/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [deviceType, setDeviceType] = useState("mobile");

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setDeviceType("mobile");
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header deviceType={deviceType} />
      <Main />
      <Values deviceType={deviceType} />
      <Electricity />
      <Cases deviceType={deviceType} />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
