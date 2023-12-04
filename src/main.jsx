import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
