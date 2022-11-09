const bodyParser = require('body-parser');
const cors = require('cors');
'use strict';
// [START app]
const express = require('express');
const app = express();
const corsOptions = {
  origin: true,
  mode: 'no-cors',
  optionsSuccessStatus: 200
};

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.listen(port, () => {

  console.log('Listening on port', port);

});

app.get('/', async (req, res) => {
  try {

    const corsMiddleware = cors(corsOptions);

    return corsMiddleware(req, res, () => {
      const servicedata = req.body;
      res.send("Api Work");
    });

  }

  catch (ex) {
    console.log(`Error: ${ex}`);
  }

});

app.get('/data',async (req, res) => {
  try {

    const corsMiddleware = cors(corsOptions);

    return corsMiddleware(req, res, () => {
      const servicedata = req.body;
      res.json({
        data:{
        product_id : "SKU_12345",
        product_name : "Really comfortable shoes",
        product_brand : "Adsmurai",
        categories : {
          product_category: "Apparel",
          product_category2: "Adult",
          product_category3: "Shoes"
        },
        prices: {
          product_price: "39,99",
          product_currency: "€"
        }}
      });
    });

  }

  catch (ex) {
    console.log(`Error: ${ex}`);
  }
});


// [END app]

module.exports = app;