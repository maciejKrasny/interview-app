import GoIcon from "../Icons/GoIcon";
import { Container, Description, GoIconContainer, TextContainer, Title } from "./Tile.styled"
import { TileProps } from "./Tile.types"

const Tile: React.FC<TileProps> = ({ title, onClick }) => {
    return (
        <Container onClick={() => onClick()}>
            <TextContainer>
                <Title variant="h1">{title}</Title>
                <Description></Description>
            </TextContainer>
            <GoIconContainer>
                <GoIcon />
            </GoIconContainer>
        </Container>
    )
}

export default Tile;