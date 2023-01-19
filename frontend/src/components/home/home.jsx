import React, { useState, useEffect } from "react";
import "./home.scss";
import bike from "../assets/ecg_photose/bike.png";
import logo from "../assets/ecg_photose/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions";

export default function Home({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/superadmin");
      // history.push("/mynotes");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {error && "error..."}
      {loading && "loading...."}
      <div className="container-fluid">
        <div className="welcomesection">
          <div>
            <label>Welcome To BIKEECG</label>
          </div>
          <div className="logo_image">
            <img src={logo} alt="logo" width="100%"></img>
          </div>
        </div>
        <div className="verticleline"></div>

        <div className="mainsection">
          <div className="sectionimage">
            <div className="imageshadow">
              <img src={bike} alt="img" height="480px" width="100%"></img>
            </div>
          </div>
          <div className="section">
            <div>
              <div className="logintext">
                <label>Log In</label>
              </div>
              <form>
                <div className="inputclass">
                  <label className="username">Username</label>
                  <input
                    className="usertext"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="inputclass">
                  <label className="username">Password</label>
                  <input
                    className="usertext"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div className="log_in">
                  <button onClick={submitHandler} className="loginbutton">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
