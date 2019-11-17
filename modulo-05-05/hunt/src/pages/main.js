import React, {Component} from 'react';
import {View, Text} from 'react-native';
import api from '../service/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JS Hunt',
  };

  state = {
    docs: [],
  };

  UNSAFE_componentWillMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await fetch(
      'https://rocketseat-node.herokuapp.com/api/products',
    );

    const {docs} = response.data;
    this.setState(docs);
  };

  render() {
    return (
      <View>
        <Text>Página Inicial</Text>
        {this.state.docs.map(product => (
          <Text key={product._id}>{product.title}</Text>
        ))}
      </View>
    );
  }
}
