import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    const allUsers = this.props.store.getState().users.map(function(user, index) {
      return(
        <div key={index}>
          <li>{user.userName} -- {user.hometown}</li>
        </div>
      )
    })
    return (
      <div>
        <ul>
        <p>Username -------  Hometown:</p>
        {allUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users)

//export const ConnectedUsers = Users // aren't we supposed to be connecting something around here?
