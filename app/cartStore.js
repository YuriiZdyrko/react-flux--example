var EventEmitter = require('events').EventEmitter;
var dispatcher = require('./dispatcher');
var merge = require('merge');

var CartStore = merge(EventEmitter.prototype, {

  _items: [],

  getItems: function() {
    return this._items;
  },

  addProductToCart: function(product){
    this._items = this._items.concat(product);
  },

  removeProductFromCart: function(product){
    this._items = this._items.filter(function(item) {
      return item.id !== product.id;
    });
  },

  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action) {

    // Respond to actions
    case 'ADD_PRODUCT_TO_CART':
      CartStore.addProductToCart(payload.data);
      break;

    case 'REMOVE_PRODUCT_FROM_CART':
      CartStore.removeProductFromCart(payload.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  CartStore.emitChange();

  return true;

});

module.exports = CartStore;