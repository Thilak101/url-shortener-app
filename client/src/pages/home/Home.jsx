import React, { useEffect, useState } from "react";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { getUser, handleLogin } from "../../slices/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token && !user) {
      dispatch(handleLogin(token));
    }
  }, []);

  console.log(url);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/url/data", {
        url,
      });
      setShortUrl(response.data.msg);
      
    } catch (err) {
      console.log(err);
    }
  };
  console.log("url",url, "shorturl",shortUrl)

  return (
    <div className="home">
      {user === null ? (
        navigate("/login")
      ) : (
        <div className="home__container">
          <div className="home__section">
            <h1>
              URL <span>Shrinker</span>
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="full-url"
              />
              <button>shrink</button>
            </form>
            <Link to={shortUrl}>
              <p>{shortUrl}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
