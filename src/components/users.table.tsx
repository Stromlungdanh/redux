import Table from "react-bootstrap/Table";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchListUsers } from "../redux/user/user.slice";

function UsersTable() {
  const users = useAppSelector((state) => state.user.listUsers);
  const dispatch = useAppDispatch();
  //   const fetchUsers = async () => {
  //     const res = await fetch("http://localhost:8000/users");
  //     const data = await res.json();
  //     setUsers(data);
  //   };

  useEffect(() => {
    // fetchUsers();
    dispatch(fetchListUsers());
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UsersTable;
