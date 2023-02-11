import React from "react";
// import "./PostData.scss";

function PostData(props) {
  const { goback } = props;

  return (
    <div>
      <div className="container-fluid">
        <div className="customer">
          <div className="Add_customer">Add Customer</div>
          <p>back</p>
          {/* this.props.goback() */}
          <div
            onClick={() => {
              goback();
            }}
          >
            Back
          </div>
        </div>
        <div className="underline"></div>
      </div>

      <div className="Customer_main">
        <div>
          <form>
            <div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="input_section">
                    <label>Name</label>
                    <input
                      className="customer_input"
                      type="text"
                      id="name"
                      placeholder="Name"
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="input_section">
                    <label>Email</label>
                    <input
                      className="customer_input"
                      type="text"
                      id="name"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="input_section">
                    <label>Mobile</label>
                    <input
                      className="customer_input"
                      type="text"
                      id="name"
                      placeholder="Mobile"
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="input_section">
                    <label>Address Line 1</label>
                    <input
                      className="customer_input"
                      type="text"
                      id="name"
                      placeholder="Address Line 1"
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="input_section">
                    <label>Address Line 2</label>
                    <input
                      className="customer_input"
                      type="text"
                      id="name"
                      placeholder="Address Line 2"
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input_section">
                    <label>Pincode</label>
                    <input
                      className="customer_input"
                      type="text"
                      id="name"
                      placeholder="Pincode"
                    ></input>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="photo_section">
                    <img alt="image" width="100%"></img>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input_section">
                    <input type="file" id="name" placeholder="Name"></input>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="button_section">
                    <button type="submit" className="Customer_button">
                      Submit
                    </button>
                    <button className="Customer_button">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostData;
