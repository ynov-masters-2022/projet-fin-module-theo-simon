'use strict';

const register = require('react-server-dom-webpack/node-register');
register();

const babelRegister = require('@babel/register');
babelRegister({
  ignore: [/[\\\/](build|server|node_modules)[\\\/]/],
  presets: [['react-app', {runtime: 'automatic'}]],
  plugins: ['@babel/transform-modules-commonjs'],
});

const express = require('express');
const cors = require('cors');
const {renderToPipeableStream} = require('react-server-dom-webpack/writer');
const React = require('react');

const Product = require('../src/components/ProductPage/Product.server').default;

const app = express();
const port = 3000;
app.use(cors());
app.get('/getProductPage', (req, res) => {
  const productId = JSON.parse(req.query.productId);
  const {pipe} = renderToPipeableStream(
    React.createElement(Product, { productId }),
  );
  pipe(res);
});

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
})