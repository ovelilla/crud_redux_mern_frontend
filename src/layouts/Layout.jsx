import { Outlet } from "react-router-dom";

import Header from "@components/ui/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
