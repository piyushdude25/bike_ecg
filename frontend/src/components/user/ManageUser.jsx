import React from "react";
import '../customer/customer.scss';
import user from '../assets/ecg_photose/user.jpg'

export default function Manageuser(props) {

    const { userNew } = props
    return (

        <div className="overflow_section">
            <div className="manage_section">
                <div>
                    Manage User
                </div>
                <div onClick={() => { userNew() }}>
                    <span><i className="fa fa-plus-circle" aria-hidden="true"></i></span>
                </div>
            </div>

            <div className="table_childsection">


                <table >
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="table_col">
                                    UserId
                                </div>

                            </th>
                            <th scope="col ">
                                <div className="table_col centername">
                                    Name
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Email
                                </div>

                            </th>
                            <th scope="col">
                                <div className="table_col">
                                    Mobile
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
                                    Akash@gmail.com
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    8767656765
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Rameshwari
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Junier
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
                                        Kajal
                                        </div>
                                       
                                    </div>
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    kajal@gmailcom
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    8987876787
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Kailas Nagar
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Junier
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
                                        Nilam 
                                        </div>
                                       
                                    </div>
                                  
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Nilam@gmail.com
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    8987676567
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    kunjilalpeth
                                </div>
                            </td>

                            <td>
                                <div className="table_col">
                                    Junier
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
                                        Kashish 
                                        </div>
                                       
                                    </div>
                                   
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    kashish@gmail.com
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    8987876765
                                </div>

                            </td>
                            <td>
                                <div className="table_col">
                                    Kunjilalpeth
                                </div>
                            </td>


                            <td>
                                <div className="table_col">
                                    Junier
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