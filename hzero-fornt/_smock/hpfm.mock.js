const mockjs = require('mockjs');
// const { Random } = mockjs;

// Random可以随意使用，用法参考Mock.js
module.exports = {
  name: 'hpfm',
  desc: 'hpfm service',
  apis: [
    {
      name: '菜单',
      desc: '获取菜单',
      method: 'GET',
      url: '/hpfm/v1/menus',
      handle: (req, res) => {
        const d = mockjs.mock({
            'list|1-30': [
                {
                    id: '@id',
                    name: '@name',
                    path: '@url',
                    title: '@title',
                },
            ],
        });
        res.json(d);
      },
    },
    {
      name: '多语言',
      desc: '获取多语言配置',
      method: 'GET',
      url: '/hpfm/v1/0/prompt/zh_CN',
      handle: (req, res) => {
        res.json({
          'hzero.common.title.workspace': '工作台',
          'promptKey': req.query.promptKey,
          'lang': req.params.lang,
        });
      },
    },
    {
      name: 'ui-table',
      desc: 'ui-table',
      method: 'GET',
      url: '/hpfm/v1/0/ui-table',
      handle: (req, res) => {
        res.json([]);
      },
    },
    {
      name: 'layout',
      desc: 'layout',
      method: 'GET',
      url: '/hpfm/v1/dashboard/layout',
      handle: (req, res) => {
        res.json([]);
      },
    },
    {
      name: 'role-cards',
      desc: 'role-cards',
      method: 'GET',
      url: '/hpfm/v1/dashboard/layout/role-cards',
      handle: (req, res) => {
        res.json([]);
      },
    },

    {
      name: 'lovs-data',
      desc: '查询 lov 数据',
      method: 'GET',
      url: '/hpfm/v1/lovs/data',
      handle: (req, res) => {
        const {lovCode} = req.query || {};
        const retData = require('./_mock-data/lovData')[lovCode] || [];
        res.json(retData);
      },
    },

    {
      name: 'lovs-data2',
      desc: '查询 lov 数据2',
      method: 'GET',
      url: '/hpfm/v1/lovs/value',
      handle: require('./_utils/lov').getLovData,
    },

    {
      name: 'lovs-data3',
      desc: '查询 lov 数据3',
      method: 'GET',
      url: '/hpfm/v1/lovs/sql/data',
      handle: require('./_utils/lov').getLovData,
    },

    {
      name: 'lovs-view',
      desc: '查询 lov 视图',
      method: 'GET',
      url: '/hpfm/v1/lov-view/info',
      handle: (req, res) => {
        const {viewCode} = req.query || {};
        const retData = require('./_mock-data/lovView')[viewCode] || {};
        res.json(retData);
      },
    },
  ],
};
