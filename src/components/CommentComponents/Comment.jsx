import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
  const strongText = useSelector((state) => state.strongText.strongText);
  if (!comment) {
    return <Loader />;
  }
  return (
    <div>
      {!strongText ? (
        <Card className="mb-3 rounded-0 border-dark" key={comment.id}>
          <Card.Body>
            <Card.Title>
              <h6>{comment.email}</h6>
            </Card.Title>
            <Card.Title>
              <h6>{comment.name}</h6>
            </Card.Title>
            <Card.Text>{comment.body}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-3 rounded-0 border-dark" key={comment.id}>
          <Card.Body>
            <Card.Title>
              <h6 className="fw-bold">{comment.email}</h6>
            </Card.Title>
            <Card.Title>
              <h6 className="fw-bold">{comment.name}</h6>
            </Card.Title>
            <Card.Text className="fw-bold">{comment.body}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Comment;
