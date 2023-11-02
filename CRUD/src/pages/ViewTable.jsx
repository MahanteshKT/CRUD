import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import ViewTableRow from "./ViewTableRow";
import "../components/styles.css";
function ViewTable() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/employees")
      .then(({ data }) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableData = () => {
    return employees.map((res, i) => {
      return <ViewTableRow obj={res} key={i} />;
    });
  };
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{TableData()}</tbody>
      </table>
    </Layout>
  );
}

export default ViewTable;
