import { GET_CATEGORIES_WITH_QUESTIONS, GET_CATEGORIES_WITH_QUESTIONS_DATA } from '#//api/queries/getCategoriesWithQuestions';
import Loader from '#//components/Loader/Loader';
import withMenu from '#//utils/withMenu.hoc';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QuestionsContainer } from './CategoryPage.styled';
import Accordion from '#//components/Accordion/Accordion';

const CategoryPage: React.FC = () => {
    const { id } = useParams();

    const { loading, data } = useQuery<GET_CATEGORIES_WITH_QUESTIONS_DATA>(GET_CATEGORIES_WITH_QUESTIONS, {
        variables: {
            id: id,
        }
    });

    if (loading) {
        return (
            <QuestionsContainer>
                <Loader />
            </QuestionsContainer>
        )
    }

    if (!data) {
        return <>Not Found</>
    }

    return (
        <QuestionsContainer>
            {data.category.questions.map(({ id, textPolish, textEnglish, answerPolish }) => <Accordion key={id} body={<p>{answerPolish}</p>} title={textPolish} secordaryTitle={textEnglish} />)}
        </QuestionsContainer>
    )
}

export default withMenu(CategoryPage);