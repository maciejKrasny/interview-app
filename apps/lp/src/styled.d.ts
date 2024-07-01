import { MainTheme } from "./styles/theme/theme";

declare module 'styled-components' {
    export interface DefaultTheme extends MainTheme { };
}