import { DataSetProps } from "choerodon-ui/pro/lib/data-set/DataSet";
import { FieldType } from "choerodon-ui/pro/lib/data-set/enum";

// 推荐导出一个函数用于生成ds
// 这里传入了一个字段用来设置查询 以得到不用的数据 同时进行组件的复用
const getTableDSProps = (): DataSetProps => ({
  autoQuery: true, // 在创建成功后进行查询
  fields: [
    {
      name: "id", // 字段名
      label: "员工编号", // 字段标签 可以在form或者table上生成对应的label
      type: FieldType.number, // 字段类型, 决定以什么组件进行渲染
      required: true, // 是否必填
    },
    {
      name: "name",
      label: "员工姓名",
      type: FieldType.string,
      required: true, // 是否必填
    },
    {
      name: "desc",
      label: "员工描述",
      type: FieldType.string,
    },
    {
      name: "charger",
      label: "主管姓名",
      type: FieldType.string,
    },
    {
      name: "date",
      type: FieldType.date,
      label: "入职日期",
      required: true, // 是否必填
    },
  ],
  queryFields: [
    {
      name: "id", // 字段名
      label: "员工编号", // 字段标签 可以在form或者table上生成对应的label
      type: FieldType.number, // 字段类型, 决定以什么组件进行渲染
    },
    {
      name: "name",
      label: "员工姓名",
      type: FieldType.string,
    },
    {
      name: "charger",
      type: FieldType.string,
      label: "主管姓名",
    },
    {
      name: "date",
      type: FieldType.date,
      label: "入职日期",
    },
  ],
  // 处理请求相关内容 此处用来做mock处理
  transport: {
    // 当使用ds.query()或者触发查询的时候可以调用的接口地址
    read: {
      url: "/_api/standard-table/list",
      method: "get",
    },
    // 当使用ds.delete()或者触发删除的时候可以调用的接口地址
    destroy: {
      url: "/_api/standard-table/delete",
      method: "delete",
    },
    // 当使用ds.submit()或者触发保存的时候可以调用的接口地址
    submit: {
      url: "/_api/standard-table/submit",
      method: "post",
    },
  },
});

export default getTableDSProps;
