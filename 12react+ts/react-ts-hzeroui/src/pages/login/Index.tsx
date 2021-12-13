import { Button, Form, Input, message } from "antd";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IAdmin, login } from "../../api/login";
import { set } from "../../utils/storage";

/* react-ts使用编程式导航时，先记住这么做，目前知识量不足以理解
    1.声明IProps接口继承 RouteComponentProps接口
    2.导出组件时，使用withRouter高级组件
*/

interface IProps extends RouteComponentProps {}
class Index extends Component<IProps> {
  handleSubmit = (values: IAdmin) => {
    login(values)
      .then((response) => {
        const { code, msg } = response.data;
        if (code === 0) {
          const { token } = response.data.data;
          set("token", token);
          message.success(msg);
          this.props.history.push("/home")
        }else {
            message.error(msg)
        }
      })
  };
  render() {
    return (
      <>
        <Form
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 6 }}
          onFinish={this.handleSubmit}
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              {
                type: "string",
                required: true,
                message: "用户名不可以为空",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                type: "string",
                required: true,
                message: "密码不可以为空",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 13, span: 6 }}>
            {/* 表单中的button具有原生事件，submit和reset */}
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="primary" htmlType="reset">
              清空
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default withRouter(Index)
