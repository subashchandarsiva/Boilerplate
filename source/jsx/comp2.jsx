var Time = React.createClass({
  render: function() {
    return <h2>The Time is: {new Date().toLocaleTimeString()}</h2>;
  }
});