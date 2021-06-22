import React, { useState, useEffect } from "react";
import VotList from "./components/VotList"
import Bar from "../components/Bar"
import { API_GET_VOT } from "../../global/constants";

async function fetchData(setListData) {
    const res = await fetch(API_GET_VOT)
    const list = await res.json()
    setListData(list)
}

const HomePage = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetchData(setListData)
    }, [])

    return (
        <React.Fragment>
            <Bar />
            <VotList listData={listData} />
        </React.Fragment>
    );
}

export default HomePage;