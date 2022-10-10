import { createGlobalStyle } from "styled-components";
import { TTheme } from "../tokens";

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fontFamily};
    margin: 0;
    padding: 0;
 } 
`
