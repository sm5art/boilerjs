var React = require('react');
var ReactDOM = require('react-dom');

class User extends React.Component {
  render() {
    return <div>
        <h1>Name: {this.props.user.name}</h1>
      </div>;
  }
}
