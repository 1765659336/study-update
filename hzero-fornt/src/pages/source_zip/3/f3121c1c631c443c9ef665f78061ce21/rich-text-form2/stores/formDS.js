import { FieldType } from 'choerodon-ui/pro/lib/data-set/enum'; // 推荐导出一个函数用于生成ds

const getFormDsProps = () => ({
  // 自动创建，对于form的处理,建议使用autoCreate 可以避免一些校验的问题
  autoCreate: true,
  fields: [
    {
      name: 'title',
      // 字段名
      label: '标题',
      // 字段标签 可以在form或者table上生成对应的label
      type: FieldType.string,
      // 字段类型, 决定以什么组件进行渲染
      required: true, // 是否必填
    },
    {
      name: 'language',
      type: FieldType.string,
      label: '语言',
      required: true,
    },
    {
      name: 'description',
      type: FieldType.string,
      label: '描述',
    },
    {
      name: 'cover',
      type: FieldType.string,
      label: '封面',
      required: true,
      defaultValidationMessages: {
        valueMissing: '请上传封面',
      },
    },
    {
      name: 'content',
      type: FieldType.object,
      label: '内容',
      required: true,
    },
    {
      name: 'attachment',
      type: FieldType.string,
      label: '附件',
    },
  ],
  // 处理请求相关内容 此处用来做mock处理
  transport: {
    // 当使用ds.submit()或者触发保存的时候可以调用的接口地址
    submit: {
      url: '/_api/rich-text-form/submit',
      method: 'post',
    },
  },
});

export default getFormDsProps;
