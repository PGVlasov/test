import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import line from "../../img/line.png";

const HomeFooter = () => {
  const strongText = useSelector((state) => state.strongText.strongText);
  const [offer, setOffer] = useState("");
  const postOffer = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        offer,
      })
      .then((res) => res)
      .catch((err) => err);
  };
  const sendOffer = () => {
    postOffer();
    setOffer("");
  };

  return (
    <div>
      {!strongText ? (
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <h4 className="mb-3">О площадке</h4>
              <Row>
                <Col xs={1}>
                  <img src={line} />
                </Col>
                <Col xs={11}>
                  <h6>
                    Современная площадка для проведения концертов и других
                    мероприятий любой сложности.
                  </h6>
                  <p>
                    Мы предоставляем всю необходимую для организаторов
                    инфраструктуру и готовые решения под все основные задачи
                    любого события, а также современное оборудование,
                    соответствующее самым высоким мировым стандартам.{" "}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mb-4">
              <Form className="border border-gray-500  p-3">
                <FormGroup>
                  <FormLabel>
                    <h5>Оставить заявку на проведение концерта</h5>
                  </FormLabel>
                  <FormControl
                    as="textarea"
                    placeholder="Расскажите о вашем предложении "
                    rows={5}
                    className="mb-3 rounded-0 border border-dark"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                  />
                  <Button
                    variant="dark"
                    className="rounded-0"
                    onClick={sendOffer}
                  >
                    отправить
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col lg={2} className="mb-2">
              <h4>О группе</h4>
            </Col>
            <Col lg={10}>
              Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
              Группа образовалась в 2009 году и на данный момент состоит из
              Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил
              два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <h4 className="mb-3 fw-bold">О площадке</h4>
              <Row>
                <Col xs={1}>
                  <img src={line} />
                </Col>
                <Col xs={11}>
                  <h6 className="fw-bold">
                    Современная площадка для проведения концертов и других
                    мероприятий любой сложности.
                  </h6>
                  <p className="fw-bold">
                    Мы предоставляем всю необходимую для организаторов
                    инфраструктуру и готовые решения под все основные задачи
                    любого события, а также современное оборудование,
                    соответствующее самым высоким мировым стандартам.{" "}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mb-4">
              <Form className="border border-gray-500  p-3">
                <FormGroup>
                  <FormLabel>
                    <h5 className="fw-bold">
                      Оставить заявку на проведение концерта
                    </h5>
                  </FormLabel>
                  <FormControl
                    as="textarea"
                    placeholder="Расскажите о вашем предложении "
                    rows={5}
                    className="mb-3 rounded-0 border border-dark fw-bold"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                  />
                  <Button
                    variant="dark"
                    className="rounded-0 fw-bold"
                    onClick={sendOffer}
                  >
                    отправить
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col lg={2} className="mb-2">
              <h4 className="fw-bold">О группе</h4>
            </Col>
            <Col lg={10} className="fw-bold">
              Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
              Группа образовалась в 2009 году и на данный момент состоит из
              Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил
              два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default HomeFooter;
