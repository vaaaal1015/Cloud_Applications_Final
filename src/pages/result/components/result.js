import React from "react"
import { Card, ProgressBar } from "react-bootstrap"

const Result = ({ title, select, option, total }) => {
    return (
        <React.Fragment>
            <Card style={{ width: "60%", margin: "auto", boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.5)" }}>
                <Card.Header>
                    <h1>{title}</h1>
                </Card.Header>
                <Card.Body className="text-left myFont">
                    {option.map((text, index) => {
                        return (
                            <div key={index}>
                                <h4>{text}</h4>
                                <ProgressBar label={select[index] + "票"} variant="success" now={select[index]} mim={1} max={total} style={{ marginBottom: "50px", height: "50px", fontSize: "25px" }} />
                            </div>
                        );
                    })}
                </Card.Body>
            </Card>
        </React.Fragment >
    );
};

export default Result;