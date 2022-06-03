import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        user-select: none;
        background-color: #191919;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
    }
`;

export default GlobalStyles;