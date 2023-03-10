const express = require("express");
const router = express.Router();
const products = require("../public/products-data.json");

router.get("/detail/:id", (req, res) => {
  const productDetail = products.find((product) => product.id == req.params.id);
  if (!productDetail) return res.status(404).send("Not Find!");
  res.render("product-detail", {
    title: productDetail.title,
    price: productDetail.price,
    brand: productDetail.brand,
    description: productDetail.description,
  });
});

router.post("/search", (req, res) => {
  const productToSearch = req.body.searchProduct;
  matchedProducts = products.filter((product) => {
    return Object.keys(product).some((key) =>
      String(product[key]).includes(productToSearch)
    );
  });
  res.render("matched-product",  {matchedProducts} );
});
module.exports = router;
