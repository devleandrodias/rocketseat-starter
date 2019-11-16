const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./src/models/Product');

const Product = mongoose.model('Product');
// Iniciando a aplicação
const app = express();
app.use(express.json());
app.use(cors());

// Conectando o banco
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/products', async (req, res) => {
  const { page = 1 } = req.query;
  const products = await Product.paginate({}, { page, limit: 5 });
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
