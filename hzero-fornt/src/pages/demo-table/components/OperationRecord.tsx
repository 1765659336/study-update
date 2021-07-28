import React, { FC, useMemo } from "react";
import { Table, DataSet } from "choerodon-ui/pro";
import { TableButtonType } from "choerodon-ui/pro/lib/table/enum";
import { ButtonColor } from "choerodon-ui/pro/lib/button/enum";
import getOperationRecordDSProps from "../stores/operationRecordDS";

import style from "../index.less";

const { Column } = Table;

const OperationRecord: FC<{
  serialNumber: string;
}> = (props) => {
  const { serialNumber } = props;
  const operationRecordDs = useMemo(
    () => new DataSet(getOperationRecordDSProps(serialNumber)),
    []
  );

  return (
    <div className={style["table-wrapper"]}>
      <Table
        dataSet={operationRecordDs!}
        buttons={[
          [
            TableButtonType.delete,
            {
              color: ButtonColor.default,
            },
          ],
        ]}
        // 默认的queryFieldsLimit为3 会导致在少于三个query的情况下宽度设置过窄的问题
        // 见 c7nConfig
        queryFieldsLimit={1}
        rowHeight={34}
      >
        <Column name="operator" />
        <Column name="operatorType" />
        <Column name="operatorTime" />
      </Table>
    </div>
  );
};

export default OperationRecord;
