import { createGlobalStyle } from "styled-components";

export const Container = createGlobalStyle`
    *, *:before,  *:after {
        box-sizing: border-box;
        transform-style: preserve-3d;
        font-family: ${({ theme }) => theme.fonts.primary};
    }

    body {
        margin: 0;
    }
`;