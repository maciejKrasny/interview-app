import { Bar, Bars, Container, Content, LoaderStyles } from "./Loader.styled";

const Loader: React.FC = () => {
    return (
        <Container>
            <LoaderStyles />
            <Content>
                <Bars>
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                </Bars>
                <Bars>
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                </Bars>
            </Content>
        </Container>
    )
}

export default Loader;