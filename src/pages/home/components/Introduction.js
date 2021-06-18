import { Jumbotron, Container } from "react-bootstrap";
import React from "react";

const Introduction = () => {
    return (
        <React.Fragment>
            <Jumbotron
                fluid

                style={{
                    marginBottom: 0,
                    height: "auto"
                }}
            >
                <Container>
                    <p style={{ fontSize: 100 }}>
                        投票
                    </p>
                    <p style={{ fontSize: 50 }}>
                        這是世界上最棒的投票網站
                    </p>
                    <p style={{ fontSize: 20 }}>
                        190-2 雲端實務
                    </p>
                </Container>
            </Jumbotron>
        </React.Fragment>
    );
};

export default Introduction;