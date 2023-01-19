const express = require("express");
const app = express();

const Products = require("./routes/product/Products");
const Customers = require("./routes/customers/Customers");
const Orders = require("./routes/order/Orders");

app.use("/products", Products);
app.use("/customers", Customers);
app.use("/order", Orders);

app.get("/", (req, res) => {
  res.send("running....");
});

app.listen(5000, () => {
  console.log("port is working...");
});
