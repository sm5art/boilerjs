var React = require('react');
var ReactDOM = require('react-dom');

class UserName extends React.Component {  
  render() {
    return <div>name: {this.props.name}</div>;
  }
}

class User extends React.Component {  
  render() {
    return <div>
        <h1>City: {this.props.user.city}</h1>
        <UserName name={this.props.user.name} />
      </div>;
  }
}

var user = { name: 'John', city: 'San Francisco' };  
ReactDOM.render(<User user={user} />, document.getElementById('react-container'));