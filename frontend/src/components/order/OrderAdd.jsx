import React from "react";
import '../customer/addcustomer.scss';

export default function Orderadd(props) {


    const { goback } = props;

    return (


        <div>
            <div className="container-fluid">
                <div className="customer">
                    <div className="Add_customer">
                        Add Order
                    </div>
                    <div onClick={() => { goback() }}>
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
                                        <label>Service</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Service"></input>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Customer</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Name"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Servicing Date</label>
                                        <input className="customer_input" type="date" id="name" placeholder="Servicing Date"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Pickup Location</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Pickup Location"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Pickup Time</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Address Line 1"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Vehicle Register Number</label>
                                        <input className="customer_input" type="number" id="name" placeholder="Address Line 2"></input>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Vehicle Make</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Make"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Vehicle Model</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Model"></input>
                                    </div>
                                </div>
                              

                                {/* <div className="col-sm-6">
                                    <div className="photo_section">
                                        <img alt="image" width="100%"></img>
                                       
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input_section">
                                       
                                        <input  type="file" id="name" placeholder="Name"></input>
                                    </div>
                                </div> */}

                                <div className="col-sm-6">
                                    <div className="button_section">
                                        <button type="submit" className="Customer_button">Order</button>
                                        <button className="Customer_button">Cancel</button>
                                    </div>
                                </div>

                              
                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
} 