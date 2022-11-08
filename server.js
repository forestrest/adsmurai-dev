const { json } = require('body-parser');
'use strict';

// [START app]
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(JSON.stringify( {
    "product_id": "SKU_12345",
    "product_name": "Really comfortable shoes",
    "product_brand": "Adsmurai",
    "categories": {
      "product_category": "Apparel",
      "product_category2": "Adult",
      "product_category3": "Shoes"
    },
    "prices": {
      "product_price": "39,99",
      "product_currency": "€"
    }
  }));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;