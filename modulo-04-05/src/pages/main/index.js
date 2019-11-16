import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // Toda função do react é escrita assim
  componentDidMount() {
    this.loadProducts();
  }

  // Toda função criada precisa ser em formato de arrow para entender escopo do this
  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  };

  render() {
    return <h1>Hello Rocketseat</h1>;
  }
}
