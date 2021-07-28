import React, { Component } from 'react';
import SideLayout from 'hzero-front/lib/layouts/SideLayout';

const DemoComponent = () => {
  return <div style={{ background: '#fff', color: 'red' }}>自定义布局测试</div>;
};
class CustomLayout extends Component {
  render() {
    return (
      <>
        <SideLayout {...this.props} extraHeaderRight={[<DemoComponent />]} />
      </>
    );
  }
}

export default CustomLayout;
