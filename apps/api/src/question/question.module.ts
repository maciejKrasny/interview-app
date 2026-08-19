import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionEntity } from "./entities/question.entity";
import { QuestionService } from "./question.service";
import { QuestionResolver } from "./question.resolver";
import { CategoryModule } from "src/category/category.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([QuestionEntity]),
        forwardRef(() => CategoryModule),
    ],
    controllers: [],
    providers: [QuestionService, QuestionResolver],
    exports: [QuestionService]
})
export class QuestionModule { }