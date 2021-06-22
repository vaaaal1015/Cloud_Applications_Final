import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import VotTitle from "./VotTitle";
import OptionList from "./OptionList";

const VotForm = ({ setVot }) => {
    const [options, setOptions] = useState(["", ""])

    const [title, setTitle] = useState("")

    // function log() {
    //     console.log("title", title);
    //     console.log("options", options);
    // }

    function addOption() {
        setOptions((prev) => {
            return [...prev, ""]
        })
    }

    function create() {
        setVot({ title: { title }, options: { options } })
    }

    return (
        <React.Fragment>
            <Card style={{ width: "60%", margin: "auto", boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.5)" }}>
                <Card.Body>
                    <VotTitle text={title} setTitle={setTitle} />
                    <OptionList options={options} setOptions={setOptions} />
                    <Button className="myFont" size="sm" variant="outline-success" onClick={addOption} style={{ width: "auto" }}>
                        增加選項
                    </Button>
                </Card.Body>
                <Card.Footer className="text-center myFont">
                    <Button variant="success" size="lg" onClick={create} style={{ width: "80%" }}>
                        建立投票
                    </Button>
                </Card.Footer>
            </Card>
        </React.Fragment >
    );
};

export default VotForm;