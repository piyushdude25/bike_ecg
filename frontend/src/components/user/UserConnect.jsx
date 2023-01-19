import React from "react";
import { useState } from "react";
import Adduser from "./Adduser";
import Manageuser from "./ManageUser";


export default function Userconect(){

    const [page, setpage]=useState(0)

    const useradd =()=>{
        setpage(1)
    }

    const manage=()=>{
        setpage(0)
    }

    return(

        <div>
         {
            page === 0?
            <Manageuser userNew={useradd}/>
            :
            page === 1?
            <Adduser  goback={manage}/>
            :
            null
         }
        </div>
    )
}