import React, { useEffect, useState } from "react";
import Bar from "../components/Bar"
import Result from "./components/result"
import { useParams } from "react-router-dom";
import { API_GET_RESULT, API_GET_VOT } from "../../global/constants";

async function fetchData(setSelect, id) {
    const res = await fetch(`${API_GET_RESULT}/${id}`)
    const data = await res.json()
    setSelect(data);
}

async function fetchVot(setVot, id) {
    const res = await fetch(`${API_GET_VOT}/${id}`)
    const data = await res.json()
    setVot(data);
}

const VotResult = () => {
    let { id } = useParams();
    const [select, setSelect] = useState([])
    const [vot, setVot] = useState({ title: "", option: [] })
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetchData(setSelect, parseInt(id, 10));
    }, []);

    useEffect(() => {
        fetchVot(setVot, parseInt(id, 10));
    }, []);

    useEffect(() => {
        let tmp = 0;
        for (let i = 0; i < select.length; i++) {
            tmp += select[i];
        }
        setTotal(tmp);
    }, [select]);


    return (
        <React.Fragment>
            <Bar />
            <Result title={vot.title} option={vot.option} select={select} total={total} />
        </React.Fragment>
    );
};

export default VotResult;