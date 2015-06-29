var dispatcher = require('./dispatcher');

module.exports = {
  addProductToCart: function(product) {
    dispatcher.dispatch({
      action: 'ADD_PRODUCT_TO_CART',
      data: product
    });
  },
  removeProductFromCart: function(product) {
    dispatcher.dispatch({
      action: 'REMOVE_PRODUCT_FROM_CART',
      data: product
    });
  }
};