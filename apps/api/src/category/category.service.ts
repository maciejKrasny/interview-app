import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CategoryEntity } from "./entities/category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCategoryDto } from "./dtos/createCategory.dto";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>
    ) { }

    create(dto: CreateCategoryDto) {
        return this.categoryRepository.save(dto);
    }

    getAll() {
        return this.categoryRepository.find();
    }

    getById(id: string) {
        return this.categoryRepository.findOneBy({
            id,
        });
    }
}