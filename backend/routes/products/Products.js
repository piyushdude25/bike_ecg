const express = require("express");
const router = express.Router();
const WooCommerce = require("../../woocommers/woocommerce");

router.get("/", (req, res) => {
  WooCommerce.get("products")
    .then((response) => {
      res.send(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  WooCommerce.get("products/" + id)
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

////...............>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const WebHooks = require("node-webhooks");

// var webHooks = new WebHooks({
//   db: { addPost: ["http://localhost:5050/posts"] }, // just an example
// });

// webHooks
//   .add(
//     "shortname1",
//     "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTZkMDYzNzA0MzI1MjZjNTUzNSI_3D_pc"
//   )
//   .then(function () {
//     // done
//     console.log("done...123");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// const dataa = {
//   email: "done1@gmail.com",
//   first_name: "asdfkkk",
//   last_name: "asdf333",
//   username: "dfgh",
//   password: "@pass123",
//   billing: {
//     first_name: "sdf",
//     last_name: "sdf",
//     company: "sdf",
//     address_1: "idoe",
//     address_2: "dsr",
//     city: "cece",
//     state: "nagpur",
//     postcode: "44222",
//     country: "india",
//     email: "asd@gmail.com",
//     phone: "2345234555",
//   },
// };
// webHooks.trigger("shortname1", { data: dataa });

//...............--------------------------..

// const app = express();
// app.post("/add", async (req, res) => {
//   console.log("indert post function..");

//   const pro = {
//     name: "",
//     last: "",
//   };
//   const data = new pro({
//     name: req.body.name,
//     last: req.body.last,
//   });

//   const val = await data.save();
//   res.json(val);
// });
//.............<<<<<<<<<<<<<<<<<<<<<<<<<<<

module.exports = router;
