import Loader from '#//components/Loader/Loader';
import withMenu from '#//utils/withMenu.hoc';
import { useParams } from 'react-router-dom';
import { QuestionsContainer } from './CategoryPage.styled';
import Accordion from '#//components/Accordion/Accordion';
import AccordionBody from './AccordionBody';
import { useAppDispatch, useAppSelector } from '#//redux/hooks';
import { MouseEventHandler, useEffect, useState } from 'react';
import { fetchCategory } from '#//redux/slices/category.slice';
import SegmentButton from '#//components/SegmentButton/SegmentButton';

const CategoryPage: React.FC = () => {
    const { id } = useParams();
    const [status, setStatus] = useState<string>('ALL');

    const dispatch = useAppDispatch();
    const { category, loading } = useAppSelector(state => state.categories)

    const handleOnStatusChange: MouseEventHandler<HTMLButtonElement> = (event) => {
        const currentStatus = event.currentTarget.value;
        setStatus(currentStatus);
    }

    useEffect(() => {
        dispatch(fetchCategory({ id }))
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
            <SegmentButton active={status} segments={['ALL', 'TODO', 'PART', 'DONE']} onClick={handleOnStatusChange} />
            <div>
                {category.questions.filter(({ learningStatus }) => status !== 'ALL' ? learningStatus === status : true).map(({ id: questionId, textPolish, textEnglish, answerPolish, answerEnglish, learningStatus }) => (
                    <Accordion
                        status={learningStatus}
                        key={questionId}
                        body={<AccordionBody id={questionId} status={learningStatus} answerEnglish={answerEnglish} answerPolish={answerPolish} />}
                        title={textPolish}
                        secordaryTitle={textEnglish}
                    />
                ))}
            </div>
        </QuestionsContainer>
    )
}

export default withMenu(CategoryPage);