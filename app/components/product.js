var React = require('react');

var Product = React.createClass({

  propTypes: {
    onAddToCart: React.PropTypes.func.isRequired
  },

  // Example of child->parent communication
  _addToCart: function() {
    this.props.onAddToCart(this.props.product);
  },

  render: function() {
    return (
      <li className='products__item'>
        <img src={this.props.product.picture} />
        {this.props.product.name}
        <button onClick={this._addToCart}>Add to cart</button>
      </li>
    )
  }
});

module.exports = Product;