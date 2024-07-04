import { gql } from "@apollo/client";

export const ADD_QUESTION = gql`
    mutation AddQuestion($createQuestionDto: CreateQuestionDto!){
    createQuestion(createQuestionDto: $createQuestionDto) {
        id
    }
    }
`;