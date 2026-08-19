import styled, { css } from "styled-components";
import Typography from "../Typography";

export const Container = styled.div`
    position: relative;
    box-shadow: ${({ theme }) => `4px 8px 24px -1px ${theme.colors.border}`};
    border-radius: 0.5rem;
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    background: ${({ theme }) => theme.colors.background};
    overflow: hidden;
    margin-bottom: 1rem;
`;

export const Header = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    border-width: 0;
    background: ${({ theme }) => theme.colors.background};
    cursor: pointer;

`;

export const Title = styled(Typography)`
    text-align: left;

`;

export const SecondaryTitle = styled(Typography)`
    margin-inline-start: 0.5rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.secondary};
`;

interface OpenContainerProps {
    open: boolean;
}

export const OpenIconContainer = styled.div<OpenContainerProps>`
    transition: transform 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.primary};
    transform: rotate(180deg);

    & > svg {
        width: 2rem;
        height: 2rem;
    }

    ${({ open }) => open && css`
        transform: rotate(0);
    `}
`;

export const Body = styled.div<OpenContainerProps>`
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.2s ease-in-out;
    padding-inline: 1rem;
    box-sizing: border-box;

    ${({ open }) => open && css`
        grid-template-rows: 1fr;
    `}

    & > div {
        overflow: hidden;
    }

    & > div > * {
        margin-top: 0;
        margin-bottom: 1rem;
    }
`;

export const StatusAndIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

interface StatusContainerProps {
    $color: string;
}

export const StatusContainer = styled.div<StatusContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 12px;
    ${({ $color }) => $color && css`
        color: ${$color};
    `}

    svg {
        width: 1rem;
        height: 1rem;
    }
`;

