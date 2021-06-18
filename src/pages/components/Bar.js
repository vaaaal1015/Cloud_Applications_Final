import { Nav, Navbar } from "react-bootstrap";
import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar
                sticky="top"
                variant="dark"
                bg="dark"
                style={{
                    height: 100,
                    marginBottom: 30,
                    fontSize: 30,
                    fontFamily: "Comic Sans MS",
                }}
            >
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Features</Nav.Link>
                    <Nav.Link>Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment >
    );
};

export default Header;