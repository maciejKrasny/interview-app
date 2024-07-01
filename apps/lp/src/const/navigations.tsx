import { ReactElement } from "react";
import CategoriesPage from "../pages/categories";
import CategoryPage from "../pages/categories/category/CategoryPage";

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
    }
];

export default NavigationItems;
