import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {



  render() {
    const allUsers = this.props.store.users;
    return (
      <div>
        <ul>
        {this.props.store.users}
          /* stuff should happen around here */
        

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
