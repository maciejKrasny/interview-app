import Button from "#//components/Button/Button";
import Input from "#//components/Input/Input";
import Typography from "#//components/Typography";
import withMenu from "#//utils/withMenu.hoc";
import { Container, StyledForm } from "./QuestionPage.styled";

const QuestionPage: React.FC = () => {
    return (
        <Container>
            <Typography $variant="h1">Dodaj pytanie</Typography>
            <StyledForm>
                <Input label="Pytanie po polsku" />
                <Input label="Pytanie po angielsku" />
                <Button>Zapisz</Button>
            </StyledForm>
        </Container>
    )
}

export default withMenu(QuestionPage);