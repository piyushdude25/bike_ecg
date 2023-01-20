import React, { useEffect, useState } from "react";
import "./customer.scss";
import user from "../assets/ecg_photose/user.jpg";
import axios from "axios";
import Storeapi from "../../apis/Storeapi";
///////////////////////

////////////////////////////
export default function Customer(props) {
  const [customerData, setCustomerData] = useState([]);
  // console.log("customerData:", customerData);
  // const fetchCustomerData = () => {
  //   axios
  //     .get("http://localhost:5050/customers")

  //     .then((res) => setCustomerData(res.data));
  // };

  const fetchCustomerData = async () => {
    const response = await Storeapi.get("/customers");
    // console.log("Storeapi::", response.data);
    setCustomerData(response.data);
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const { customerNew } = props;
  return (
    <div className="overflow_section">
      <div className="manage_section">
        <div>Manage Customer</div>
        <div
          onClick={() => {
            customerNew();
          }}
        >
          <span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div className="table_childsection ">
        <div className="hr">
          <hr />
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">
                <div className="table_col centername">Name</div>
              </th>
              <th scope="col">
                <div className="table_col">Email</div>
              </th>
              <th scope="col">
                <div className="table_col">Mobile</div>
              </th>
              <th scope="col">
                <div className="table_col">Address</div>
              </th>

              <th scope="col">
                <div className="table_col">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((row) => (
              <tr key={row.id}>
                <td scope="rows">
                  <div className="table_col">{row.id}</div>
                </td>

                <td scope="row">
                  <div className="table_col">
                    <div className="userphoto">
                      <div className="outer_image">
                        <img
                          className="imagesection"
                          src={user}
                          width="100%"
                          alt="imagezz"
                        ></img>
                      </div>
                      <div>{row.status}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="table_col">{row.date_created}</div>
                </td>
                <td>
                  <div className="table_col">
                    <span>{row.date_modified}</span>
                  </div>
                </td>
                <td>
                  <div className="table_col">
                    <span>{row.customer_id}</span>
                  </div>
                </td>
                <td>
                  <div className="table_col">{row.billing.first_name}</div>
                </td>

                <td>
                  <div className="table_col">{row.billing.address_1}</div>
                </td>

                <td>
                  <div className="table_col">
                    <span title="Customer Detail">
                      <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </span>
                    &nbsp; &nbsp;
                    <span title="Customer Update">
                      <i className="fa fa-edit"></i>
                    </span>
                    &nbsp; &nbsp;
                    <span>
                      <i className="fa fa-trash"></i>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
