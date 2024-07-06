import { GET_CATEGORIES, GET_CATEGORIES_DATA } from "#//api/queries/getCategories";
import { BackAndTitleContainer, CenterContainer, Container, Title } from "./Menu.styled";
import useMenuProps from "./useMenuProps";

const Menu: React.FC = () => {
    const { backIcon, title, addIcon } = useMenuProps();

    return (
        <CenterContainer>
            <Container>
                <BackAndTitleContainer>
                    {backIcon}
                    <Title $variant="h2">{title}</Title>
                </BackAndTitleContainer>
                {addIcon}
            </Container>
        </CenterContainer>
    );
}

export default Menu;