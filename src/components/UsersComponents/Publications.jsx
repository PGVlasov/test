import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Publications = () => {
  const strongText = useSelector((state) => state.strongText.strongText);
  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  let randomColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )}, ${getRandom(0, 255)})`;
  return (
    <div>
      {!strongText ? (
        <div className="my-4">
          <Row className="mb-2">
            <h3>Публикации</h3>
          </Row>
          <Row className="d-flex  justify-content-center">
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="my-4">
          <Row className="mb-2">
            <h3 className="fw-bold">Публикации</h3>
          </Row>
          <Row className="d-flex  justify-content-center">
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2}>
              <Card
                className="mb-3 rounded-0 border-dark w-100"
                style={{ height: "10rem" }}
              >
                <Card.Body style={{ backgroundColor: randomColor }} />
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Publications;
