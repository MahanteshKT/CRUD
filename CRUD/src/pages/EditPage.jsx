import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const obj1 = useParams();

  useEffect(() => {
    axios
      .get(
        "https://backend-crud-ne5z.onrender.com/employees/update-employee/" +
          obj1.id
      )
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.name);
          setPhone(res.data.phone);
          setEmail(res.data.email);
          setPassword(res.data.password);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [obj1.id]);

  const handleSubmit = () => {
    const url =
      "https://backend-crud-ne5z.onrender.com/employees/update-employee/" +
      obj1.id;
    const newData = { name, phone, email, password };
    axios
      .put(url, newData)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee Updated");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div id="signup">
        <h1 id="heading">Edit Employee</h1>
        <form onSubmit={handleSubmit}>
          <label for="Name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
          />
          <label for="phone">Contact</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
            defaultValue={phone}
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={email}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </Layout>
  );
}

export default EditPage;
