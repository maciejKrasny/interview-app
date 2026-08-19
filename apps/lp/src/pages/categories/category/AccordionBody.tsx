import SegmentButton from "#//components/SegmentButton/SegmentButton";
import { useState } from "react"
import { AccordionBodyHeader, AnswerContainer } from "./CategoryPage.styled";
import { ReadOnlyContainer } from "#//components/RichTextEditor/RichTextEditor.styled";
import StatusRadio from "./StatusRadio";
import { LearningStatus } from "#//models/Question";
import { useAppDispatch } from "#//redux/hooks";
import { updateLearningStatusQuestion } from "#//redux/slices/category.slice";
import { UPDATE_LEARNING_STATUS_PARAMS } from "#//api/mutations/updateLearningStatus";

const DEFAULT_SEGMENT_VALUE = 'PL';

interface AccordionBodyProps {
    answerPolish: string;
    answerEnglish: string;
    status: LearningStatus;
    id: string;
}

const AccordionBody: React.FC<AccordionBodyProps> = ({ answerPolish, answerEnglish, status, id }) => {
    const dispatch = useAppDispatch();
    const [selectedSegment, setSelectedSegment] = useState<'PL' | 'EN'>(DEFAULT_SEGMENT_VALUE);

    const handleOnSegmentClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedSegment(event.currentTarget.value as 'PL' | 'EN');
    }

    const body = selectedSegment === 'PL' ? answerPolish : answerEnglish;

    const handleOnStatusChange = (value: LearningStatus) => {
        if (value === status) {
            return;
        }

        const updateBody: UPDATE_LEARNING_STATUS_PARAMS = {
            id,
            updateLearningStatusDto: {
                learningStatus: value
            }
        }
        dispatch(updateLearningStatusQuestion(updateBody))
    }

    return (
        <div>
            <AccordionBodyHeader>
                <SegmentButton active={selectedSegment} segments={['PL', 'EN']} onClick={handleOnSegmentClick} />
                <StatusRadio active={status} onClick={handleOnStatusChange} />
            </AccordionBodyHeader>
            <AnswerContainer>
                <ReadOnlyContainer dangerouslySetInnerHTML={{ __html: body }}>
                </ReadOnlyContainer>
            </AnswerContainer>
        </div>
    )
}

export default AccordionBody;