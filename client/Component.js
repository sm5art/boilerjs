var React = require('react');
var ReactDOM = require('react-dom');

//TODO:IMPLEMENT THIS USEFULLY
/*
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
*/

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.post._id,
      author:props.post.author,
      post:props.post.post
    };
  }
  render() {
    return <div>
        <h1>Id: {this.state.id}</h1>
        <h2>Post: {this.state.post}</h2>
        <h3>Author : {this.state.author}</h3>
      </div>;
  }
}

$.ajax({url:"/list"})
  .done(function(data){
    for(var d in data){
      console.log(data[d]);
      $('#react-container').append($('<div/>',{ id:data[d]._id }))
      ReactDOM.render(<Post post={data[d]}/>,
      document.getElementById(data[d]._id));
    }
  });
