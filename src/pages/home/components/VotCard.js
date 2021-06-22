import React from "react";
import { Card } from "react-bootstrap";

const VotCard = () => {

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

    function click() {
        console.log("click");
    }

    return (
        <React.Fragment>
            <Card
                bg="dark"
                text="white"
                style={cardStyle}
                onMouseEnter={up}
                onMouseLeave={down}
                onClick={click}
                className="myFont"
            >
                {/* <Card.Header>id</Card.Header> */}
                <Card.Body>
                    <Card.Text style={{ fontSize: "25px", padding: "45px 25px" }}>
                        這網站超讚
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment >
    );
};

export default VotCard;