import { gql } from "@apollo/client";

export const QuestionsFragment = gql`
    fragment QuestionsFragment on Question {
        id
        creationDate
        textPolish
        textEnglish
        answerPolish
        answerEnglish
    } 
`