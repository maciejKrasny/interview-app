import { Question } from "./Question";

export interface Category {
    id: string;
    name: string;
    questions: Question[];
}