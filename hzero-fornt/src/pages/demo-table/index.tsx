import React, { FC, useContext } from "react";
import { PageHeaderWrapper } from "hzero-boot/lib/components/Page";
import { Button } from "choerodon-ui/pro";

import { ButtonColor } from "choerodon-ui/pro/lib/button/enum";
import TablePage from "./components/TablePage";
import Store, { StoreProvider } from "./stores";
import { handleDealWithRecord } from "./utils";

const StandardTable: FC = (props) => {
  const { tableDs } = useContext(Store);
  const handleCreate = () => {
    handleDealWithRecord(tableDs!);
  };

  return (
    <PageHeaderWrapper
      header={
        <div>
          <Button onClick={handleCreate} color={ButtonColor.primary}>
            新建
          </Button>
        </div>
      }
    >
      <div>
        <TablePage {...props} />
      </div>
    </PageHeaderWrapper>
  );
};

// 注入store
// 不这样做会导致在 StandardTable 中拿不到ds数据 导致无法做提交操作
const StandardTableWrapper: FC = (props) => {
  return (
    <StoreProvider>
      <StandardTable {...props} />
    </StoreProvider>
  );
};

export default StandardTableWrapper;
