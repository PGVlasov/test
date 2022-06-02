import React, { useEffect, useState } from "react";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../store/actions/users";
import "../ComponentsStyle.scss";
import UserCard from "./UserCard";

const UsersBoughtTickets = () => {
  const strongText = useSelector((state) => state.strongText.strongText);
  const users = useSelector((state) => state.users.allUsers);
  const forUsers = users.filter((user) => user.id < 5);
  const [showUsers, setShowUsers] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {showUsers === false
        ? "Показать всех пользователей"
        : "Скрыть пользователей"}
    </Tooltip>
  );

  return (
    <div>
      {!strongText ? (
        <Container className="mt-4 mb-2">
          <Row>
            <Col xs={8} md={4}>
              <h4>Купили билеты</h4>
            </Col>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Col
                type="button"
                onClick={() =>
                  showUsers === false ? setShowUsers(true) : setShowUsers(false)
                }
                xs={4}
                md={{ span: 2, offset: 6 }}
              >
                <h5>
                  {users.length}/
                  <span style={{ color: "rgb(219 219 219)" }}> 1000</span>
                </h5>
              </Col>
            </OverlayTrigger>
          </Row>
          <Row className="mt-3 align-items-center justify-content-center">
            {!showUsers
              ? forUsers.length
                ? forUsers.map((user) => {
                    return (
                      <Col xs={10} sm={6} lg={4} xl={3} key={user.id}>
                        <UserCard user={user} key={user.id} />
                      </Col>
                    );
                  })
                : null
              : users.length
              ? users.map((user) => {
                  return (
                    <Col xs={10} sm={6} lg={4} xl={3} key={user.id}>
                      <UserCard user={user} key={user.id} />
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      ) : (
        // strong version
        <Container className="mt-4 mb-2">
          <Row>
            <Col xs={8} md={4}>
              <h4 className="fw-bold">Купили билеты</h4>
            </Col>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Col
                type="button"
                onClick={() =>
                  showUsers === false ? setShowUsers(true) : setShowUsers(false)
                }
                xs={4}
                md={{ span: 2, offset: 6 }}
              >
                <h5 className="fw-bold">
                  {users.length}/
                  <span style={{ color: "rgb(219 219 219)" }}> 1000</span>
                </h5>
              </Col>
            </OverlayTrigger>
          </Row>
          <Row className="mt-3 align-items-center justify-content-center">
            {!showUsers
              ? forUsers.length
                ? forUsers.map((user) => {
                    return (
                      <Col xs={10} sm={6} lg={4} xl={3} key={user.id}>
                        <UserCard user={user} key={user.id} />
                      </Col>
                    );
                  })
                : null
              : users.length
              ? users.map((user) => {
                  return (
                    <Col xs={10} sm={6} lg={4} xl={3} key={user.id}>
                      <UserCard user={user} key={user.id} />
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default UsersBoughtTickets;
