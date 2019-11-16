import express from 'express';
import mongoose from 'mongoose';
import './src/models/Product';
// Iniciando a aplicação
const app = express();

// Conectando o banco
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Meus models
const Product = mongoose.model('Product');

// Rotas da aplicação
app.get('/new', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Interface gráfica para mobile',
    url: 'https://github.com/facebook/react-native',
  });

  return res.json({ ok: true });
});

// Servidor rodando
app.listen(3001);
