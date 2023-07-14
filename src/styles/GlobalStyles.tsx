'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-dark: #01022f;
        --font-light: #6c6ee7;
        --bg-darker: #100720;
        --bg-dark: #31087B;
        --bg-light: #FA2FB5;
        --bg-lighter: #FFC23C;
        --white: #f8eacb;
        --black: #0d0122;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto_Flex', sans-serif;
    }

    body {
        background-image: linear-gradient(160deg, var(--bg-darker) 30%, var(--bg-dark) 60%, var(--bg-light), var(--bg-lighter));
        height: 100%;
    }


`