import Loader from '#//components/Loader/Loader';
import withMenu from '#//utils/withMenu.hoc';
import { useParams } from 'react-router-dom';
import { QuestionsContainer } from './CategoryPage.styled';
import Accordion from '#//components/Accordion/Accordion';
import AccordionBody from './AccordionBody';
import { useAppDispatch, useAppSelector } from '#//redux/hooks';
import { useEffect } from 'react';
import { fetchCategory } from '#//redux/slices/category.slice';

const CategoryPage: React.FC = () => {
    const { id } = useParams();

    const dispatch = useAppDispatch();
    const { category, loading } = useAppSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchCategory(id))
    }, [id])

    if (loading === 'pending') {
        return (
            <QuestionsContainer>
                <Loader />
            </QuestionsContainer>
        )
    }

    if (!category) {
        return <>Not Found</>
    }

    return (
        <QuestionsContainer>
            {category.questions.map(({ id: questionId, textPolish, textEnglish, answerPolish, answerEnglish, learningStatus }) => (
                <Accordion
                    status={learningStatus}
                    key={questionId}
                    body={<AccordionBody id={questionId} status={learningStatus} answerEnglish={answerEnglish} answerPolish={answerPolish} />}
                    title={textPolish}
                    secordaryTitle={textEnglish}
                />
            ))}
        </QuestionsContainer>
    )
}

export default withMenu(CategoryPage);