import Loader from "#//components/Loader/Loader";
import Tile from "#//components/Tile/Tile";
import React, { useEffect } from "react";
import { CategoriesContainer, PageContainer } from "./CategoriesPage.styled";
import { useNavigate } from "react-router-dom";
import withMenu from "#//utils/withMenu.hoc";
import { useAppDispatch, useAppSelector } from "#//redux/hooks";
import { fetchCategories } from "#//redux/slices/category.slice";


const CategoriesPage: React.FC = () => {
    const navigation = useNavigate();
    const dispatch = useAppDispatch();

    const { categories, loading } = useAppSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    const handleOnClick = (id: string) => {
        navigation(`/${id}`)
    }

    if (loading === 'pending') {
        return <Loader />;
    }
    return (
        <PageContainer>
            <CategoriesContainer>
                {categories.map((category) => <Tile title={category.name} description="" onClick={() => handleOnClick(category.id)} key={category.name} />)}
            </CategoriesContainer>
        </PageContainer>
    );
}

export default withMenu(CategoriesPage);