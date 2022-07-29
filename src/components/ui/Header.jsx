import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

const Row = styled.header`
    display: flex;
    height: 64px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;
    flex-grow: 1;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Logo = styled.h1`
    color: ${grey[800]};
`;

const Header = () => {
    return (
        <Row>
            <Container>
                <Logo>CRUD Redux</Logo>
            </Container>
        </Row>
    );
};

export default Header;
