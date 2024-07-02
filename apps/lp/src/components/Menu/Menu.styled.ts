import styled from "styled-components";
import Typography from "../Typography";
import { toRem } from "#//styles/utils/calc";

export const CenterContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.primary}`};
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    gap: 1rem;
    height: 5rem;
    width: 100%;
    max-width: ${toRem(1024)};
    padding: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    & svg {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }
`;

export const BackAndTitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;


`

export const Title = styled(Typography)``;