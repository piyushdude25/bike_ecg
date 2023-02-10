const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
  url: "https://www.bikeecg.com", // Your store URL
  // consumerKey: "ck_ee3e31a26517f249c43e1b990cd230da52ddd9f6", // Your consumer key
  // consumerSecret: "cs_17e7854f52fa5109acd2cd929f7b80597b329e9e", // Your consumer secret
  consumerKey: "ck_465246b045bed29b8c708832a84f2ac869fda07f",
  consumerSecret: "cs_bc84aee747598d5b6344257f676cb1da4da80d3a",

  version: "wc/v3", // WooCommerce WP REST API version
});

module.exports = WooCommerce;
