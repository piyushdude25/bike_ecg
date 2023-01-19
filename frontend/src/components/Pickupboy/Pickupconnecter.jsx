import React from "react";
import { useState } from "react";
import Pickupadd from "./Pickupadd";
import Pickupmanage from "./Pickupmanage";


export default function Pickupconnecter(){

    const [page, setpage]=useState(0)

    const addpickup =()=>{
        setpage(1)
    }

    const manage=()=>{
        setpage(0)
    }

    return(

        <div>
         {
            page === 0?
            <Pickupmanage pickupnew={addpickup}/>
            :
            page === 1?
            <Pickupadd  goback={manage}/>
            :
            null
         }
        </div>
    )
}