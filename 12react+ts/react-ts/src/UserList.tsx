import React, { Component } from "react";
import DeleteUser from './DeleteUser'

export interface IUser {
  id: number;
  cname: string;
}

interface IState {
  userList: IUser[];
}

export class UserList extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { userList: [] };
    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    const userList = [];
    for (let i = 0; i <= 10; i++) {
      userList.push({ id: i, cname: "username" });
    }
    this.setState({ userList });
  }

  deleteUser(user: IUser) {
    this.setState({
      userList: this.state.userList.filter((item) => item.id !== user.id),
    });
    /* this.setState((state) => ({
      userList: state.userList.filter((item) => user.id !== item.id),
    })); */
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.userList.map((user) => (
            <li key={user.id}>
              {user.id}---{user.cname}
              <button onClick={this.deleteUser.bind(this,user)}>删除1</button>
              <button onClick={() => {(this.deleteUser.bind(this, user))()}}>删除2</button>
              <button onClick={() => {this.deleteUser(user)}}>删除3</button>
              <button onClick={function(){alert("hhh")}}>alert</button>
              <DeleteUser user={user} fatherDelete={this.deleteUser}></DeleteUser>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}