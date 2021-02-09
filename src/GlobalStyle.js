import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 93.75%;
  }

  body {
    background: #f0f2f5;
    font-family: "Poppins", sans-serif;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  h2 {
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    color: #363f5f;

    font-weight: 400;
  }

  @media (min-width: 800px) {
    html {
      font-size: 87.5%;
    }

    .balance {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
  }
`;