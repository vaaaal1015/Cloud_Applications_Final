import React from "react"
import { Card, Button } from "react-bootstrap"

const Vot = ({ title, option, setSelect, selectStatus }) => {

    function select(event) {
        selectStatus.current = true
        setSelect(event.target.value)
    };

    return (
        <React.Fragment>
            <Card style={{ width: "60%", margin: "auto", boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.5)" }}>
                <Card.Header>
                    <h1>{title}</h1>
                </Card.Header>
                <Card.Body className="text-center myFont">
                    {option.map((text, index) => {
                        return (
                            <Button value={index + 1} key={index} onClick={select} size="lg" style={{ width: "70%", marginBottom: "16px" }} variant="outline-success">{text}</Button>
                        );
                    })}
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Vot;