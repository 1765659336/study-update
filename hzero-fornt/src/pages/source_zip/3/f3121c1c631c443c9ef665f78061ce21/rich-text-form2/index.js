import React, { useMemo, useState } from 'react';
import { PageHeaderWrapper } from 'hzero-boot/lib/components/Page';
import {
  Button,
  DataSet,
  Form,
  TextField,
  Select,
  TextArea,
  Output,
  RichText,
  Upload as ProUpload,
} from 'choerodon-ui/pro';
import { ImageCrop, Icon, Upload } from 'choerodon-ui';
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum';
import { cloneDeep } from 'lodash';
import getFormDsProps from './stores/formDS';

const { Option } = Select;
const uploadButton = (
  <div>
    <Icon type="add" />
    <div className="c7n-upload-text">上传</div>
  </div>
);

const RichTextForm = () => {
  const ds = useMemo(() => new DataSet(getFormDsProps()), []);
  const [fileList, setFileList] = useState([]); // fileList,给基础的上传组件使用

  /**
   * 处理基础上传组件内容变化 注意有多个状态
   */

  const handleChange = (info) => {
    // 必须进行深拷贝,否则会因为指针地址一致导致后续不会进行视图更新
    setFileList(cloneDeep(info.fileList));

    if (ds.current && info.file?.response?.url) {
      if (info.file.status === 'removed') {
        ds.current.set('cover', '');
      } else {
        ds.current.set('cover', info.file?.response?.url);
      }
    }
  };
  /**
   * 处理Pro组件上传组件上传成功事件
   */

  const handleAttachmentUpload = (res) => {
    if (ds.current) {
      ds.current.set('attachment', res.url);
    }
  };
  /**
   * 保存提交
   */

  const handleSave = () => {
    ds.submit();
  };

  return (
    <PageHeaderWrapper
      title="编辑器表单：带有编辑器的表单，常见维护公告、文章等对内容排版要求比较高的场景中"
      header={
        <div>
          <Button onClick={handleSave} color={ButtonColor.primary}>
            保存
          </Button>
        </div>
      }
    >
      <Form dataSet={ds} columns={3}>
        <TextField
          name="title"
          style={{
            width: '238px',
          }}
        />
        <Select
          style={{
            width: '238px',
          }}
          name="language"
        >
          <Option value="zh-cn">简体中文</Option>
          <Option value="en-us">英语(美国)</Option>
          <Option value="ja-jp">日本語</Option>
        </Select>
        <TextArea
          style={{
            width: '715px',
          }}
          name="description"
          newLine
          colSpan={2}
        />
        <Output
          newLine
          name="cover"
          renderer={() => (
            <ImageCrop grid aspect={12 / 13} serverCrop aspectControl>
              <Upload
                action="/_api/rich-text-form/upload"
                listType="picture-card"
                fileList={fileList}
                requestFileKeys="imageCropArea"
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </ImageCrop>
          )}
        />
        <RichText
          style={{
            width: '100%',
            height: 300,
          }}
          colSpan={3}
          newLine
          dataSet={ds}
          name="content"
        />
        <Output
          name="attachment"
          renderer={() => (
            <ProUpload
              headers={{
                'Access-Control-Allow-Origin': '*',
              }}
              action="/_api/rich-text-form/upload"
              multiple
              uploadImmediately
              onUploadSuccess={handleAttachmentUpload}
            />
          )}
        />
      </Form>
    </PageHeaderWrapper>
  );
};

export default RichTextForm;
