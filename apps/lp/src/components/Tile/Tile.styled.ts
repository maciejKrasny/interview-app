import styled from "styled-components";
import Typography from "#//components/Typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem 1.5rem 2rem;
    border-radius: 0.5rem;
    border: ${({ theme }) => `1px solid ${theme.colors.border}`};
    box-shadow: ${({ theme }) => `4px 8px 24px -1px ${theme.colors.border}`};
    cursor: pointer;

    &:hover {
        box-shadow: ${({ theme }) => `4px 8px 24px 6px ${theme.colors.border}`};
    }

    &:active {
        box-shadow: ${({ theme }) => `4px 8px 24px 10px ${theme.colors.border}`};
    }
`;

export const Title = styled(Typography)`
    color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.span`

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const GoIconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    & > svg {
        width: 3rem;
        height: 3rem;
        color: ${({ theme }) => theme.colors.primary};
    }
`;