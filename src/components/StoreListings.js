import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

export default function StoreListings() {
    let imgSize = {
        width: '50px',
        height: '50px'
    }

    let divStyle = {
        width: '27%',
        borderRadius: '10px',
        padding: '10px',
        margin:"auto",
        boxShadow: "0 0 6px rgb(200,200,200)"
    }

    return (
        <div style={{margin: '80px'}}>
            <h2>Browse stores in <span style={{color:'rgb(6, 204, 6)'}}>San Diego</span></h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "center"}} >
                    <Row style={divStyle}>
                        <Col xs="1" >
                            <Image style={imgSize} src="Aldi-logo.png" roundedCircle />
                        </Col>
                        <Col style={{marginLeft:'50px', textAlign:'left'}}>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>

                    <Col sm="1"></Col>

                    <Row style={divStyle}>
                        <Col xs="1">
                            <Image style={imgSize} src="sprouts-logo.png" roundedCircle />
                        </Col>
                        <Col style={{marginLeft:'50px', textAlign:'left'}}>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>

                    <Col sm="1"></Col>

                    <Row style={divStyle}>
                        <Col xs="1" >
                            <Image style={imgSize} src="kroger-logo.jpg" roundedCircle />
                    </Col>
                    <Col style={{marginLeft:'50px', textAlign:'left'}}>
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
        </Container>
        </div>
    )
}