// import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Values from "./Values/Values";
import Electricity from "./Electricity/Electricity";
import Cases from "./Cases/Cases";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
