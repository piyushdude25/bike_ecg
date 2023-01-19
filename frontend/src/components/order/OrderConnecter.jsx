import React from "react";
import { useState } from "react";
import Orderadd from "./OrderAdd";
import Ordermanage from "./OrderManage";


export default function Orderconnecter(){

    const [page, setpage]=useState(0)

    const orderadd =()=>{
        setpage(1)
    }

    const manage=()=>{
        setpage(0)
    }

    return(

        <div>
         {
            page === 0?
            <Ordermanage ordernew={orderadd}/>
            :
            page === 1?
            <Orderadd  goback={manage}/>
            :
            null
         }
        </div>
    )
}