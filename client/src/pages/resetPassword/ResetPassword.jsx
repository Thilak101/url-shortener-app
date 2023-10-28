import React, { useState } from "react";
import "./resetPassword.css";
import axios from "../../axios";
import { Navigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { id, token } = useParams();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios
        .post(`/user/resetPassword/${token}`, { password })
        .then((res) => {
          if (res.data.success === true) {
            alert(res.data.msg);
          }
          if (res.data.success === false) {
            alert("Link expired");
          }
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="resetPassword">
      <div className="resetPassword__container">
        <h1>New Password</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
