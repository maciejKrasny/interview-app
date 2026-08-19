import { toRem } from "#//styles/utils/calc";
import styled from "styled-components";

export const PageContainer = styled.div`
    max-width: ${toRem(1024)};
    margin: 0 auto;
`;

export const CategoriesContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100vh;
    gap: 1rem;
    padding: 6rem 1rem 2rem;
`;