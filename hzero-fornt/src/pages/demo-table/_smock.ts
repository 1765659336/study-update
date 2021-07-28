const { Random } = require('mockjs')

const initialList = new Array(100).fill(1).map(() => ({
  id: Random.natural(),
  name: Random.cname(),
  desc: Random.cparagraph(),
  charger: Random.cname(),
  date: Random.date(),
}));

module.exports = {
  name: 'coral standard table apis',
  apis: [
    {
      name: 'Get List',
      method: 'GET',
      url: '/_api/standard-table/list',
      handle(req) {
        const { query = {} } = req;
        const filterFun = (obj) =>
          Object.entries(query).every(([key, value]) =>
            obj[key] ? obj[key].toString().match(value) : true
          );
        const [page, size] = [Number(query.page), Number(query.size)];
        return {
          status: 200,
          data: {
            content: initialList.filter(filterFun).slice(page * size, (page + 1) * size),
            success: true,
            totalElements: 100,
          },
        };
      },
    },
    {
      name: 'Delete List',
      method: 'DELETE',
      url: '/_api/standard-table/delete',
      handle(req) {
        return {
          status: 200,
          data: req.body,
        };
      },
    },
    {
      name: 'Submit List',
      method: 'POST',
      url: '/_api/standard-table/submit',
      handle(req, res) {
        res.send(
          req.body.map((v) => ({
            ...v,
            id: Random.natural(),
            createTime: Random.datetime(),
          }))
        );
      },
    },
    {
      name: 'Operation List',
      url: '/_api/standard-table/operation-record/query',
      method: 'GET',
      handle(req) {
        const result: any[] = [];
        const params = req.query as any;
        const { size = 10, page, serialNumber, operatorType } = params;
        for (let i = 0; i < size; i++) {
          const len: number = result.length;
          result.push({
            operator: `张三${len}-${page * size}-${serialNumber}`,
            operatorType:
              operatorType !== undefined ? operatorType : `${Math.random() > 0.5 ? 'add' : 'edit'}`,
            operatorTime: '2020-11-09 08:33:11',
          });
        }

        return {
          status: 200,
          data: {
            content: result,
            success: true,
            totalElements: size * 10,
          },
        };
      },
    },
    {
      name: 'Operation List Delete',
      url: '/_api/standard-table/operation-record/delete',
      method: 'DELETE',
      handle(req) {
        return {
          status: 200,
          data: req.body,
        };
      },
    },
    {
      name: 'Operation Type',
      url: '/_api/standard-table/code/operatorType',
      method: 'GET',
      handle() {
        return {
          status: 200,
          data: {
            content: [
              {
                objectVersionNumber: 1,
                codeId: 10001,
                codeValueId: 10027,
                description: null,
                meaning: '新建',
                value: 'add',
                orderSeq: 10,
                tag: null,
                enabledFlag: 'Y',
                parentCodeValueId: null,
                parentCodeValue: null,
                parentCodeValueMeaning: null,
              },
              {
                objectVersionNumber: 1,
                codeId: 10001,
                codeValueId: 10028,
                description: null,
                meaning: '编辑',
                value: 'edit',
                orderSeq: 20,
                tag: null,
                enabledFlag: 'Y',
                parentCodeValueId: null,
                parentCodeValue: null,
                parentCodeValueMeaning: null,
              },
              {
                objectVersionNumber: 1,
                codeId: 10001,
                codeValueId: 10028,
                description: null,
                meaning: '删除',
                value: 'delete',
                orderSeq: 20,
                tag: null,
                enabledFlag: 'Y',
                parentCodeValueId: null,
                parentCodeValue: null,
                parentCodeValueMeaning: null,
              },
            ],
          },
        };
      },
    },
  ],
};
