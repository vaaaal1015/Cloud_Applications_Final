import React, { useEffect } from "react";
import Bar from "../components/Bar"
import Vot from "./components/vot"
import { useParams } from "react-router-dom";

const VotPage = () => {
    let { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <React.Fragment>
            <Bar />
            <Vot />
        </React.Fragment>
    );
};

export default VotPage;