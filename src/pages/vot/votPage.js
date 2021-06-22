import React, { useEffect, useState, useRef } from "react";
import Bar from "../components/Bar"
import Vot from "./components/vot"
import { useParams } from "react-router-dom";
import { API_GET_VOT, API_POST_VOTING } from "../../global/constants";

async function fetchData(setVot, id) {
    const res = await fetch(`${API_GET_VOT}/${id}`)
    const data = await res.json()
    setVot(data);
}

async function fetchSetData(id, select) {
    await fetch(API_POST_VOTING, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ id: id, select: select })
    })
}

const VotPage = () => {
    let { id } = useParams();
    const [vot, setVot] = useState({ title: "", option: [] })
    const [select, setSelect] = useState(0);
    const selectStatus = useRef(false);

    useEffect(() => {
        fetchData(setVot, id);
    }, [id]);

    useEffect(() => {
        if (selectStatus.current) {
            fetchSetData(parseInt(id, 10), parseInt(select, 10)).then(() => {
                console.log(select);
            })
        }
    }, [id, select])

    return (
        <React.Fragment>
            <Bar />
            <Vot title={vot.title} option={vot.option} setSelect={setSelect} selectStatus={selectStatus} />
        </React.Fragment>
    );
};

export default VotPage;