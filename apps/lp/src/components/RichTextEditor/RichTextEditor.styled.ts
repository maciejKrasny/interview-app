import styled from "styled-components";

export const ReadOnlyContainer = styled.div`
    & > div > .ql-toolbar {
        display: none;
    }

    & > div > .ql-container {
        border: 0;
    }

    & > div > .ql-container > .ql-editor {
        padding: 0;
    }

    & pre {
        background-color: black;
        padding: 0.5rem;
        border-radius: 0.25rem;
        white-space: pre-wrap;
        color: white;
    }

    & img {
        max-width: 450px;
        width: 100%;
    }
`;

export const StyledLabel = styled.label`
    display: block;
    padding-bottom: 0.25rem;
`;