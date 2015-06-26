var React = require('react');
var actions = require('../actions');
var cartStore = require('../cartStore');

var Product = React.createClass({

  getInitialState: function() {
    return {
      isAddedToCart: false
    }
  },

  componentDidMount: function() {
    cartStore.addChangeListener(function() {
      this._onChange();
    }.bind(this))
  },

  componentWillUnmount: function() {
    cartStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    var isAddedToCart = this._checkIfAddedToCart(cartStore.getItems());
    this.setState({isAddedToCart: isAddedToCart});
  },

  _checkIfAddedToCart: function(cartItems) {
    return cartItems.some(function(item) {
      return item.id === this.props.product.id;
    }.bind(this));
  },

  // Example of child->parent communication
  _addToCart: function() {
    actions.addProductToCart(this.props.product);
  },

  _removeFromCart: function() {
    actions.removeProductFromCart(this.props.product);
  },

  render: function() {
    var addedToCart;
    // If product is in Cart -> Show remove button
    if (this.state.isAddedToCart) {
      addedToCart = <button onClick={this._removeFromCart}>Remove from cart</button>
    }

    return (
      <li className='products__item'>
        <img src={this.props.product.picture} />
        {this.props.product.name}
        <button onClick={this._addToCart}>Add to cart</button>
        {addedToCart}
      </li>
    )
  }
});

module.exports = Product;