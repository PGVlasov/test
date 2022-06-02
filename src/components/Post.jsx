import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Post = ({ post, userId }) => {
  const strongText = useSelector((state) => state.strongText.strongText);
  if (!post || !userId) {
    return <Loader />;
  }
  return (
    <div>
      {!strongText ? (
        <Card className="mb-3 rounded-0 border-dark">
          <Card.Body>
            <Link
              to={`/users/${userId}/posts/${post.id}`}
              className="text-hover"
            >
              <Card.Title>
                <h4>{post.title}</h4>
              </Card.Title>
            </Link>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mb-3 rounded-0 border-dark">
          <Card.Body>
            <Link
              to={`/users/${userId}/posts/${post.id}`}
              className="text-hover"
            >
              <Card.Title>
                <h4 className="fw-bold">{post.title}</h4>
              </Card.Title>
            </Link>
            <Card.Text className="fw-bold">{post.body}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Post;
