import React, { useEffect, useState } from "react";
import "./verify.css";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
import loadingGif from "../../assets/loader.gif";

const Verify = () => {
  const { token } = useParams();
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyUser = async () => {
    try {
      const response = await axios.get(`/user/verify/${token}`);
      alert(response.data.msg);
      setSucess(response.data.sucess);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      verifyUser();
    }
  }, [token]);

  if (loading) {
    return (
      <div>
        <img src={loadingGif} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="verify">
      <h1
      >account verified successfully</h1>
      <button>
        <Link to={"/"}>Login</Link>
      </button>
    </div>
  );
};

export default Verify;
