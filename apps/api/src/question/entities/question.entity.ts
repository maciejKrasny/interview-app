import { CategoryEntity } from "../../category/entities/category.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum QuestionLearningStatus {
    TODO = 'TODO',
    PART = 'PART',
    DONE = 'DONE',
}

@Entity('Question')
export class QuestionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    creationDate: Date;

    @Column({
        type: 'text',
    })
    textPolish: string;

    @Column({
        type: 'text',
    })
    textEnglish: string;

    @Column({
        type: 'text'
    })
    answerPolish: string;

    @Column({
        type: 'text',
    })
    answerEnglish: string;

    @Column({
        type: 'enum',
        enum: QuestionLearningStatus,
        default: QuestionLearningStatus.TODO,
    })
    learningStatus: QuestionLearningStatus;

    @ManyToOne(() => CategoryEntity, category => category.id)
    category: CategoryEntity;
}