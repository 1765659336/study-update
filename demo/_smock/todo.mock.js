const mockjs = require('mockjs');

let data = [
    {
      name: '胡明',
      age: 46,
      address: '西藏自治区 拉萨市',
    },
    {
      name: '万勇',
      age: 94,
      address: '黑龙江省 绥化市',
    },
    {
      name: '姚涛',
      age: 77,
      address: '广西壮族自治区 北海市',
    },
    {
      name: '白洋',
      age: 19,
      address: '四川省 宜宾市',
    },
    {
      name: '杨强',
      age: 12,
      address: '江西省 新余市',
    },
    {
      name: '汪娟',
      age: 11,
      address: '西藏自治区 那曲地区',
    },
    {
      name: '武娟',
      age: 52,
      address: '台湾 金门县',
    },
    {
      name: '贺霞',
      age: 60,
      address: '江西省 鹰潭市',
    },
]


module.exports = {
  name: 'htodo',
  desc: 'todo service',
  apis: [
    {
      name: 'delete',
      desc: '',
      method: 'POST',
      url: '/api/v1/delete',
      handle: (req, res)=>{
        // console.log(req.body);
        let newData = [];
        let lock = true;
        data.forEach( item1 => {
          req.body.forEach( item2 => {
            if(item1.name === item2.name){
              lock = false;
            }
          })
          if(lock){
            newData = [...newData,item1]
          }else {
            lock = true;
          }
        })
        // console.log(newData);
        data = newData;
        res.json(data);
      }
    },
    {
      name: 'submit',
      desc: '',
      method: 'POST',
      url: '/api/v1/submit',
      handle: (req, res)=>{
        req.body.forEach( item => {
          if(item._status === 'create'){
            data = [...data,item]
          }else if(item._status === 'update'){
            data.forEach( (val,index) => {
              if(val.name === item.name){
                data[index] = item; 
              }
            })
          }
        })
        // console.log(data);
        res.json(data);
      }
    },
    {
      name: 'query',
      desc: '',
      method: 'POST',
      url: '/api/v1/query',
      handle: (req, res)=>{
      //   const data = mockjs.mock({
      //     'users|1-30': [
      //       {
      //         id: '@id',
      //         name: '@cname',
      //         age: '@integer(1,100)',
      //         address:'@city(true)',
      //         'tags|1-3': ['可爱','迷人','高颜值']
      //       },
      //     ],
      //  });
      res.json(data)
      }
    },
    {
      name: 'get todo',
      desc: '获取 待办事项列表',
      method: 'GET',
      url: '/htodo/v1/0/tasks',
      // req和res为express Request 对象和 Response对象
      handle: (req, res) => {
        const size = req.params.size||10;
        const page = req.params.page||0;
        const d = mockjs.mock({
          'content|1-30': [
              {
                  objectVersionNumber: 2,
                  id: '@id',
                  name: '@name',
                  path: '@url',
                  title: '@title',
                  _token: "wmv950RaJ9bYO1ipM8sPg03+MsaTRH7Hw0QQLACki7Z8a6yEE5PgLsfHTgcPqv4YmAPGtD09/n9T6F05Qv8NhA==",
                  employeeId: '@id',
                  'state|1': ['CODE_1',"CODE_2",'CODE_3'],
                  'taskNumber|+1': 1,
                  taskDescription: "@csentence",
                  percent: "0",
                  tenantId: 111,
                  employeeNumber: "@word",
                  employeeName: "@cname"
              },
            ],
            size,
            number: page,
            numberOfElements: (thisObj) => (thisObj.context.root.content.length),
            totalElements: 34,
        });
        res.json(d);
      },
    },
  ]
};
