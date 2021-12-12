import React, { ChangeEvent, Component, FormEvent } from "react";

interface IState {
  inputValue: string;
}

class MyForm extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  changeInputValue = (e: ChangeEvent) => {
    this.setState({
      //   @ts-ignore
      inputValue: e.target.value,
    });
  };

  onSubmit = (e: FormEvent) => {
    /* 不同浏览器厂商的阻止默认事件的方式 */
    e.preventDefault();
    e.stopPropagation();
    console.log("表单提交");
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.onSubmit(e);
          }}
        >
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => {
              this.changeInputValue(e);
            }}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
