import { QuestionEntity } from "src/question/entities/question.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique('unique_name', ['name'])
@Entity('Category')
export class CategoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
    })
    name: string;

    @OneToMany(() => QuestionEntity, question => question.category)
    questions: QuestionEntity[];
}