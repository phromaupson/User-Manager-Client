/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("http://localhost:8000/api/user/all", {
        headers: {
          authtoken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYxYWY2M2RmODUyOGM1MzNkYWRmZjk4YyIsInVzZXJuYW1lIjoia2Fta29uMSIsImVtYWlsIjoiYWJjQGFiYzEiLCJfX3YiOjB9LCJpYXQiOjE2NDA2MTIwNDN9.hqa71ZzWbPeISg7FKyF_cJy_n8AcRmPIekW6R9m6qSg",
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <table class="table table-dark mt-1">
        <thead>
          <tr>
            <th scope="col"> # </th> <th scope="col"> First </th>{" "}
            <th scope="col"> Last </th> <th scope="col"> Handle </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row"> {index + 1} </th>
              <td> {user.username} </td>
              <td> {user.email} </td>
              <td> {user.password} </td>
            </tr>
          ))}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default HomePage;
