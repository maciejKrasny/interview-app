import { Args, Resolver, Query, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { Question } from "./models/question.model";
import { QuestionService } from "./question.service";
import { CreateQuestionDto } from "./dtos/createQuestion.dto";
import { Category } from "src/category/models/category.model";
import { CategoryService } from "src/category/category.service";

@Resolver(() => Question)
export class QuestionResolver {
    constructor(
        private readonly questionService: QuestionService,
        private readonly categoryService: CategoryService,
    ) { }

    @Query(() => [Question])
    async questionsByCategory(@Args('categoryId') id: string) {
        return this.questionService.getAllForCategory(id);
    }

    @Mutation(() => Question)
    async createQuestion(@Args('createQuestionDto') dto: CreateQuestionDto) {
        return this.questionService.create(dto);
    }

    @ResolveField(() => Category)
    async category(@Parent() categoryData: Category) {
        return this.categoryService.getById(categoryData.id);
    }

}