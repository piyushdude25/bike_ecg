import React from "react";
import { useState } from "react";
import Managbill from "./ManageBill";
import Addbill from "./Addbill";

export default function Billconnecter(){

    const [page, setpage]=useState(0)

    const addbill =()=>{
        setpage(1)
    }

    const manage=()=>{
        setpage(0)
    }

    return(

        <div>
         {
            page === 0?
            <Managbill addbillnew={addbill}/>
            :
            page === 1?
            <Addbill  goback={manage}/>
            :
            null
         }
        </div>
    )
}