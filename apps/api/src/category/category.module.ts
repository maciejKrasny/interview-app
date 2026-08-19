import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./entities/category.entity";
import { CategoryService } from "./category.service";
import { QuestionModule } from "src/question/question.module";
import { CategoryResolver } from "./category.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity]), forwardRef(() => QuestionModule)],
    controllers: [],
    providers: [CategoryService, CategoryResolver],
    exports: [CategoryService]
})
export class CategoryModule { }