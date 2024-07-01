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
}

export type ThemeMode = 'dark' | 'light';

const lightTheme: ThemeColors = {
    primary: colors.purple,
    accent: colors.yellow,
    body: colors.black,
    background: colors.white,
    border: colors.gray
}

const darkTheme: ThemeColors = {
    primary: colors.white,
    accent: colors.yellow,
    body: colors.white,
    background: colors.purple,
    border: colors.gray
}

export const theme: MainVariantsTheme = {
    colors: {
        dark: darkTheme,
        light: lightTheme
    },
    fonts,
}
