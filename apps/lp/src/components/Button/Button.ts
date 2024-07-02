import { toRem } from "#//styles/utils/calc";
import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    font-weight: 500;
    font-size: ${toRem(14)};
    outline: none;
    border: none;
    cursor: pointer;
`;

export default Button;