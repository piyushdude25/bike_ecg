const express = require("express");
const app = express();

const Products = require("./routes/products/Products");
const Customers = require("./routes/customers/Customers");
const Orders = require("./routes/orders/Orders");

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
