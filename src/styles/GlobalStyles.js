import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {   
    font-size: ${({ theme }) => theme.fontSizes.main};
    color:${({ theme }) => theme.colors.darkGreen} ;
    background-color: ${({ theme }) => theme.colors.background}; 
  }

  * {
    box-sizing: border-box;
  }

  body { 
    margin: 0 ;
    padding: 0;  
    width: 100vw;
    min-height: 100vh;

    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.darkGreen};
  }

  html {
    scroll-behavior: smooth;  
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge.s};
    
    @media screen and (${({ theme }) => theme.media.tablet}) {
font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
  }
@media screen and (${({ theme }) => theme.media.desktop}) {
font-size: ${({ theme }) => theme.fontSizes.extraLarge.l};
  }
}

h1,
  h2,
  h3,
  h4,
  h5,
  h6{
     margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    padding: 0;
  }

    ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;   
  } 

  img,
  picture,
video,
canvas,
svg {
    display: block;
    width: 100%;
    height: auto;
  }
  
  input,
button,
textarea,
select{
    font: inherit
}

section {
  padding: 0px 20px;
}
`;
