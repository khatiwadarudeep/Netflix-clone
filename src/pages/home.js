import React, { Component } from "react";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
    return(
        <>
            <HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            </HeaderContainer>
        </>
    );
}