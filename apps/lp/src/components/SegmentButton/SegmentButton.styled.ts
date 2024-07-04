import { toRem } from "#//styles/utils/calc";
import styled, { css } from "styled-components";

interface StyledButtonProps {
    $active: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
    padding: ${toRem(6)} 0.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    border-right: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
    }

    &:last-child {
        border-right: ${({ theme }) => `1px solid ${theme.colors.primary}`};
        border-radius: 0 0.25rem 0.25rem 0;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.outlineHover};
    }
    
    ${({ $active }) => $active && css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.background};

        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
        }
    `}

`;