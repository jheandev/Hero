import { createGlobalStyle } from "styled-components";

import Ell1 from "../assets/Ellipse1.png";
import Ell2 from "../assets/Ellipse2.png";

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: url(${Ell2})no-repeat 1010px,  url(${Ell1}) no-repeat 931px;
        background-size: cover;
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }

    button{
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;

    }


`

export default globalStyle;