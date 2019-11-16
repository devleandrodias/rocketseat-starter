const express = require('express');
const mongoose = require('mongoose');
require('./src/models/Product');

const Product = mongoose.model('Product');
// Iniciando a aplicação
const app = express();
app.use(express.json());

// Conectando o banco
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  return res.json(products);
});

app.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  return res.json(product);
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  return res.json(product);
});

app.put('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // product vem retornado o valor novo
  });
  return res.json(product);
});

app.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  return res.json({ ok: 'Registro Deletado' });
});

// Servidor rodando
app.listen(3001);
