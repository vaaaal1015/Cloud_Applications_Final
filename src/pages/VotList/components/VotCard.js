import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const VotCard = ({ id, title }) => {
    const history = useHistory();

    const routeChange = () => {
        const path = "vot/" + id;
        history.push(path);
    }

    const [cardStyle, setCardStyle] = React.useState({
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "30px",
        transition: "0.5s",
        maxWidth: "800px",
    })

    function down() {
        setCardStyle((prev) => {
            return { ...prev, boxShadow: "", transform: "translateY(0px)" }
        })
    }
    function up() {
        setCardStyle((prev) => {
            return { ...prev, boxShadow: "8px 16px 16px rgba(0, 0, 0, 0.5)", transform: "translateY(-8px)" }
        })
    }

    return (
        <React.Fragment>
            <Card
                bg="dark"
                text="white"
                style={cardStyle}
                onMouseEnter={up}
                onMouseLeave={down}
                onClick={routeChange}
                className="myFont"
            >
                {/* <Card.Header>{id}</Card.Header> */}
                <Card.Body>
                    <Card.Text style={{ fontSize: "25px", padding: "45px 25px" }}>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment >
    );
};

export default VotCard;