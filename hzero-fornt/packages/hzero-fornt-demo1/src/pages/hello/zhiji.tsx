import React from 'react';
import { DataSet, Lov, Row, Col,Select } from 'choerodon-ui/pro';
import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum';

export default class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: 'code',
        type: 'string' as FieldType,
        lookupCode: 'TEST.STAFF.STATUS',
        required: true,
      },
      {
        name: 'code_string',
        type: 'object' as FieldType,
        lovCode: 'TODO.USER',
        required: true,
      },
    ],
  });

  render() {
    return (
      <Row gutter={10}>
        <Col span={12}>
          <Select
            dataSet={this.ds}
            name="code"
          />
        </Col>
        <Col span={12}>
          <Lov dataSet={this.ds} name="code_string" />
        </Col>
      </Row>
    );
  }
}