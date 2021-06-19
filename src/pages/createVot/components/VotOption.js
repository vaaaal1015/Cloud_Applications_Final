import React from "react";
import { Form } from "react-bootstrap";

const VotOption = ({ index, text, setOptions }) => {
    function optionChange(event) {
        setOptions((prev) => {
            return prev.map((item, itemIndex) => {
                return (index === itemIndex) ? event.target.value : item;
            });
        })
    }
    return (
        <React.Fragment>
            <Form.Group className="mb-3">
                <Form.Label className="myFont">選項{index + 1}</Form.Label>
                <Form.Control
                    className="myFont"
                    size="lg"
                    type="text"
                    value={text}
                    onChange={optionChange}
                    placeholder={"我是選項" + (index + 1)}
                />
            </Form.Group>
        </React.Fragment>
    );
};

export default VotOption;