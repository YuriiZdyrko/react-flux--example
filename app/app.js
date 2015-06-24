var React = require('react');

var App = React.createClass({
  render: function() {
    var d = new Date();
    return (
      <div>
        Hello world {d.toString()}!
      </div>
    );
  }
});
  
module.exports = App;
