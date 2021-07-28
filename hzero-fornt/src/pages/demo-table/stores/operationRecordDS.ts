import { DataSetProps } from "choerodon-ui/pro/lib/data-set/DataSet";
import { FieldType } from "choerodon-ui/pro/lib/data-set/enum";

// 推荐导出一个函数用于生成ds
// 这里传入了一个字段用来设置查询 以得到不用的数据 同时进行组件的复用
const getOperationRecordDSProps = (serialNumber: string): DataSetProps => ({
  autoQuery: true, // 在创建成功后进行查询
  fields: [
    {
      name: "operator", // 字段名
      label: "操作人", // 字段标签 可以在form或者table上生成对应的label
      type: FieldType.string, // 字段类型, 决定以什么组件进行渲染
    },
    {
      name: "operatorType",
      label: "操作类型",
      type: FieldType.string,
      // 设置 lookup 可以将一个文本框类型变成一个下拉框类型
      // 项目上更常见使用code
      lookupUrl: "/_api/standard-table/code/operatorType",
    },
    {
      name: "operatorTime",
      type: FieldType.dateTime,
      label: "操作时间",
    },
  ],
  queryFields: [
    {
      name: "operatorType",
      label: "操作类型",
      type: FieldType.string,
      lookupUrl: "/_api/standard-table/code/operatorType",
    },
  ],
  // 查询字段 这里暂时没有实际用途 在实际开发中多为id或者type之类
  queryParameter: {
    serialNumber,
  },
  // 处理请求相关内容 此处用来做mock处理
  transport: {
    // 当使用ds.query()或者触发查询的时候可以调用的接口地址
    read: {
      url: "/_api/standard-table/operation-record/query",
      method: "get",
    },
    // 当使用ds.delete()或者触发删除的时候可以调用的接口地址
    destroy: {
      url: "/_api/standard-table/operation-record/delete",
      method: "delete",
    },
  },
});

export default getOperationRecordDSProps;
