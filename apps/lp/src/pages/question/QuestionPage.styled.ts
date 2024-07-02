import { toRem } from "#//styles/utils/calc";
import styled from "styled-components";

export const Container = styled.div`
    padding: 6rem 1rem 2rem;
    max-width: ${toRem(1024)};
    margin: 0 auto;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-block-start: 1rem;
`;