import { ReactElement } from "react";
import CategoriesPage from "../pages/categories";
import CategoryPage from "../pages/categories/category/CategoryPage";
import QuestionPage from "../pages/question";

interface NavigationProps {
    path: string;
    element: ReactElement;
}

const NavigationItems: NavigationProps[] = [
    {
        path: '/',
        element: <CategoriesPage />
    },
    {
        path: '/:id',
        element: <CategoryPage />
    },
    {
        path: '/question/add',
        element: <QuestionPage />
    }
];

export default NavigationItems;
