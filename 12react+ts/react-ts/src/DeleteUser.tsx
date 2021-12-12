import React, { Component } from "react";
import { IUser } from "./UserList";

interface IProps {
  user: IUser;
  fatherDelete(user:IUser):void
}

class DeleteUser extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {}
  }

  deleteUser = (user:IUser) => {
      console.log(1);
    setTimeout(() => {
        this.props.fatherDelete(user);
    },2000)
  }

  render() {
    return <button onClick={() => {this.deleteUser(this.props.user)}}>删除（子组件）</button>;
  }
}

export default DeleteUser;
