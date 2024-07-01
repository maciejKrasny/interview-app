import { gql } from "@apollo/client";
import { Category } from "../../models/Category";

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            ...CategoriesFragment
        }
    }
`;

export interface GET_CATEGORIES_DATA {
    categories: Omit<Category, 'questions'>[];
}