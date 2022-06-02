import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loadPosts } from "../../store/actions/posts";
import "../ComponentsStyle.scss";
import Post from "../Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts.allPosts);
  const strongText = useSelector((state) => state.strongText.strongText);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [textButton, setTextButton] = useState("Показать все посты");
  const param = useParams();
  const userId = parseInt(param.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch, userId]);

  let previewPosts = posts.slice(0, 3);
  const togglePosts = () => {
    showAllPosts === false ? setShowAllPosts(true) : setShowAllPosts(false);
    showAllPosts === false
      ? setTextButton("Оставить три поста")
      : setTextButton("Показать все посты");
  };

  return (
    <div>
      {!strongText ? (
        <div className="border-bottom border-top border-dark pt-4 pb-2">
          <Row className="mb-2">
            <h3>Посты</h3>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={6}>
              {!showAllPosts
                ? previewPosts.map((post) => {
                    return <Post post={post} key={post.id} userId={userId} />;
                  })
                : posts.map((post) => {
                    return <Post post={post} key={post.id} userId={userId} />;
                  })}
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Button
                className="rounded-0"
                variant="dark"
                onClick={() => togglePosts()}
              >
                {textButton}
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="border-bottom border-top border-dark pt-4 pb-2">
          <Row className="mb-2">
            <h3 className="fw-bold">Посты</h3>
          </Row>
          <Row className="d-flex align-items-center justify-content-center">
            {" "}
            <Col lg={6}>
              {!showAllPosts
                ? previewPosts.map((post) => {
                    return <Post post={post} key={post.id} userId={userId} />;
                  })
                : posts.map((post) => {
                    return <Post post={post} key={post.id} userId={userId} />;
                  })}
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Button
                className="rounded-0 fw-bold"
                variant="dark"
                onClick={() => togglePosts()}
              >
                {textButton}
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Posts;
