import React from "react";
import VotCard from "./VotCard";

const VotList = ({ listData }) => {
    return (
        <React.Fragment>
            {listData.map((id) => {
                return (
                    <VotCard key={id} />
                );
            })}
        </React.Fragment >
    );
};

export default VotList;