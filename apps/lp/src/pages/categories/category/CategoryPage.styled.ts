import { toRem } from "#//styles/utils/calc";
import styled, { css } from "styled-components";

export const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 6rem 1rem 2rem;
    max-width: ${toRem(1024)};
    gap: 1rem;
`;

export const AnswerContainer = styled.div`
    margin-block-start: 1rem;
`;

export const AccordionBodyHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StatusesContainer = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.disabled};
    gap: 1rem;
`;

interface StatusProps {
    $color?: string;
}

export const Status = styled.label<StatusProps>`
    display: flex;
    gap: 0.25rem;
    font-size: 14px;
    cursor: pointer;

    ${({ $color }) => $color && css`
        color: ${$color};
    `}

    svg {
        width: 1rem;
        height: 1rem;
    }
`;