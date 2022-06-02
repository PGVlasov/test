import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const strongText = useSelector((state) => state.strongText.strongText);
  return (
    <div>
      {!strongText ? (
        <Card className="mb-3 rounded-0 card-hover">
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>{user.address.city}</Card.Text>
            <Link to={`/users/${user.id}`}>
              <Button variant="dark" className="rounded-0">
                Посмотреть профиль
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-3 rounded-0 card-hover">
          <Card.Body>
            <Card.Title className="fw-bold">{user.username}</Card.Title>
            <Card.Text className="fw-bold">{user.address.city}</Card.Text>
            <Link to={`/users/${user.id}`}>
              <Button variant="dark" className="rounded-0 fw-bold">
                Посмотреть профиль
              </Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserCard;
