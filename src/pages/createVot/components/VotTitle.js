import React from "react";
import { Form } from "react-bootstrap";


const VotTitle = ({ text, setTitle }) => {
    function titleChange(event) {
        setTitle(event.target.value)
    }

    return (
        <React.Fragment>
            <Form.Group className="mb-3">
                <Form.Label><h1>投票標題</h1></Form.Label>
                <Form.Control value={text} onChange={titleChange} size="lg" className="myFont" type="text" placeholder="我是標題" />
            </Form.Group>
        </React.Fragment>
    );
};

export default VotTitle;