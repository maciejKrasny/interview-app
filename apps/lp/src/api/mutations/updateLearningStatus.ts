import { Question } from "#//models/Question";
import { gql } from "@apollo/client";

export const UPDATE_LEARNING_STATUS = gql`
    mutation UpdateLearningStatus($id: String!, $updateLearningStatusDto: UpdateLearningStatusDto!) {
      updateLearningStatus(id: $id, updateLearningStatusDto: $updateLearningStatusDto) {
            id   
            learningStatus
        }
    }
`;

export interface UPDATE_LEARNING_STATUS_DATA {
    updateLearningStatus: Pick<Question, 'id' | 'learningStatus'>;
}

export interface UPDATE_LEARNING_STATUS_PARAMS {
    id: string;
    updateLearningStatusDto: Pick<Question, 'learningStatus'>
}