import { Nav, Navbar } from "react-bootstrap";
import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar
                className="myFont" sticky="top" variant="dark" bg="dark" style={{ height: 100, marginBottom: 30, fontSize: 30, }}>
                <Nav className="mr-auto">
                    <Nav.Link>首頁</Nav.Link>
                    <Nav.Link>投票清單</Nav.Link>
                    <Nav.Link>建立投票</Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment >
    );
};

export default Header;