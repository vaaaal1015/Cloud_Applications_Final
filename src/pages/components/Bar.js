import { Nav, Navbar } from "react-bootstrap";
import React from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar
                className="myFont" sticky="top" variant="dark" bg="dark" style={{ height: 100, marginBottom: 30, fontSize: 30, }}>
                <Nav className="mr-auto">
                    <Nav.Link href="/" style={{ marginRight: "15px" }}>首頁</Nav.Link>
                    <Nav.Link href="/list" style={{ marginRight: "15px" }}>投票清單</Nav.Link>
                    <Nav.Link href="/create" style={{ marginRight: "15px" }}>建立投票</Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment >
    );
};

export default Header;