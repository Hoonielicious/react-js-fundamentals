import React from 'react';

export default class AddProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      bio: '',
      hobby: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleHobby = this.handleHobby.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAge = this.handleAge.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  handleBio(e) {
    this.setState({
      bio: e.target.value
    });
  }

  handleHobby(e) {
    this.setState({
      hobby: e.target.value
    });
  }

  handleClick() {
    let newProfile = {
      name: this.state.name,
      age: this.state.age,
      bio: this.state.bio,
      hobbies: [this.state.hobby]
    }
    this.props.addUser(newProfile);
  }

  render() {
    return (
      <div>
        <p>Add a new profile</p>
        <input onChange={this.handleName} value={this.state.name} placeholder="name" />
        <input onChange={this.handleAge} value={this.state.age} placeholder="age" />
        <input onChange={this.handleBio} value={this.state.bio} placeholder="bio"  />
        <input onChange={this.handleHobby} value={this.state.hobby} placeholder="hobby"  />
        <button onClick={this.handleClick}>add new users</button>
      </div>
    )
  }
}

/*
<p>Add a new profile</p>
<button onClick={this.props.addUser}>add new users</button>
*/
