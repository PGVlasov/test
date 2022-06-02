import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../components/UsersComponents/Posts";
import Publications from "../components/UsersComponents/Publications";
import UserTable from "../components/UsersComponents/UserTable";
import { loadUsers } from "../store/actions/users";

const Users = () => {
  const param = useParams();
  const userId = parseInt(param.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  const users = useSelector((state) => state.users.allUsers);
  const user = useSelector((state) =>
    state.users.allUsers.find((u) => u.id === userId)
  );
  return (
    <Container className="mt-5">
      <UserTable user={user} />
      <Posts user={user} />
      <Publications user={user} />
    </Container>
  );
};

export default Users;
