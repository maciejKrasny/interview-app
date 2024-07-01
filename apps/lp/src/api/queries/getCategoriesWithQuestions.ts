import { Category } from "#//models/Category";
import { gql } from "@apollo/client";


export const GET_CATEGORIES_WITH_QUESTIONS = gql`
    query GetCategory($id: String!) {
        category(id: $id) {
            ...CategoriesFragment
            questions {
                ...QuestionsFragment
            }
        }
    }
`;

export interface GET_CATEGORIES_WITH_QUESTIONS_DATA {
    category: Category;
}
