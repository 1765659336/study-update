import React, { FC } from "react";
import { Form, TextField, TextArea, NumberField } from "choerodon-ui/pro";

import Record from "choerodon-ui/pro/lib/data-set/Record";

const EditDetail: FC<{
  record: Record;
  readOnly?: boolean;
  isNew?: boolean;
}> = (props) => {
  const { record, readOnly = false, isNew = false } = props;
  return (
    <div>
      <Form disabled={readOnly} record={record}>
        {!isNew && <NumberField name="id" disabled />}
        <TextField name="name" />
        <TextArea name="desc" />
        <TextField name="charger" />
      </Form>
    </div>
  );
};

export default EditDetail;
