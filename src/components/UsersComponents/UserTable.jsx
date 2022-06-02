import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { loadUsers } from "../../store/actions/users";
import Loader from "../Loader";

const UserTable = () => {
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

  const strongText = useSelector((state) => state.strongText.strongText);

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <div className="pt-4">
      {!strongText ? (
        <Table bordered responsive className="border-dark my-4">
          <thead>
            <tr>
              <th colSpan={5}>
                <h4>{user.username}</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                {user.company.name}, {user.company.bs}
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Table bordered responsive className="border-dark my-4 fw-bold">
          <thead>
            <tr>
              <th colSpan={5}>
                <h4 className="fw-bold">{user.username}</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>
                {user.company.name}, {user.company.bs}
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserTable;
