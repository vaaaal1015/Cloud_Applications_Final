import React, { useState, useEffect, useRef } from "react";
import Bar from "../components/Bar"
import VotForm from "./components/VotForm";
import { API_POST_VOT } from "../../global/constants";

// async function fetchSetData(data) {
//     await fetch(`${API_PUT_VOT}/1`, {
//         method: "PUT",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({ title: '2222222222222222222' })
//     })
// }

async function fetchSetData(data) {
    await fetch(API_POST_VOT, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}

const CreateVot = () => {
    const [vot, setVot] = useState({});
    const submittingStatus = useRef(false);

    useEffect(() => {
        // fetchSetData();
        console.log("vot");
    }, [vot]);

    return (
        <React.Fragment>
            <Bar />
            <VotForm setVot={setVot} />
        </React.Fragment>
    );
};

export default CreateVot;