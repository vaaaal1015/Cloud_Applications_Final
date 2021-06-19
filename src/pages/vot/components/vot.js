import React from "react"
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap"
import { API_GET_DATA } from "../../../global/constants"

const Vot = () => {
    const [title, setTitle] = useState("")
    const [options, setOptions] = useState([])

    async function fetchData() {
        const res = await fetch(API_GET_DATA)
        const item = await res.json()
        setTitle(item[0].title)
        setOptions(item[0].options)
        // console.log(item[0].title)
        // console.log(item[0].options)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <React.Fragment>
            <Card style={{ width: "60%", margin: "auto", boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.5)" }}>
                <Card.Header>
                    <h1>{title}</h1>
                </Card.Header>
                <Card.Body className="text-center myFont">
                    {options.map((text, index) => {
                        return (
                            <Button key={index} size="lg" style={{ width: "70%", marginBottom: "16px" }} variant="outline-success">{text}</Button>
                        );
                    })}
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default Vot;