module.exports = {
  // 修改配置信息，需要重新启动脚手架，脚手架没有动态更新配置信息的功能
  // 方式1
  /*  devServer: {
    // 请求的端口号，
    //缺点：1、只能配置一个代理 2、本地8080有同名路径文件，将会请求本地的文件，而不会发到后端服务器
   proxy: 'http://localhost:5000'
 } */
  // 方式2
  devServer: {
    proxy: {
      // 添加名称发送的时候加上名称就是去请求远程服务器的数据，而不会去找本地脚手架public中的文件
      '/atguigu':{
        target: 'http://localhost:5000',
        // 去掉添加的名称再发给远程服务器，不然远程服务器收到的路径会带上我们加的atguigu
        pathRewrite:{'^/atguigu':''},
        // 是否支持websocket
        // ws:true,
        // 开启后后端收到的请求接口号为后端接口设置的端口号，如果不开启那么就是代理服务器的端口号
        // changeOrigin:true
      },
      '/demo':{
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
      }
    },
  }
};
