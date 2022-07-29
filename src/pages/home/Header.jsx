import { useDispatch } from "react-redux";

import styled from "@emotion/styled";

import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

import { openModal } from "@actions/products/modal";

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 50px 0;
`;

const Title = styled.h2`
    color: ${grey[800]};
`;

const Header = () => {
    const dispatch = useDispatch();

    const handleModal = () => {
        dispatch(openModal());
    };

    return (
        <Container>
            <Title>Listado de productos</Title>

            <Button
                variant="contained"
                size="large"
                aria-label="nuevo producto"
                onClick={handleModal}
            >
                Nuevo Producto
            </Button>
        </Container>
    );
};

export default Header;
