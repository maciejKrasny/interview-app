import Queries from "#//api/queries";
import { GET_CATEGORIES_DATA } from "#//api/queries/getCategories";
import Loader from "#//components/Loader/Loader";
import Tile from "#//components/Tile/Tile";
import { useQuery } from "@apollo/client";
import React from "react";
import { CategoriesContainer } from "./CategoriesPage.styled";
import { useNavigate } from "react-router-dom";


const CategoriesPage: React.FC = () => {
    const navigation = useNavigate();
    const { loading, data } = useQuery<GET_CATEGORIES_DATA>(Queries.GET_CATEGORIES)

    const handleOnClick = (id: string) => {
        navigation(`/${id}`)
    }

    if (loading) {
        <Loader />
    }

    return (
        <CategoriesContainer>
            {data?.categories.map((category) => <Tile title={category.name} description="" onClick={() => handleOnClick(category.id)} key={category.name} />)}
        </CategoriesContainer>
    );
}

export default CategoriesPage;