import React from "react";
import '../customer/customer.scss';
import user from '../assets/ecg_photose/user.jpg'

export default function Garagemanage(props) {

    const { garagenew } = props
    return (

        <div className="overflow_section">
            <div className="manage_section">
                <div>
                    Manage Garage
                </div>
                <div onClick={() => { garagenew() }}>
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
                           
                            <th scope="col ">
                                <div className="table_col centername">
                                    Garage Name
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Garage Code
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Owner Name
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Mobile No.
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table_col">
                                Garage Location
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table_col">
                                Garage Covered Area
                                </div>
                            </th>

                            <th scope="col">
                                <div className="table_col">
                                Payment Mode
                                </div>
                            </th>

                            <th scope="col">
                                <div className="table_col">
                                Bank Details
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
                                        Akash Garage
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    89876
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                Sunil 
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                8987898767
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    New Kailas Nagar
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Manewada
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Online
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Details
                                </div>
                            </td>



                            <td>
                                <div className="table_col">
                                    Nagpur
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Processing
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