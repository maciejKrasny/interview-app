import { ReactElement, useState } from "react";
import { Container, Header, OpenIconContainer, SecondaryTitle, Title, Body, StatusContainer, StatusAndIconContainer } from "./Accordion.styled";
import ChevronIcon from "../Icons/ChevronUp";
import { LearningStatus } from "#//models/Question";
import { theme } from "#//styles/theme/theme";
import TodoIcon from "../Icons/TodoIcon";
import PartIcon from "../Icons/PartIcon";
import DoneIcon from "../Icons/DoneIcon";

interface AccordionProps {
    title: string;
    secordaryTitle: string;
    body: ReactElement;
    status: LearningStatus;
}

interface StatusParams {
    color: string;
    icon: ReactElement;
    label: string;
}

const statusMap: Record<LearningStatus, StatusParams> = {
    [LearningStatus.TODO]: {
        color: theme.colors.light.secondary,
        icon: <TodoIcon />,
        label: 'Todo',
    },
    [LearningStatus.PART]: {
        color: theme.colors.light.accent,
        icon: <PartIcon />,
        label: 'In Progress',
    },
    [LearningStatus.DONE]: {
        color: theme.colors.light.success,
        icon: <DoneIcon />,
        label: 'Done',
    },
}

const Accordion: React.FC<AccordionProps> = ({ title, secordaryTitle, body, status }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((currState) => !currState);
    }

    const { icon, label, color } = statusMap[status]

    return (
        <Container>
            <Header type="button" onClick={handleToggle}>
                <div>
                    <Title $variant="h4" as="h4">{title}</Title>
                    <SecondaryTitle $variant="p" as="p">{secordaryTitle}</SecondaryTitle>
                </div>
                <StatusAndIconContainer>
                    <StatusContainer $color={color}>{label}{icon}</StatusContainer>
                    <OpenIconContainer open={isOpen}>
                        <ChevronIcon />
                    </OpenIconContainer>
                </StatusAndIconContainer>
            </Header>
            <Body open={isOpen}>
                <div>
                    {body}
                </div>
            </Body>
        </Container>
    )
}

export default Accordion;