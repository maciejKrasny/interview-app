import { Field, ObjectType } from "@nestjs/graphql";
import { Question } from "src/question/models/question.model";

@ObjectType()
export class Category {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field(() => [Question])
    questions: Question[];
}