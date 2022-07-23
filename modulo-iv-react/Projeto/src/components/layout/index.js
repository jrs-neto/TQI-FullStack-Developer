import React from "react";
import { Header } from "../header";
import * as S from "./styled";

const Layout = ({children}) => {

    return(
        <S.LayoutWrapper>
            <Header />
            {children}
        </S.LayoutWrapper>
    );
};

export default Layout;