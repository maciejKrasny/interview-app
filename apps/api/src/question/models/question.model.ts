import { Field, ObjectType } from "@nestjs/graphql";
import { QuestionLearningStatus } from "../entities/question.entity";
import { Category } from "src/category/models/category.model";

@ObjectType()
export class Question {
    @Field()
    id: string;

    @Field()
    creationDate: Date;

    @Field()

    textPolish: string;

    @Field()
    textEnglish: string;

    @Field()
    answerPolish: string;

    @Field()
    answerEnglish: string;

    @Field()
    learningStatus: QuestionLearningStatus;

    @Field(() => Category)
    category: Category;
}