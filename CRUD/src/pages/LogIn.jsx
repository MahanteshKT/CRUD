import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const url = "https://backend-crud-ne5z.onrender.com/employees/login";
    const obj = { name, phone, email, password };
    axios
      .post(url, obj)
      .then((res) => {
        alert(res.data);
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <div id="signup">
        <h1 id="heading">Log In</h1>
        <form onSubmit={handleSubmit}>
          <label for="Name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label for="phone">Contact</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </Layout>
  );
}

export default LogIn;
