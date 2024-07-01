import { PropsWithChildren } from "react";

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TypographyProps extends PropsWithChildren {
    variant: TypographyVariant;
}