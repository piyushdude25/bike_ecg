const express = require("express");
const app = express();

const Products = require("./routes/products/Products");
const Customers = require("./routes/customers/Customers");
const Orders = require("./routes/orders/Orders");
////...............>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Initialize WebHooks module.
var WebHooks = require("node-webhooks");

// Initialize webhooks module from on-disk database
// var webHooks = new WebHooks({
//   db: "./webHooksDB.json", // json file that store webhook URLs
//   httpSuccessCodes: [200, 201, 202, 203, 204], //optional success http status codes
// });

// Alternatively, initialize webhooks module with object; changes will only be
// made in-memory
var webHooks = new WebHooks({
  db: { addPost: ["http://localhost:5050/posts"] }, // just an example
});

// sync instantation - add a new webhook called 'shortname1'
webHooks
  .add(
    "shortname1",
    "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NmMwNTZkMDYzNzA0MzI1MjZjNTUzNSI_3D_pc"
  )
  .then(function () {
    // done
    console.log("done...");
  })
  .catch(function (err) {
    console.log(err);
  });
const dataa = {
  email: "asd@gmail.com",
  first_name: "asdf",
  last_name: "asdf",
  username: "dfgh",
  password: "@pass123",
  billing: {
    first_name: "sdf",
    last_name: "sdf",
    company: "sdf",
    address_1: "idoe",
    address_2: "dsr",
    city: "cece",
    state: "nagpur",
    postcode: "44222",
    country: "india",
    email: "asd@gmail.com",
    phone: "2345234555",
  },
};
webHooks.trigger("shortname1", { data: dataa });

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
