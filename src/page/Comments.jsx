import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "../components/CommentComponents/Comment";
import { CommentList } from "../components/CommentComponents/CommentList";
import Post from "../components/Post";
import { loadPosts } from "../store/actions/posts";
import { loadComments } from "../store/actions/comments";
import Loader from "../components/Loader";

const Comments = () => {
  const strongText = useSelector((state) => state.strongText.strongText);

  const param = useParams();
  const userId = parseInt(param.userId, 10);
  const postId = parseInt(param.postId, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(loadComments(postId));
  }, [dispatch, postId]);

  const post = useSelector((state) =>
    state.posts.allPosts.find((p) => p.id === postId)
  );

  const comments = useSelector((state) => state.comments.allComments);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postComment = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email,
        name,
        comment,
      })
      .then((res) => res)
      .catch((err) => err);
  };
  const sendComment = () => {
    postComment();
    setEmail("");
    setName("");
    setComment("");
    setShow(false);
  };

  if (comments.length === 0) {
    return <Loader />;
  }
  return (
    <div className="mt-5">
      {!strongText ? (
        <Container className="py-4">
          <Row className="mt-4 mb-2">
            <Col>
              <h4>Пост</h4>
            </Col>
          </Row>
          <Row className=" mb-2">
            <Col>
              <Post post={post} userId={userId} />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <h4>Комментарии</h4>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <CommentList comments={comments} />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="justify-content-center">
              <Button variant="dark" className="rounded-0" onClick={handleShow}>
                Добавить комментарий
              </Button>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Добавить комментарий</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pavel@gmail.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Павел"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Комментарий</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="dark"
                className="rounded-0"
                onClick={handleClose}
              >
                Закрыть
              </Button>
              <Button
                variant="dark"
                className="rounded-0"
                onClick={sendComment}
              >
                Отправить
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        // strong version
        <Container className="py-4">
          <Row className="mt-4 mb-2">
            <Col>
              <h4 className="fw-bold">Пост</h4>
            </Col>
          </Row>
          <Row className=" mb-2">
            <Col>
              <Post post={post} key={post.id} userId={userId} />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <h4 className="fw-bold">Комментарии</h4>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col>
              <CommentList comments={comments} />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col className="justify-content-center">
              <Button
                variant="dark"
                className="rounded-0 fw-bold"
                onClick={handleShow}
              >
                Добавить комментарий
              </Button>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold">
                Добавить комментарий
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fw-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pavel@gmail.com"
                    autoFocus
                    className="fw-bold"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="fw-bold">Имя</Form.Label>
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Павел"
                    autoFocus
                    className="fw-bold"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="fw-bold">Комментарий</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="fw-bold"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="dark"
                className="rounded-0 fw-bold"
                onClick={handleClose}
              >
                Закрыть
              </Button>
              <Button
                variant="dark"
                className="rounded-0 fw-bold"
                onClick={sendComment}
              >
                Отправить
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </div>
  );
};

export default Comments;
