const express = require("express");
const router = express.Router();
const WooCommerce = require("../../woocommers/woocommerce");

//   get all customers
router.get("/", (req, res) => {
  WooCommerce.get("")
    .then((response) => {
      res.send(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  WooCommerce.get("customers")
    .then((response) => {
      res.send(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//  get by customer ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  WooCommerce.get("customers/" + id)
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//  delete customer by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  WooCommerce.delete("customers" + id, {
    force: true,
  })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
});

//  post customer data
// app.post("/employee/update/:id", (req, res) => {
//   let email = req.body.email;
//   let first_name = req.body.first_name;
//   let last_name = req.body.last_name;
//   let username = req.body.username;
//   let id = parseInt(req.params.id);

//   db.query(
//     "update employee set name=$1,email=$2,city=$3,address=$4 where id=$5",
//     [email, first_name, last_name, username, id],
//     function (err, result) {
//       if (err) throw err;
//       res.send("Status Ok");
//       res.end();
//     }
//   );
// });
//////
router.post("/add", (req, res) => {
  let data = {
    email: "",
    first_name: "",
    last_name: "",
    username: "",
    billing: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "INDIA",
      email: "",
      phone: "",
    },
  };
  data.email = req.body.email;
  data.first_name = req.body.first_name;
  data.last_name = req.body.last_name;
  data.username = req.body.username;
  data.billing.first_name = req.body.first_name;
  data.billing.last_name = req.body.last_name;
  data.billing.company = req.body.company;
  data.billing.address_1 = req.body.address_1;
  data.billing.address_2 = req.body.address_2;
  data.billing.city = req.body.city;
  data.billing.state = req.body.state;
  data.billing.email = req.body.email;
  data.billing.phone = req.body.phone;

  console.log("data::/", req.body);

  WooCommerce.post("customers", data)
    .then((response) => {
      console.log("response", response.data);
      res.send("inserted data");
    })
    .catch((error) => {
      console.log("erroe", error);
      res.send(error);
    });
});

module.exports = router;
