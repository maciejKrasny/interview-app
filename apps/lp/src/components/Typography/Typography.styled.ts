import styled, { css } from "styled-components";
import { TypographyProps } from "./Typography.types";
import { toRem } from "../../styles/utils/calc";
import { theme } from "#//styles/theme/theme";

const fontFamily = theme.fonts.primary;

const h1Css = css`
    font-family: ${fontFamily};
    font-size: ${toRem(28)};
    font-weight: bold;
    line-height: ${toRem(40)};
    letter-spacing: 0px;
`;

const h2Css = css`
    font-family: ${fontFamily};
    font-size: ${toRem(22)};
    font-weight: 600;
    line-height: ${toRem(30)};
    letter-spacing: 0px;
`;

const h3Css = css`
    font-family: ${fontFamily};
    font-size: ${toRem(18)};
    font-weight: 400;
    line-height: ${toRem(24)};
    letter-spacing: 0px;
`;

const h4Css = css`
    font-family: ${fontFamily};
    font-size: ${toRem(16)};
    font-weight: 500;
    line-height: ${toRem(24)};
    letter-spacing: 0px;
`;

const h5Css = css`
    font-family: ${fontFamily};
    font-size: ${toRem(14)};
    font-weight: 500;
    line-height: ${toRem(20)};
    letter-spacing: 0px;
`;

const h6Css = css`
    font-family: ${fontFamily};
    font-size: ${toRem(12)};
    font-weight: 700;
    line-height: ${toRem(15)};
    letter-spacing: 0px;
`;

const paragraphCss = css`
    font-family: ${fontFamily};
    font-size: ${toRem(14)};
    font-weight: normal;
    line-height: ${toRem(20)};
    letter-spacing: 0px;
`;

const typographyVariants: Record<TypographyProps['variant'], any> = {
    h1: h1Css,
    h2: h2Css,
    h3: h3Css,
    h4: h4Css,
    h5: h5Css,
    h6: h6Css,
    p: paragraphCss,
}

const Typography = styled.div<TypographyProps>`
    margin: 0;
    ${({ variant }) => variant && css`
        ${typographyVariants[variant]}
    `}
`;

export default Typography;