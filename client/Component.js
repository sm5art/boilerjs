var React = require('react');
var ReactDOM = require('react-dom');

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:props.user.name
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({name:e.target.value})
    console.log($('h1').html());
  }
  render() {
    return <div>
        <h1>Name: {this.state.name}</h1>
        <input type ="text" value={this.state.name} onChange={this.handleChange}/>
      </div>;
  }
}
var user = {"name":'yo dawg'};
ReactDOM.render(<User user={user}/>,document.getElementById('react-container'));
