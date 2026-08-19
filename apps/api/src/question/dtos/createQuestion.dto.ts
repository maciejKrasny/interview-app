import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class CreateQuestionDto {
    @MinLength(10)
    @Field()
    textPolish: string;

    @MinLength(10)
    @Field()
    textEnglish: string;

    @MinLength(10)
    @Field()
    answerPolish: string;

    @MinLength(10)
    @Field()
    answerEnglish: string;

    @IsNotEmpty()
    @Field()
    categoryId: string;
}