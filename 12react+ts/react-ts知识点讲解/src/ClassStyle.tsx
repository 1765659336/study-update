import React, { Component } from "react";
import "./ClassStyle.css";

interface IState {
  className: string[];
  styleDiv: object;
}

class ClassStyle extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      className: ["haeder"],
      styleDiv: { color: "white", backgroundColor: "black" },
    };
  }

  mouseEnter = () => {
    this.setState({ className: ["header", "header-hover"] });
  };

  mouseLeave = () => {
    this.setState({ className: ["header"] });
  };
  render() {
    return (
      <div
        style={{ color: "white", backgroundColor: "black" }}
        // 注意要用空格隔开，不然两个类名会拼凑到一起
        className={this.state.className.join(" ")}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        123
      </div>
    );
  }
}

export default ClassStyle;
