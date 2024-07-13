import { colors } from "./color";
import { fonts } from "./fonts";

export interface MainVariantsTheme {
    colors: Record<ThemeMode, ThemeColors>;
    fonts: ThemeFonts;
}

export interface MainTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
}

interface ThemeFonts {
    primary: string;
}

interface ThemeColors {
    primary: string;
    accent: string;
    body: string;
    background: string;
    border: string;
    secondary: string;
    outlineHover: string;
    disabled: string;
    success: string;
}

export type ThemeMode = 'dark' | 'light';

const lightTheme: ThemeColors = {
    primary: colors.purple01,
    accent: colors.yellow,
    body: colors.black,
    background: colors.white,
    border: colors.gray01,
    secondary: colors.gray02,
    outlineHover: colors.purple02,
    disabled: colors.gray03,
    success: colors.green,
}

const darkTheme: ThemeColors = {
    primary: colors.white,
    accent: colors.yellow,
    body: colors.white,
    background: colors.purple01,
    border: colors.gray01,
    secondary: colors.gray02,
    outlineHover: colors.purple02,
    disabled: colors.gray03,
    success: colors.green
}

export const theme: MainVariantsTheme = {
    colors: {
        dark: darkTheme,
        light: lightTheme
    },
    fonts,
}
