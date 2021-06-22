import React from "react";
import VotOption from "./VotOption"

const OptionList = ({ option, setOption }) => {
    return (
        <React.Fragment>
            {option.map((text, index) => {
                return (
                    <VotOption key={index} index={index} text={text} setOption={setOption} />
                );
            })}
        </React.Fragment>
    );
};

export default OptionList;