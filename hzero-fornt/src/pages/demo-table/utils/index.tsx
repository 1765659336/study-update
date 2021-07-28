import React from "react";
import { DataSet, Modal, message } from "choerodon-ui/pro";
import Record from "choerodon-ui/pro/lib/data-set/Record";
import EditDetail from "../components/EditDetail";
import OperationRecord from "../components/OperationRecord";
import getTableDSProps from "../stores/tableDS";

const modalDs = new DataSet({
  ...getTableDSProps(),
  autoQuery: false,
  autoCreate: false,
});

const recordModalKey = Modal.key();
const operationRecordModalKey = Modal.key();

/**
 * 行删除record
 * @param ds DataSet
 * @param record Record
 */
export const handleLineDelete = (ds: DataSet, record: Record) => {
  ds.delete(record);
};

/**
 * 对单个record的处理 新增 编辑 查看详情
 * @param ds DataSet
 * @param outRecord Record
 * @param readOnly boolean 是否只读 只读的情况下为详情
 */
export const handleDealWithRecord = (
  ds: DataSet,
  outRecord?: Record,
  readOnly: boolean = false
) => {
  let record = outRecord;
  let title = "编辑";
  let isNew = false;
  if (!record) {
    isNew = true;
    title = "新增";
    record = modalDs.create({});
  } else {
    // 暂存数据
    record.save();
  }
  if (readOnly) {
    title = "详情";
  }

  Modal.open({
    key: recordModalKey,
    title,
    drawer: true,
    children: <EditDetail record={record} isNew={isNew} readOnly={readOnly} />,
    okText: "保存",
    onOk: async () => {
      // 此时是新建
      if (modalDs.current) {
        const flag = await modalDs.validate();
        if (flag) {
          ds.create(modalDs.current.toData(), 0);
          await ds.submit();
        }
        return flag;
      }
      return ds.submit();
    },
    onCancel() {
      // 对于点击modal保存为实时保存的情况 也可以使用reset代替
      if (!modalDs.current && record) {
        record.restore();
      }
    },
    afterClose() {
      modalDs.reset();
    },
    closable: true,
    footer: readOnly ? null : undefined,
  });
};

/**
 * 状态改变并提交
 * @param record Record
 * @param ds DataSet
 */
export const handleChangeStatus = async (record: Record, ds: DataSet) => {
  record.set("status", record.get("status") === 0 ? 1 : 0);
  await ds.submit();
};

/**
 * 展示操作记录
 * @param record Record
 */
export const handleShowOperationRecord = (record: Record) => {
  if (!record) {
    message.error("新数据-无操作记录");
    return;
  }
  const serialNumber = record.get("serialNumber");

  Modal.open({
    key: operationRecordModalKey,
    title: "操作记录",
    drawer: true,
    children: <OperationRecord serialNumber={serialNumber} />,
    closable: true,
    footer: null,
  });
};
