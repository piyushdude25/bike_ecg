import React from "react";
import '../customer/customer.scss';
import user from '../assets/ecg_photose/user.jpg'

export default function Pickupmanage(props) {

    const { pickupnew } = props
    return (

        <div className="overflow_section">
            <div className="manage_section">
                <div>
                    Manage Pickup Boy
                </div>
                <div onClick={() => { pickupnew() }}>
                    <span><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
                </div>
            </div>

            <div className="table_childsection">


                <table >
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="table_col">
                                    Sr No.
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col centername">
                                    Name
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    City
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Status
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    ID Card
                                </div>
                            </th>

                           
                            <th scope="col">
                                <div className="table_col">
                                Address
                                </div>
                            </th>

                            <th scope="col">
                                <div className="table_col">
                                Position
                                </div>
                            </th>

                            <th scope="col">
                                <div className="table_col">
                                    Action
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="12">
                                <div className="search_class">
                                    <input className="searchclass" type="text" placeholder="Search" id="search"></input>

                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td scope="row">
                                <div className="table_col">
                                   1 
                                </div>

                            </td>

                            <td scope="row">
                                <div className="table_col">
                                    <div className="userphoto">
                                    <div className="outer_image">
                                            <img className="imagesection" src={user} width="100%" alt="image"></img>
                                        </div>
                                        <div>
                                        Akash 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nagpur
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    On
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <div className="outer_image">
                                    <img src={user} width="100%" alt="image" ></img>
                                    </div>
                                   
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    <span>Address Line 1 - naredra Nagar</span>
                                    <br/>
                                    <span>Address Line 2 - Near Haldiram</span>
                                    <br/>
                                    <span>Pincode - 440027</span>

                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Middle
                                </div>

                            </td>

                            <td>
                                <div className="table_col">
                                    <span title="Customer Detail" >
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span title="Customer Update" >
                                    <i className="fa fa-edit"></i>
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span >
                                    <i className="fa fa-trash"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row">
                                <div className="table_col">
                                   2 
                                </div>

                            </td>

                            <td scope="row">
                                <div className="table_col">
                                    <div className="userphoto">
                                    <div className="outer_image">
                                            <img className="imagesection" src={user} width="100%" alt="image"></img>
                                        </div>
                                        <div>
                                        Akash 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nagpur
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    On
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <div className="outer_image">
                                    <img src={user} width="100%" alt="image" ></img>
                                    </div>
                                   
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    <span>Address Line 1 - naredra Nagar</span>
                                    <br/>
                                    <span>Address Line 2 - Near Haldiram</span>
                                    <br/>
                                    <span>Pincode - 440027</span>
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Middle
                                </div>

                            </td>

                            <td>
                                <div className="table_col">
                                    <span title="Customer Detail" >
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span title="Customer Update" >
                                    <i className="fa fa-edit"></i>
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span >
                                    <i className="fa fa-trash"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row">
                                <div className="table_col">
                                   1 
                                </div>

                            </td>

                            <td scope="row">
                                <div className="table_col">
                                    <div className="userphoto">
                                    <div className="outer_image">
                                            <img className="imagesection" src={user} width="100%" alt="image"></img>
                                        </div>
                                        <div>
                                        Akash 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nagpur
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    On
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <div className="outer_image">
                                    <img src={user} width="100%" alt="image" ></img>
                                    </div>
                                   
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    <span>Address Line 1 - naredra Nagar</span>
                                    <br/>
                                    <span>Address Line 2 - Near Haldiram</span>
                                    <br/>
                                    <span>Pincode - 440027</span>
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Middle
                                </div>

                            </td>

                            <td>
                                <div className="table_col">
                                    <span title="Customer Detail" >
                                    <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span title="Customer Update" >
                                    <i className="fa fa-edit"></i>
                                    </span>
                                    &nbsp;
                                    &nbsp;
                                    <span >
                                    <i className="fa fa-trash"></i>
                                    </span>
                                </div>
                            </td>
                        </tr>

                        

                       

                      

                    </tbody>
                </table>

            </div>
        </div>
    )
}