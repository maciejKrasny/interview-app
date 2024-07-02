import { ReactElement, useState } from "react";
import { Container, Header, OpenIconContainer, SecondaryTitle, Title, Body } from "./Accordion.styled";
import ChevronIcon from "../Icons/ChevronUp";

interface AccordionProps {
    title: string;
    secordaryTitle: string;
    body: ReactElement;
}

const Accordion: React.FC<AccordionProps> = ({ title, secordaryTitle, body }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((currState) => !currState);
    }

    return (
        <Container>
            <Header type="button" onClick={handleToggle}>
                <div>
                    <Title $variant="h4" as="h4">{title}</Title>
                    <SecondaryTitle $variant="p" as="p">{secordaryTitle}</SecondaryTitle>
                </div>
                <OpenIconContainer open={isOpen}>
                    <ChevronIcon />
                </OpenIconContainer>
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