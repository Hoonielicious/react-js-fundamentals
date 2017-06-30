import React from 'react';

import Profile from './Profile';
import AddProfile from './AddProfile';

var MyComponent = props => (
  <div>
    <p>I am a functional component here</p>
    <p>{props.x}</p>
  </div>
)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    }
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
     
  }

  addUser(newProfile) {
    this.setState({
      profiles: this.state.profiles.concat([newProfile])
    });
  }

  render() {
    let profiles = this.state.profiles.map(profile => {
      return (
        <div>
          <Profile
            name={profile.name}
            age={profile.age}
            hobbies={profile.hobbies}
            bio={profile.bio}/>
        </div>
      )
    });
    return(
        <div>
          {profiles}
          <AddProfile addUser={this.addUser} />
          <MyComponent x='hello'/>
        </div>
    );
  }
}
