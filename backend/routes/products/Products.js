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

module.exports = router;
