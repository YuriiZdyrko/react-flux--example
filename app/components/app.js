var React = require('react');
var Product = require('./product');
var Cart = require('./cart');

var App = React.createClass({

  getInitialState: function() {
    return {
      cartItems: [],
      products: [
        {
          "id": "1",
          "price": 3,
          "picture": "http://lorempixel.com/100/100/animals/1",
          "name": "cat"
        },
        {
          "id": "2",
          "price": 2,
          "picture": "http://lorempixel.com/100/100/animals/2",
          "name": "dog"
        },
        {
          "id": "3",
          "price": 10,
          "picture": "http://lorempixel.com/100/100/animals/3",
          "name": "chicken"
        },
        {
          "id": "4",
          "price": 5,
          "picture": "http://lorempixel.com/100/100/animals/4",
          "name": "snake"
        },
        {
          "id": "5",
          "price": 100,
          "picture": "http://lorempixel.com/100/100/animals/5",
          "name": "spider"
        },
        {
          "id": "6",
          "price": 2,
          "picture": "http://lorempixel.com/100/100/food/6",
          "name": "fish"
        },
        {
          "id": "7",
          "price": 3,
          "picture": "http://lorempixel.com/100/100/food/7",
          "name": "hamster"
        }
      ]
    }
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
                />
              )
            }.bind(this))}
          </ul>
        </div>
        <Cart />
      </div>
    );
  }
});
  
module.exports = App;
