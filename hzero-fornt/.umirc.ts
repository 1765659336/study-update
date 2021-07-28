import { IConfig } from 'umi'; // ref: https://umijs.org/config/

const config: IConfig = {
  presets: ['hzero-cli-preset-ui'],

  // // 配置虹珊瑚 文档: https://www.yuque.com/docs/share/20f34a96-9746-4438-89d3-b72214d8599d?# 《开发自己的区块资源》
  // corallium: {
  //   removeDefaultResources: false, // 是否移除默认区块库
  //   add_resources: [   // 配置附件自定义区块库
  //     {
  //       id: 'wuyun-blocks',
  //       name: 'Wuyun Community',
  //       resourceType: 'url',
  //       description: '来自 Wuyun 自定义区块',
  //       blockType: 'block',
  //       icon: 'https://img.alicdn.com/tfs/TB1HMEpmuH2gK0jSZFEXXcqMpXa-64-64.png',
  //       url: 'https://gitee.com/yunqiang_wu/hzero-blocks/raw/gh-pages/blocks.json',
  //     },
  //   ],
  // }
};

export default config;
