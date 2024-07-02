import { toRem } from "#//styles/utils/calc";
import styled from "styled-components";

export const Label = styled.label`
    display: block;
    padding-bottom: 0.25rem;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 0.25rem ${toRem(6)};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.body};
    outline: none;

    transition: border 0.2s ease-in-out;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;