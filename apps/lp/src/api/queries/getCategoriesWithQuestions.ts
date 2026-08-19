import { Category } from "#//models/Category";
import { gql } from "@apollo/client";


export const GET_CATEGORIES_WITH_QUESTIONS = gql`
    query GetCategoryWithQestionForStatus($id: String!, $learningStatus: String) {
        category(id:$id) {
            ...CategoriesFragment,
            questions(learningStatus: $learningStatus) {
                ...QuestionsFragment
            }
        }
    }
`;

export interface GET_CATEGORIES_WITH_QUESTIONS_DATA {
    category: Category;
}
