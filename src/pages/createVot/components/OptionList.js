import React from "react";
import VotOption from "./VotOption"

const OptionList = ({ options, setOptions }) => {
    return (
        <React.Fragment>
            {options.map((text, index) => {
                return (
                    <VotOption key={index} index={index} text={text} setOptions={setOptions} />
                );
            })}
        </React.Fragment>
    );
};

export default OptionList;