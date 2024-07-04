import SegmentButton from "#//components/SegmentButton/SegmentButton";
import { useState } from "react"
import { AnswerContainer } from "./CategoryPage.styled";
import { ReadOnlyContainer } from "#//components/RichTextEditor/RichTextEditor.styled";

const DEFAULT_SEGMENT_VALUE = 'PL';

interface AccordionBodyProps {
    answerPolish: string;
    answerEnglish: string;
}

const AccordionBody: React.FC<AccordionBodyProps> = ({ answerPolish, answerEnglish }) => {
    const [selectedSegment, setSelectedSegment] = useState<'PL' | 'EN'>(DEFAULT_SEGMENT_VALUE);

    const handleOnSegmentClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.value);
        setSelectedSegment(event.currentTarget.value as 'PL' | 'EN');
    }

    const body = selectedSegment === 'PL' ? answerPolish : answerEnglish;

    return (
        <p>
            <SegmentButton active={selectedSegment} segments={['PL', 'EN']} onClick={handleOnSegmentClick} />
            <AnswerContainer>
                <ReadOnlyContainer dangerouslySetInnerHTML={{ __html: body }}>
                </ReadOnlyContainer>
            </AnswerContainer>
        </p>
    )
}

export default AccordionBody;