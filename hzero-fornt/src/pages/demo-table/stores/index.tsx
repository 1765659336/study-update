import React, { createContext, useMemo } from "react";
import { DataSet } from "choerodon-ui/pro";
import getTableDSProps from "./tableDS";

const Store = createContext<
  Partial<{
    children: React.ReactElement;
    tableDs: DataSet;
  }>
>({});

export default Store;

/**
 * 导出一个Provider 便于多层数据传递
 */
export const StoreProvider = (props: { children: React.ReactElement }) => {
  const { children } = props;
  const tableDs = useMemo(() => new DataSet(getTableDSProps()), []);
  const value = {
    ...props,
    tableDs,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
