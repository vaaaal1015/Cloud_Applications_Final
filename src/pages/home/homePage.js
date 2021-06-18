import React from "react";
import Introduction from "./components/Introduction";
import VotList from "./components/VotList"
import Bar from "../components/Bar"

const HomePage = () => {
    const listData = [1, 2, 3, 4, 5]
    return (
        <React.Fragment>
            <Introduction />
            <Bar />
            <VotList listData={listData} />
        </React.Fragment>
    );
}

export default HomePage;