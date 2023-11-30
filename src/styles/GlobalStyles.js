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

    text-align: justify;
  }

  html {
    scroll-behavior: smooth;  
  }

  h1 {
     margin: 0 0 24px 0;
    font-size: ${({ theme }) => theme.fontSizes.extraLarge.s};
    line-height: 36px;
        word-spacing: 3px;

    @media screen and (${({ theme }) => theme.media.tablet}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
    line-height: 48px;

  }
    @media screen and (${({ theme }) => theme.media.desktop}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.l};
  line-height: 64px;
  }
}

h2{
  font-size: ${({ theme }) => theme.fontSizes.xxl};
      @media screen and (${({ theme }) => theme.media.tablet}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.s};


  }
    @media screen and (${({ theme }) => theme.media.desktop}) {
  font-size: ${({ theme }) => theme.fontSizes.extraLarge.m};
  }
}

h1,
  h2,
  h3,
  h4,
  h5,
  h6{
     /* margin-bottom: 24px; */
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
  }

  p {
    margin: 0;
    padding: 0;

    @media screen and (${({ theme }) => theme.media.tablet}) {
      letter-spacing: -0.64px;
    }
  }

    ul, li, ol {  
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
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
    font: inherit;
    color: inherit
}

section {
  margin: 0 auto;
  padding: 20px 20px;
   max-width: 480px;

   @media screen and (${({ theme }) => theme.media.tablet}) {
  padding: 20px 30px;
  max-width: 768px;
  }
    @media screen and (${({ theme }) => theme.media.desktop}) {
  max-width: 1280px;
  }
}

// Visibility
.hide-for-mobile {
  //hide for mobile
@media screen and (max-width: 768px){
    display: none;
} 
}
`;
