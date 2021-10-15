import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutStyles = styled.div`

    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "header"
            "body"
            "footer";
    }

  .section-1 { grid-area: header; }

  .section-2 { grid-area: body; }

  .section-3 { grid-area: footer; }

`;

const Layout = ({ children }) => {

    return (
        <LayoutStyles>
            <GlobalStyles />
            <section className="container">
                <div className="header">
                    <Header />
                </div>
                <div className="body">
                    {children}
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </section>
        </LayoutStyles>
    )
}

export default Layout;
