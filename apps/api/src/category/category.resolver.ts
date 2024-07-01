import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Category } from "./models/category.model";
import { CategoryService } from "./category.service";
import { Question } from "src/question/models/question.model";
import { QuestionService } from "src/question/question.service";
import { CreateCategoryDto } from "./dtos/createCategory.dto";

@Resolver(() => Category)
export class CategoryResolver {
    constructor(
        private readonly categoryService: CategoryService,
        private readonly questionService: QuestionService,
    ) { }

    @Query(() => [Category])
    async categories() {
        return this.categoryService.getAll();
    }

    @Query(() => Category)
    async category(@Args('id') id: string) {
        return this.categoryService.getById(id);
    }

    @ResolveField(() => [Question], { name: 'questions' })
    getQuestions(@Parent() category: Category) {
        return this.questionService.getAllForCategory(category.id)
    }

    @Mutation(() => Category)
    createCategory(@Args('createCategoryDto') dto: CreateCategoryDto) {
        return this.categoryService.create(dto);
    }
}