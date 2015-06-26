var React = require('react');
var cartStore = require('../cartStore');

var Cart = React.createClass({

  getInitialState: function() {
    return {
      cartItems: []
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

  _onAddToCart: function(product) {
    var newCartItems = this.state.cartItems.concat(product);
    this.setState({cartItems: newCartItems});
  },

  _onChange: function() {
    this.setState({cartItems: cartStore.getItems()});
  },

  render: function() {
    var totalClassName;
    if (!this.state.cartItems.length) {
      totalClassName = 'hidden';
    }

    return (
      <div className='cart'>
        <h1>Cart</h1>

        <ul>
          {this.state.cartItems.map(function(item, index) {
            return (
              <li key={index}>
                <div>{item.name} {item.count}</div>
              </li>
            )
          })}
        </ul>

        <h3 className={totalClassName}>
          Total: $
          {this.state.cartItems.reduce(function(prev, curr, i, array) {
            prev += array[i].price;
            return prev;
          }, 0)}
        </h3>
      </div>
    )
  }
});

module.exports = Cart;