import React, { useState } from "react";
import "./forgotPassword.css";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/user/forgot-password", {
        email,
      });
      if (response.data.success) {
        navigate("/");
      }
      console.log(response.data.success);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="forgotPassword">
        <div className="forgotPassword__container">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="email"
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
