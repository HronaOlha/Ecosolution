// import { useState } from "react";
// import { Container } from "./styles";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Values from "./components/Values/Values";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Cases/Cases";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Container> */}
      <Header />
      <Main />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
      <Contact />
      <Footer />
      {/* </Container> */}
    </>
  );
}

export default App;
