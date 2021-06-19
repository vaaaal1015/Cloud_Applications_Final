import React from "react";
import VotList from "./components/VotList"
import Bar from "../components/Bar"

const HomePage = () => {
    const listData = [1, 2, 3, 4, 5]
    return (
        <React.Fragment>
            <Bar />
            <VotList listData={listData} />
        </React.Fragment>
    );
}

export default HomePage;