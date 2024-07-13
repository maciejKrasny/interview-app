import { Question } from "#//models/Question";
import { gql } from "@apollo/client";

export const ADD_QUESTION = gql`
    mutation AddQuestion($createQuestionDto: CreateQuestionDto!){
    createQuestion(createQuestionDto: $createQuestionDto) {
        id
    }
    }
`;

export interface QuestionWithCategory extends Omit<Question, 'id'> {
    categoryId: string;
}

export interface ADD_QUESTION_PARAMS {
    createQuestionDto: QuestionWithCategory;
}