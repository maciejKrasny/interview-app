import { PropsWithChildren } from "react";
import getTheme from "#//styles/theme/getTheme";
import { ThemeProvider } from "styled-components";
import { Container } from "./StyleWrapper.styled";
import RobotoFontFace from "#//styles/fonts/roboto";

const StyleWrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={getTheme('light')}>
        <Container />
        <RobotoFontFace />
        {children}
    </ThemeProvider>
)

export default StyleWrapper;