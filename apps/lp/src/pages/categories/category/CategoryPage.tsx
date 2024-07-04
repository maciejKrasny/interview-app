import { GET_CATEGORIES_WITH_QUESTIONS, GET_CATEGORIES_WITH_QUESTIONS_DATA } from '#//api/queries/getCategoriesWithQuestions';
import Loader from '#//components/Loader/Loader';
import withMenu from '#//utils/withMenu.hoc';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QuestionsContainer } from './CategoryPage.styled';
import Accordion from '#//components/Accordion/Accordion';
import AccordionBody from './AccordionBody';

const CategoryPage: React.FC = () => {
    const { id } = useParams();

    const { loading, data } = useQuery<GET_CATEGORIES_WITH_QUESTIONS_DATA>(GET_CATEGORIES_WITH_QUESTIONS, {
        variables: {
            id: id,
        },
        fetchPolicy: 'no-cache',
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
            {data.category.questions.map(({ id, textPolish, textEnglish, answerPolish, answerEnglish }) => (
                <Accordion
                    key={id}
                    body={<AccordionBody answerEnglish={answerEnglish} answerPolish={answerPolish} />}
                    title={textPolish}
                    secordaryTitle={textEnglish}
                />
            ))}
        </QuestionsContainer>
    )
}

export default withMenu(CategoryPage);