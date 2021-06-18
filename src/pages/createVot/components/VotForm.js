import React from "react";
import { Form, Card, Button } from "react-bootstrap";

const VotForm = () => {

    return (
        <React.Fragment>
            <Card style={{ width: "80%", margin: "auto", boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.5)" }}>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                <h1>投票標題</h1>
                            </Form.Label>
                            <Form.Control type="text" placeholder="我是標題" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>選項{1}</Form.Label>
                            <Form.Control type="text" placeholder={"Password " + 1} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default VotForm;