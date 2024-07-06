import { Category } from "#//models/Category";
import { gql } from "@apollo/client";


export const GET_CATEGORY = gql`
    query GetCategory($id: String!) {
        category(id: $id) {
            ...CategoriesFragment
        }
    }
`;

export interface GET_CATEGORY_DATA {
    category: Omit<Category, 'questions'>;
}
