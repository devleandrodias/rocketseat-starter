const express = require('express');
const mongoose = require('mongoose');
require('./src/models/Product');

const Product = mongoose.model('Product');
// Iniciando a aplicação
const app = express();

// Conectando o banco
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', async (req, res) => {
  const products = await Product.find();
  return res.json(products);
});

// Servidor rodando
app.listen(3001);
