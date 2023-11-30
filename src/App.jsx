import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Values from "./components/Values/Values";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [deviceType, setDeviceType] = useState("desktop");

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
      <Header />
      <Main deviceType={deviceType} />
      <Values deviceType={deviceType} />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
