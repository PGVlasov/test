import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Error = () => {
  return (
    <Container className="mt-5">
      <Row className="pt-5">
        <Col>
          <h4 className="text-center">
            К сожалению данная страница не найдена! Попробуйте обновить
            страницу.{" "}
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
