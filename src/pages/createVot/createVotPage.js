import React, { useState, useEffect, useRef } from "react";
import Bar from "../components/Bar"
import VotForm from "./components/VotForm";
import { API_POST_VOT } from "../../global/constants";
import { useHistory } from "react-router-dom";

async function fetchSetData(data) {
    await fetch(API_POST_VOT, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title: data.title, option: data.option })
        // body: JSON.stringify({ data })
    })
}

const CreateVot = () => {
    const [vot, setVot] = useState({});

    const submittingStatus = useRef(false);
    const history = useHistory();

    const routeChange = () => {
        history.push("/list");
    }

    useEffect(() => {
        if (submittingStatus.current) {
            fetchSetData(vot).then(routeChange());
        }
    }, [vot]);

    return (
        <React.Fragment>
            <Bar />
            <VotForm setVot={setVot} submittingStatus={submittingStatus} />
        </React.Fragment>
    );
};

export default CreateVot;