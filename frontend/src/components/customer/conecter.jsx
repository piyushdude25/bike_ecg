import React from "react";
import { useState } from "react";
import Addcustomer from "./Addcustomer";
import Customer from "./customer";

export default function Connecter() {
  const [page, setpage] = useState(0);

  const customeradd = () => {
    setpage(1);
  };

  const manage = () => {
    setpage(0);
  };

  return (
    <div>
      {page === 0 ? (
        <Customer customerNew={customeradd} />
      ) : page === 1 ? (
        <Addcustomer goback={manage} />
      ) : null}
    </div>
  );
}
