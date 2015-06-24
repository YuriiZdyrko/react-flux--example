var React = require('react');
var Product = require('./product');
var Cart = require('./cart');
var cartStore = require('../cartStore');

var App = React.createClass({

  getInitialState: function() {
    return {
      cartItems: [],
      products: [
        {
          "id": "558a843a101751ae22ce9479",
          "isAddedToCart": true,
          "price": 3,
          "picture": "http://lorempixel.com/100/100/food/1",
          "name": "Pork chop"
        },
        {
          "id": "558a843a6825eab048d43b95",
          "isAddedToCart": false,
          "price": 2,
          "picture": "http://lorempixel.com/100/100/food/2",
          "name": "Steak"
        },
        {
          "id": "558a843a56f9adc8ff5a3705",
          "isAddedToCart": false,
          "price": 10,
          "picture": "http://lorempixel.com/100/100/food/3",
          "name": "Pork"
        },
        {
          "id": "558a843a37804f382ae46e52",
          "isAddedToCart": false,
          "price": 5,
          "picture": "http://lorempixel.com/100/100/food/4",
          "name": "Cabbage"
        },
        {
          "id": "558a843a8e01cbd37e0c1d2f",
          "isAddedToCart": true,
          "price": 100,
          "picture": "http://lorempixel.com/100/100/food/5",
          "name": "Chicken"
        },
        {
          "id": "558a843a298ffc04c293eebc",
          "isAddedToCart": false,
          "price": 2,
          "picture": "http://lorempixel.com/100/100/food/6",
          "name": "Bacon"
        },
        {
          "id": "558a843a4482581e061639fc",
          "isAddedToCart": false,
          "price": 3,
          "picture": "http://lorempixel.com/100/100/food/7",
          "name": "Fried chicken"
        }
      ]
    }
  },

  componentDidMount: function() {
    cartStore.addChangeListener(function(newState) {
      this._onChange();
    }.bind(this))
  },

  componentWillUnmount: function() {
    cartStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({cartItems: cartStore.getItems()});
  },

  _onAddToCart: function(product) {
    var newCartItems = this.state.cartItems.concat(product);
    this.setState({cartItems: newCartItems});
  },

  render: function() {
    // Example of parent->child communication
    return (
      <div>
        <div className='products'>
          <h1>Products</h1>
          <ul>
            {this.state.products.map(function(product, index) {
              return (
                <Product
                  product={product}
                  key={index}
                  onAddToCart={this._onAddToCart} />
              )
            }.bind(this))}
          </ul>
        </div>
        <Cart items={this.state.cartItems} />
      </div>
    );
  }
});
  
module.exports = App;
