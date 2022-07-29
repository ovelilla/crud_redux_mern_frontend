import { useState } from "react";

import styled from "@emotion/styled";

import Header from "@pages/home/Header";
import Products from "@/pages/home/Products";
import Modal from "@pages/home/Modal";
import Menu from "@pages/home/Menu";
import Dialog from "@pages/home/Dialog";

const Main = styled.main``;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Index = () => {
    const [menu, setMenu] = useState({ open: false, anchorEl: null });

    return (
        <>
            <Main>
                <Container>
                    <Header />
                    <Products setMenu={setMenu} />
                    <Modal />
                    <Menu menu={menu} setMenu={setMenu} />
                    <Dialog />
                </Container>
            </Main>
        </>
    );
};

export default Index;
