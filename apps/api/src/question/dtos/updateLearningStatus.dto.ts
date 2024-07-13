import { IsEnum } from "class-validator";
import { QuestionLearningStatus } from "../entities/question.entity";
import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class UpdateLearningStatusDto {
    @Field()
    @IsEnum(QuestionLearningStatus)
    learningStatus: QuestionLearningStatus
}