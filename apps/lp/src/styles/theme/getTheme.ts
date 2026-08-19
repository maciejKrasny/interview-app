import { MainTheme, ThemeMode, theme } from './theme';

function getTheme(mode: ThemeMode): MainTheme {
    return {
        ...theme,
        colors: theme.colors[mode],
    }

}

export default getTheme;