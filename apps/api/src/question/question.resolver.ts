import { Args, Resolver, Query, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { Question } from "./models/question.model";
import { QuestionService } from "./question.service";
import { CreateQuestionDto } from "./dtos/createQuestion.dto";
import { Category } from "src/category/models/category.model";
import { CategoryService } from "src/category/category.service";
import { UpdateLearningStatusDto } from "./dtos/updateLearningStatus.dto";

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
    @UseGuards(AuthGuard)
    async createQuestion(@Args('createQuestionDto') dto: CreateQuestionDto) {
        return this.questionService.create(dto);
    }

    @Mutation(() => Question)
    async updateLearningStatus(@Args('id') id: string, @Args('updateLearningStatusDto') dto: UpdateLearningStatusDto) {
        return this.questionService.updateLearningStatus(id, dto);
    }

    @ResolveField(() => Category, { name: 'category' })
    async category(@Parent() data: Question) {
        return this.categoryService.getById(data.categoryId);
    }

}