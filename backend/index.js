const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Products = require("./routes/products/Products");
const Customers = require("./routes/customers/Customers");
const Orders = require("./routes/orders/Orders");
////...............>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Initialize WebHooks module.
// const WebHooks = require("node-webhooks");

// // Initialize webhooks module from on-disk database
// // var webHooks = new WebHooks({
// //   db: "./webHooksDB.json", // json file that store webhook URLs
// //   httpSuccessCodes: [200, 201, 202, 203, 204], //optional success http status codes
// // });

// // Alternatively, initialize webhooks module with object; changes will only be
// // made in-memory
// var webHooks = new WebHooks({
//   db: { addPost: ["http://localhost:5050/posts"] }, // just an example
// });

// // sync instantation - add a new webhook called 'shortname1'
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
//   email: "asd123@gmail.com",
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

//.............<<<<<<<<<<<<<<<<<<<<<<<<<<<
// const customerRoutes = require("./customerPort/customerRoutes");

app.use("/products", Products);
app.use("/customers", Customers);
app.use("/order", Orders);

// app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("running....");
});

app.listen(5050, () => {
  console.log("port is working...");
});

// ///////////  start from fere .>>xxxxxxxxxxxx
// //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // const users = [{ name: "" }, { last: "" }];
// // console.log("users...:", users);
// // app.post("/add", (req, res) => {
// //   console.log("indert post function..", req.body);
// //   const user = req.body;
// //   users.push(user);
// //   res.status(201).send(" data created..");
// // });
// // ..........------------------------

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
// let data123 = {
//   email: "",
//   first_name: "",
//   last_name: "",
//   username: "",
//   password: "",
//   billing: {
//     first_name: "",
//     last_name: "",
//     company: "",
//     address_1: "",
//     address_2: "",
//     city: "",
//     state: "",
//     postcode: "",
//     country: "",
//     email: "",
//     phone: "",
//   },
// };
// // var data123 = [{ email: "", name: "" }];
// // var data123 = { email: "", name: "" };

// // console.log("dataa222...:", data123);
// app.post("/add", (req, res) => {
//   // console.log("indert post function..", req.body);

//   // const user = req.body;
//   // data123.push(user);
//   // data123 = user;
//   data123 = req.body;
//   // console.log("here:::", data123);
//   webHooks.trigger("shortname1", { data: data123 });
//   res.status(201).send(req.body);
// });

// // webHooks.trigger("shortname1", { data: dataa });
// // webHooks.trigger("shortname1", { data: data123 });
// //////////  end at here  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
