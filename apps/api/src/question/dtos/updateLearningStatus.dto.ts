import { IsEnum } from "class-validator";
import { QuestionLearningStatus } from "../entities/question.entity";

export class UpdateLearningStatus {
    @IsEnum(QuestionLearningStatus)
    learningStatus: QuestionLearningStatus
}