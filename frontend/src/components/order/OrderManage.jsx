import React from "react";
import '../customer/customer.scss';
import user from '../assets/ecg_photose/user.jpg'

export default function Ordermanage(props) {

    const { ordernew } = props
    return (

        <div className="overflow_section">
            <div className="manage_section">
                <div>
                    Manage Order
                </div>
                <div onClick={() => { ordernew() }}>
                    <span><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
                </div>
            </div>

            <div className="table_childsection">


                <table >
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="table_col">
                                    Order Id
                                </div>

                            </th>
                            <th scope="col ">
                                <div className="table_col centername">
                                    Service
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                Vehicle Make/Model
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Customer
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Pickup Location/ Pickup TIme
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Servicing Date
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table_col">
                                Vehicle Register Number
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
                                        Breakdown Assistance 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Akash
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                <span>
                                    Pickup Location - kailas Nager
                                      
                                    </span>
                                    <br/>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <br/>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    6-12-2022
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    6-12-2019
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
                                        Breakdown Assistance 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nilam
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    6-12-2022
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    6-12-2019
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

                        {/* <tr>
                            <td scope="row">
                                <div className="table_col">
                                   3 
                                </div>

                            </td>

                            <td scope="row">
                                <div className="table_col">
                                    <div className="userphoto">
                                    <div className="outer_image">
                                            <img className="imagesection" src={user} width="100%" alt="image"></img>
                                        </div>
                                        <div>
                                        Breakdown Assistance 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nirali
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    6-12-2022
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    6-12-2019
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
                        </tr> */}

                        {/* <tr>
                            <td scope="row">
                                <div className="table_col">
                                   4 
                                </div>

                            </td>

                            <td scope="row">
                                <div className="table_col">
                                    <div className="userphoto">
                                    <div className="outer_image">
                                            <img className="imagesection" src={user} width="100%" alt="image"></img>
                                        </div>
                                        <div>
                                        Breakdown Assistance 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nilam
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    <span>
                                        Pickup Location - kailas Nager
                                      
                                    </span>
                                    <span>
                                    Pickup Time - 9.00 AM
                                    </span>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    6-12-2022
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    6-12-2019
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
                        */}

                    </tbody>

                </table>

            </div>
        </div>
    )
}