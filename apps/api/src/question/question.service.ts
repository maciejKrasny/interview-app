import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { QuestionEntity } from "./entities/question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "./dtos/createQuestion.dto";
import { UpdateLearningStatus } from "./dtos/updateLearningStatus.dto";

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(QuestionEntity)
        private readonly questionRepository: Repository<QuestionEntity>,
    ) { }

    async create(dto: CreateQuestionDto) {
        const { categoryId, ...question } = dto;
        return this.questionRepository.save({
            ...question,
            category: {
                id: dto.categoryId,
            }
        });
    }

    updateLearningStatus(id: string, dto: UpdateLearningStatus) {
        return this.questionRepository.update(id, dto);
    }

    getAllForCategory(categoryId: string) {
        return this.questionRepository.find({
            order: {
                creationDate: 'DESC',
            },
            where: {
                category: {
                    id: categoryId,
                }
            }
        })
    }
}