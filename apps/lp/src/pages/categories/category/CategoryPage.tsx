import { GET_CATEGORIES_WITH_QUESTIONS, GET_CATEGORIES_WITH_QUESTIONS_DATA } from '#//api/queries/getCategoriesWithQuestions';
import Loader from '#//components/Loader/Loader';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
    const { id } = useParams();

    const { loading, data } = useQuery<GET_CATEGORIES_WITH_QUESTIONS_DATA>(GET_CATEGORIES_WITH_QUESTIONS, {
        variables: {
            id: id,
        }
    });

    console.log(data);

    if (loading) {
        return <Loader />
    }

    if (!data) {
        return <>Not Found</>
    }

    return (
        <>
            {data.category.name}
        </>
    )
}

export default CategoryPage;