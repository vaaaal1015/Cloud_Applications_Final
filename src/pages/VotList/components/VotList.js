import React from "react";
import VotCard from "./VotCard";

const VotList = ({ listData }) => {
    return (
        <React.Fragment>
            {listData.map((item, index) => {
                return (
                    <VotCard key={index} id={item.id} title={item.title} />
                );
            })}
        </React.Fragment >
    );
};

export default VotList;