import React, { useState, useEffect } from "react";
import VotList from "./components/VotList"
import Bar from "../components/Bar"
import { API_GET_LIST } from "../../global/constants";
// import { useBottomScrollListener } from 'react-bottom-scroll-listener';

const HomePage = () => {
    const [listData, setListData] = useState([]);

    // const handleOnDocumentBottom = useCallback(() => {
    //     console.log('I am at bottom! ' + Math.round(performance.now()));
    //     setListData((prev) => {
    //         return [...prev, ...prev]
    //     })
    // }, []);

    // useBottomScrollListener(handleOnDocumentBottom);

    async function fetchData() {
        const res = await fetch(API_GET_LIST)
        const list = await res.json()
        setListData(list)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <React.Fragment>
            <Bar />
            <VotList listData={listData} />
        </React.Fragment>
    );
}

export default HomePage;