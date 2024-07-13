export interface Question {
    id: string;
    textPolish: string;
    textEnglish: string;
    answerPolish: string;
    answerEnglish: string;
    learningStatus: LearningStatus;
}

export enum LearningStatus {
    TODO = 'TODO',
    PART = 'PART',
    DONE = 'DONE'
}