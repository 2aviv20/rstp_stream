import React from 'react'
import Users from '../services/users.service'
import { connect } from 'react-redux';

class UsersList extends React.Component {
  constructor() {
    super();
    this.users = new Users();
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    // const res = await fetch("http://localhost:3001/users");
    const response = await this.users.getUsers();
    this.setState({ users: response });
  }
  render() {
    const usersList = this.state.users.map((user) => <li key={user.id} >{user.first_name}</li>);
    return (
      <div className="users-list">
        <h1>Counter {this.props.ctr}</h1>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {usersList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  }
};

export default connect(mapStateToProps)(UsersList);


