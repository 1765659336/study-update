// const mockjs = require('mockjs');
// const { Random } = mockjs;

// Random可以随意使用，用法参考Mock.js
module.exports = {
  name: 'hmsg',
  desc: 'hmsg service',
  apis: [
    {
      name: 'Message Count',
      desc: '获取消息通知数量',
      method: 'GET',
      url: '/hmsg/v1/0/messages/user/count',
      handle: () => {
        return {
          status: 200,
          data: {"unreadMessageCount": 0},
        };
      },
    },
  ],
};
