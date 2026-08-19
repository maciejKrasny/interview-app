import { gql } from "@apollo/client";

export const CategoriesFragment = gql`
    fragment CategoriesFragment on Category {
        id
        name
    }
`
