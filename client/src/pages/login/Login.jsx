import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { getUser, handleLogin } from "../../slices/UserSlice";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post("/user/login", {
        email,
        password,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        dispatch(handleLogin(response.data.token));
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/user/signup", {
        email,
        password,
      });
      alert(response.data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__form">
          <form action="">
            <label htmlFor="email">
              <h3>Email</h3>
            </label>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="something@email.com"
              />
            </div>
            <label htmlFor="password">
              <h3>Password</h3>
            </label>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="key"
              />
            </div>
            <div>
              <button onClick={login}>Login in</button>
            </div>
          </form>
        </div>
        <div>
          <Link to={"/forgot-password"}>forgot-password</Link>
        </div>
        <div>
          <button onClick={register}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
