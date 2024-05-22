import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
// RESET ================================
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
}

body {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
}

ul,
li {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    display: block;
}

/* html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px por ex)
} */

// ANIMATION ================================
.animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: anime 0.3s forwards;
}

@keyframes anime {
to {
    opacity: 1;
    transform: initial;
    }
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
}

`;
