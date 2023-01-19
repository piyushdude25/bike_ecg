import React from "react";
import { useState } from "react";
import Garagemanage from "./GarageManage";
import Garageadd from "./GarageAdd";

export default function Garageconnecter(){

    const [page, setpage]=useState(0)

    const garageadd =()=>{
        setpage(1)
    }

    const manage=()=>{
        setpage(0)
    }

    return(

        <div>
         {
            page === 0?
            <Garagemanage garagenew={garageadd}/>
            :
            page === 1?
            <Garageadd  goback={manage}/>
            :
            null
         }
        </div>
    )
}