import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary: #d42026;
    --text: #4e4e4e;
    --background: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body{
    padding: 20px 42px 16px;
   
    background: var(--background);
    -webkit-font-smoothing: antialised; 
    
    border-bottom: 10px solid #d42026;
    min-height: 100vh;

    @media (max-width: 720px){
      padding: 12px 0 24px;
    }
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  strong {
    font-weight: 900;
  }

  h1 {
    font-size: 1.7rem;
    @media (max-width: 720px){
      font-size: 1rem;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.35;
    cursor: not-allowed;
  }


`;
