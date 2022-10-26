import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import React from 'react';
import Button from 'react-bootstrap/Button';

const ref = React.createRef();

function PDF(iCode, bCode, desc, dat, cli, ord, quan, prov) {

  const handleCreateOnClick = (toPdf) => {
    toPdf();

    //navigate("/share");
  }
  return (

    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Card.Text>
                {iCode}
              </Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Card.Text>
              {bCode}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card.Text>
              {desc}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card.Text>
              {dat}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card.Text>
              {cli}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Card.Text>
              {ord}
              </Card.Text>
            </Col>
            <Col xs={6} md={4}>
              <Card.Text>
              {quan}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Card.Text>
              {prov}
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Pdf targetRef={ref} filename="ReporteGAID.pdf" options="" x={.5} y={.5} scale={0.8}>
                {({ toPdf }) => <Button variant="contained" onClick={() => handleCreateOnClick(toPdf)}
                  style={{
                    backgroundColor: "#ba55d3",
                    fontSize: "18px",
                    color: "#ffffff"
                  }}>
                  Crear
                </Button>}
              </Pdf>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default PDF;


