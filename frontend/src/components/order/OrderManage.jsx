import React from "react";
import "../customer/customer.scss";
import user from "../assets/ecg_photose/user.jpg";
import axios from "axios";
import Storeapi from "../../apis/Storeapi";

export default function Ordermanage(props) {
  const response = Storeapi.get("/products");

  console.log("Storeapi::", response);
  const [orderData, setOrderData] = React.useState([]);
  console.log("orderData:", orderData);
  // const fetchOrderData = () => {
  //   axios
  //     .get("http://localhost:5000/order")

  //     .then((res) => setOrderData(res.data))
  //     .catch((err) => console.log(err));
  // };
  const fetchOrderData = async () => {
    const response = await Storeapi.get("/order");
    // console.log("Storeapi::", response.data);
    setOrderData(response.data);
  };
  React.useEffect(() => {
    fetchOrderData();
  }, []);

  const { ordernew } = props;
  return (
    <div className="overflow_section">
      <div className="manage_section">
        <div>Manage Order</div>
        <div
          onClick={() => {
            ordernew();
          }}
        >
          <span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div className="table_childsection">
        <table>
          <thead>
            <tr>
              <th scope="col">
                <div className="table_col">Order Id</div>
              </th>
              <th scope="col ">
                <div className="table_col centername">Service</div>
              </th>
              <th scope="col">
                <div className="table_col">Vehicle Make/Model</div>
              </th>
              <th scope="col">
                <div className="table_col">Customer</div>
              </th>
              <th scope="col">
                <div className="table_col">Pickup Location/ Pickup TIme</div>
              </th>
              <th scope="col">
                <div className="table_col">Servicing Date</div>
              </th>
              <th scope="col">
                <div className="table_col">Vehicle Register Number</div>
              </th>

              <th scope="col">
                <div className="table_col">Action</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {orderData.map((row) => (
              <tr key={row.id}>
                <td scope="row">
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
