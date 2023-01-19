import React from "react";
import '../customer/addcustomer.scss';

export default function Garageadd(props) {


    const { goback } = props;

    return (


        <div>
            <div className="container-fluid">
                <div className="customer">
                    <div className="Add_customer">
                        Add Garage
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
                                        <label>Garage Name</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Garage Name"></input>
                                    </div>
                                </div>
                                

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Owner Name</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Owner Name"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Mobile No.</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Mobile No."></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Garage Location</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Location"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Garage Covered Area</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Area"></input>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>City</label>
                                        <input className="customer_input" type="text" id="name" placeholder="City"></input>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input_section">
                                        <label>Garage Code</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Code"></input>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    {/* <div className="input_section">
                                        <label>Position</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Name"></input>
                                    </div> */}
                                </div>
                                <div className="row">
                                    <div className="bankDetails">
                                    <span>Bank Details</span>
                                    </div>
                                  
                                 <div className="col-sm-6">
                                     <div className="input_section">
                                        <label>Bank Name</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Name"></input>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                     <div className="input_section">
                                        <label>Branch</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Branch"></input>
                                    </div>
                                 </div>

                                 <div className="col-sm-6">
                                     <div className="input_section">
                                        <label>Account Number</label>
                                        <input className="customer_input" type="text" id="name" placeholder="Account Number"></input>
                                    </div>
                                 </div>

                                 <div className="col-sm-6">
                                     <div className="input_section">
                                        <label>IFSC Code</label>
                                        <input className="customer_input" type="text" id="name" placeholder="IFSC Code"></input>
                                    </div>
                                 </div>
                                
                                </div>
                                  
                                <div className="col-sm-6 passbook">
                                <span >Passbook</span>
                                    <div className="photo_section">
                                        <img alt="image" width="100%"></img>
                                       
                                    </div>
                                    <br/>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input_section">
                                       
                                        <input  type="file" id="name" placeholder="Name"></input>
                                    </div>
                                    <br/>
                                </div>

                                <div className="col-sm-6 passbook">
                                <span>Garage</span>
                                    <div className="photo_section">
                                    
                                        <img alt="image" width="100%"></img>
                                       
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input_section">
                                       
                                        <input  type="file" id="name" placeholder="Name"></input>
                                    </div>

                                </div>

                                <div className="col-sm-6">
                                    <div className="button_section">
                                        <button type="submit" className="Customer_button">Submit</button>
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