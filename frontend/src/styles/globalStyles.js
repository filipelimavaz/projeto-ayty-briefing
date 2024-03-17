import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100%; /* Alteração */
    min-height: 100vh; /* Alteração */
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
  }

  @media (min-width: 768px) { /* Alteração */
    body {
      width: 100vw;
    }
  }
`

export default Global
