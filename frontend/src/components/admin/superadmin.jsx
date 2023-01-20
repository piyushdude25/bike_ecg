import React from "react";
import "./superadmin.scss";
import logo from "../assets/ecg_photose/logo.png";
import icon from "../assets/ecg_photose/dashboard.png";
import book from "../assets/ecg_photose/book.png";
// import Customer from "../customer/customer";
import { useState } from "react";
import Connecter from "../customer/conecter";
import Userconect from "../user/UserConnect";
import user from "../assets/ecg_photose/user.jpg";
// import {Collapse,Typography} from "antd";
import { Collapse } from "react-bootstrap";
import Garageconnecter from "../Garage/GarageConnecter";
import Pickupconnecter from "../Pickupboy/Pickupconnecter";
import Orderconnecter from "../order/OrderConnecter";
import { useNavigate } from "react-router-dom";
import Billconnecter from "../Billing_invoice/Billconneter";
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import ServicePage from "../service/ServicePage";

export default function Superadmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isVisible, initHs] = useState(false);

  const [page, setPage] = useState(0);

  const invokeCollapse = () => {
    initHs(!isVisible);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="section-1">
        <div className="logoclass">
          <div className="logo_img">
            <img src={logo} alt="logo_image" width="100%"></img>
          </div>
        </div>
        <div className="main_list">
          <div>
            <div className="menulist" onClick={invokeCollapse}>
              <div>
                <span>
                  <img src={icon} alt="icon_image" width="100%"></img>
                </span>
              </div>
              <div className="menu_text">DashBoard</div>
              <div>
                <span>
                  <i className="fa fa-caret-down " aria-hidden="true"></i>
                </span>
              </div>
            </div>

            <Collapse in={isVisible}>
              <div id="collapsePanel">
                <div
                  className="menulist"
                  onClick={() => {
                    setPage(4);
                  }}
                >
                  <div>
                    <span>
                      {/* <i className="fa fa-user icon" aria-hidden="true"></i> */}
                      <i className="fa fa-ship icon" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div>Order</div>
                </div>

                <div
                  className="menulist"
                  onClick={() => {
                    setPage(5);
                  }}
                >
                  <div>
                    <span>
                      <i className="fa fa-book icon" aria-hidden="true"></i>

                      {/* <i className="fa fa-user icon" aria-hidden="true"></i> */}
                    </span>
                  </div>
                  <div>Billing Invoice</div>
                </div>

                <div
                  className="menulist"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  <div>
                    <span>
                      <i
                        className="fa fa-motorcycle icon"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                  <div>Garage List</div>
                </div>

                <div
                  className="menulist"
                  onClick={() => {
                    setPage(3);
                  }}
                >
                  <div>
                    <span>
                      {/* <i className="fa fa-user icon" aria-hidden="true"></i> */}
                      <i className="fa fa-truck icon" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div>Pickup Boy</div>
                </div>
              </div>
            </Collapse>

            <div
              className="menulist"
              onClick={() => {
                setPage(0);
              }}
            >
              <div>
                <span>
                  <i className="fa fa-user icon" aria-hidden="true"></i>
                </span>
              </div>
              <div>Customer</div>
            </div>

            <div
              className="menulist"
              onClick={() => {
                setPage(1);
              }}
            >
              <div>
                <span>
                  <i className="fa fa-user icon" aria-hidden="true"></i>
                </span>
              </div>
              <div>User</div>
            </div>

            <div
              className="menulist"
              onClick={() => {
                setPage(6);
              }}
            >
              <div>
                <span>
                  <i className="fa fa-cog icon" aria-hidden="true"></i>
                </span>
              </div>
              <div>Service</div>
            </div>

            <div className="menulist">
              <div>
                <span>
                  {" "}
                  <img src={book} alt="book_image" width="100%"></img>
                </span>
              </div>
              <div>Booking</div>
            </div>

            <div className="logoutsection">
              <div className="profile">
                {/* <div style={{ height: "30px", width: "30px" }}>
                  <img
                    className="imageborder"
                    src={user}
                    width="100%"
                    alt="user_image"
                  ></img>
                </div> */}
                {/* <span>
                  {" "}
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </span> */}
                <div className="pointer">
                  <button className="pointer" onClick={logoutHandler}>
                    LogOUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="section-3">
          <div className="user_name">
            <div className="username">Hi Avinash</div>
            <div className="notification_icon">
              <span>
                <i className="fa fa-bell" aria-hidden="true"></i>
              </span>
              <span style={{ height: "30px", width: "30px" }}>
                <img src={user} width="100%" alt="user_image"></img>
              </span>
            </div>
          </div>
          <div className="table_section">
            {page === 0 ? (
              <Connecter />
            ) : page === 1 ? (
              <Userconect />
            ) : page === 2 ? (
              <Garageconnecter />
            ) : page === 3 ? (
              <Pickupconnecter />
            ) : page === 4 ? (
              <Orderconnecter />
            ) : page === 5 ? (
              <Billconnecter />
            ) : page === 6 ? (
              <ServicePage />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
