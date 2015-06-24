var React = require('react');

var Cart = React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var totalClassName;
    if (!this.props.items.length) {
      totalClassName = 'hidden';
    }

    return (
      <div className='cart'>
        <h1>Cart</h1>

        <ul>
          {this.props.items.map(function(item, index) {
            return (
              <li key={index}>
                <div>{item.name} {item.count}</div>
              </li>
            )
          })}
        </ul>

        <h3 className={totalClassName}>
          Total: $
          {this.props.items.reduce(function(prev, curr, i, array) {
            prev += array[i].price;
            return prev;
          }, 0)}
        </h3>
      </div>
    )
  }
});

module.exports = Cart;