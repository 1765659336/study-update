import React, { Component } from 'react';
import { Button } from 'choerodon-ui/pro';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';

export default class TestPagePage extends Component {
  render() {
    return (
      <PageHeaderWrapper title="TestPagePage" header={<Button>按钮</Button>}>
        <div>Hello TestPage</div>
      </PageHeaderWrapper>
    );
  }
}
