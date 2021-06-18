import React from "react";
import { Card } from "react-bootstrap";

const VotCard = () => {

    const [cardStyle, setCardStyle] = React.useState({
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "30px",
        transition: "0.3s",
        width: "80%",
    })

    function down() {
        setCardStyle({
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "30px",
            transition: "0.3s",
            width: "80%",
        })
    }
    function up() {
        setCardStyle({
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "30px",
            transition: "0.3s",
            width: "80%",
            boxShadow: "4px 8px 16px 0 rgba(0, 0, 0, 0.5)",
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
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </React.Fragment >
    );
};

export default VotCard;