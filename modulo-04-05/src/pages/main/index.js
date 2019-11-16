import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    products: [],
  };

  // Toda função do react é escrita assim
  componentDidMount() {
    this.loadProducts();
  }

  // Toda função criada precisa ser em formato de arrow para entender escopo do this
  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  };

  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <h1 key={product._id}>{product.title}</h1>
        ))}
      </div>
    );
  }
}
