`hzero-fornt`

---

## Online Demo

[在线 Demo](http://hzero-front.open-front.hand-china.com/workplace)

## 使用

### 安装
```bash
lerna bootstrap 
yarn run transpile
```
> 注意:  
> 1. 执行完 lerna bootstrap 会在 node_modules 下面生成一个 hzero-fornt-common 的软链接，链接指向 packages/hzero-fornt-common  
> 2. 所以在其他子模块里面可以直接引用 hzero-fornt-common 模块的文件， 可以把 hzero-fornt-common 看成一个公共依赖  
> 3. 执行完 lerna run transpile 之后会生成 packages/hzero-fornt-common/lib 文件夹, 模块之间的相互依赖都是通过 lib 目录暴露出去的，如果 lib 文件的代码更新了 ,改动的代码才会生效  
> 4. 注意 dll 不存在时， hzero-cli 会自动帮你执行 `yarn run build:dll` ,但是如果你的 npm 依赖更新了 想刷新 dll ，需要手动运行一次 `yarn run build:dll`  
> 5. 修改了 PUBLIC_URL 环境变量之后, 由于 `src/config/theme.js` 中的数据会直接编译到 dll，影响 dll 内容, 所以如果想更新 dll 中的 PUBLIC_URL, 需要重新运行 `yarn build:dll`
> 6. 如果你想开发调试时能调试 dva、redux, dll 文件 能显示 sourcemap , 需要手动执行一次 `yarn run build:dll-dev`  

### 多环境环境变量配置文件

环境变量配置文件: 

- `src/config/.env.yml`: 默认环境变量配置文件
- `src/config/.env.${NODE_PROFILE}.yml`: 根据环境变量 NODE_PROFILE 的值切换配置文件, 比如当 NODE_PROFILE=development 时, .env.development.yml 会生效, 该文件的优先级比 .env.yml 高。
- `src/config/.env.${NODE_PROFILE}.local.yml`: 本地环境变量, 优先级最高的配置文件, 该配置文件不会进入 git 的版本管理。
- `packages/xxx/src/config/.env.yml`: 子模块独立默认环境变量配置文件，优先级比父模块高，但是只会影响当前子模块

环境变量说明:


- `API_HOST`: 后端接口地址。
- `BASE_PATH`: 浏览器地址栏显示的一级BASE_PATH
- `PUBLIC_URL`: 静态资源加载前缀。
- `PACKAGE_PUBLIC_URL`: 加载独立部署的子模块路径。
- `SKIP_TS_CHECK_IN_START`: [true|false] yarn start 时, 是否跳过 ts 语法检查。
- `SKIP_ESLINT_CHECK_IN_START`: [true|false] yarn start 时, 是否跳过 eslint 语法检查。
- `SKIP_NO_CHANGE_MODULE`: 是否跳过未变更的子模块编译
- `DISABLE_BUILD_DLL`: [true|false] 是否不使用 dll
- `NO_PROXY`: [true|false] 是否不开启 mock 接口
- `GENERATE_SOURCEMAP`: [true|false] 是否生成 sourcemap
- `CUSTOMIZE_ICON_NAME`: [自定义字体](http://hzerodoc.saas.hand-china.com/zh/docs/development-guide/front-develop-guid/component/icons/)
- `TRACE_LOG_ENABLE`: [true|false] 启用 TraceLog 日志追溯分析
- `IM_ENABLE`: [true|false] 是否启用 IM
- `IM_WEBSOCKET_HOST`: im 服务 websocket 地址
- `WEBSOCKET_HOST`: 消息通知服务 websocket 地址
- `BUILD_PUBLIC_MS`: [true|false] 是否编译外部模块
- `BUILD_DIST_PATH`: [string] 指定 dist 输出目录
- `BUILD_SKIP_PARENT`: [true|false] 强制跳过父工程编译
- `FORCE_PROD_DLL`: [true|false] 强制使用 Prod Dll

> `BASE_PATH 和` `PUBLIC_URL` 建议设置成一样的，如果是开发环境（`yarn start`）,必须设置为 `/`。

### hzero-boot 运行环境配置文件

- `src/app.ts`: hzero 全局配置文件示例(父项目目录)：

  ```typescript
  import { getConfig, configure } from 'choerodon-ui';
  import { AxiosStatic } from 'axios';
  import { getCurrentUser } from 'utils/utils';


  // 微前端子模块拦截器
  export const microLoadInterceptor = async (microPackageInfoList: microPackageInfo[]) => {
    const userInfo = getCurrentUser();
    const newMicroPackageInfoList = microPackageInfoList.filter((packageInfo) => {
      if(packageInfo.name === 'hzero-front-admin' && userInfo.loginName === 'admin') {
        return false;
      }
      return true;
    });
    return newMicroPackageInfoList;
  };

  // 全局错误处理配置
  export const dealGlobalError = (error) => {
    // window.location.href = `${commonConfig.BASE_PATH || '/'}error.html?errorMessage=${encodeURIComponent(
    //   error && error.message
    // )}&errorLocation=${encodeURIComponent(window.location.href)}`;
    console.error(error);
  };

  // 在这个文件内可以重新 c7nUi 配置
  export const initC7nUiConfig = () => {
      return [
          require('hzero-front/lib/utils/c7nUiConfig'),
          configure({
              pageSize: 20,
          });
      ];
  };
  // 在 dva 对象实例化之后调用，可以在这里添加 dva 插件
  export const dvaAppInit = (dvaApp) => {
    const axios: AxiosStatic = getConfig('axios');
    axios.interceptors.response.use(
        config => config,
        (error) => {
            return Promise.reject(error);
        }
    )
  };
  // 可以设置 dvaApp.router 的根路由
  // dvaRootRouter: () => require('hzero-front/lib/router').default,
  // 可以替换 global 配置
  // globalModal: () => require('./models/global').default,

  ```

### `.hzerorc.js` 模块配置文件

[`.hzerorc.js` 模块配置文件说明](https://code.choerodon.com.cn/hft/hzero-cli#hzero-%E5%AD%90%E6%A8%A1%E5%9D%97%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)


### 开发

开发两种方案

1. 单模块启动: 本地编译调试速度快
2. 全模块启动: 适合做集成测试

#### 1. 单模块启动

```bash
cd packages/hzero-fornt-demo1
yarn run start
```

#### 2. 全模块启动

```bash
yarn run build:ms # 编译子模块
yarn run start
```
> 如果在父项目运行的话 ，第一次 `yarn start`,  是不会有页面的
> 需要运行一遍 `yarn run build:ms`， 再运行 `yarn start` 可以有页面
> 子模块代码变更之后需要重新编译到父模块（运行 `yarn run build:ms [子模块名]`）， 父模块启动时才会看到最新的子模块内容

### 打包

```bash
#!/usr/bin/env bash

# jenkins 脚本文件

set -e # 报错不继续执行

export BASE_PATH=BUILD_BASE_PATH
export API_HOST=BUILD_API_HOST
export CLIENT_ID=BUILD_CLIENT_ID
export WEBSOCKET_HOST=BUILD_WEBSOCKET_HOST
export PLATFORM_VERSION=BUILD_PLATFORM_VERSION
export BPM_HOST=BUILD_BPM_HOST
export IM_ENABLE=BUILD_IM_ENABLE

# $UPDATE_MICRO_MODULES UPDATE_MICRO_MODULES 变量如果存在值的话就 增量更新微前端子模块。

if  [[ $UPDATE_MICRO_MODULES =~ "ALL" ]] || [[ ! -n "$UPDATE_MICRO_MODULES" ]] ;then
    rm -rf yarn.lock
    yarn install
    yarn build:production
else
    echo 增量编译子模块 $UPDATE_MICRO_MODULES
    yarn run build:ms $UPDATE_MICRO_MODULES
fi

rm -rf ./html
cp -r ./dist ./html

export BUILD_BASE_PATH=/
export BUILD_PUBLIC_URL=/
export BUILD_API_HOST=http://hzero-backend.open-front.hand-china.com
export BUILD_CLIENT_ID=localhost
export BUILD_WFP_EDITOR=""
export BUILD_WEBSOCKET_HOST=ws://ws.hzero-backend.open-front.hand-china.com
export BUILD_PLATFORM_VERSION=SAAS
export BUILD_BPM_HOST=http://bpm.hzero-backend.open-front.hand-china.com
export BUILD_IM_ENABLE=false
export BUILD_IM_WEBSOCKET_HOST=ws://im.ws.hzero-backend.open-front.hand-china.com

find ./html -name '*.js' | xargs sed -i "s BUILD_BASE_PATH $BUILD_BASE_PATH g"
find ./html -name '*.css' | xargs sed -i "s /BUILD_PUBLIC_URL/ $BUILD_PUBLIC_URL g"
find ./html -name '*.js' | xargs sed -i "s /BUILD_PUBLIC_URL/ $BUILD_PUBLIC_URL g"
find ./html -name '*.html' | xargs sed -i "s /BUILD_PUBLIC_URL/ $BUILD_PUBLIC_URL g"
find ./html -name '*.js' | xargs sed -i "s BUILD_API_HOST $BUILD_API_HOST g"
find ./html -name '*.js' | xargs sed -i "s BUILD_CLIENT_ID $BUILD_CLIENT_ID g"
find ./html -name '*.js' | xargs sed -i "s BUILD_BPM_HOST $BUILD_BPM_HOST g"
find ./html -name '*.js' | xargs sed -i "s BUILD_WFP_EDITOR $BUILD_WFP_EDITOR g"
find ./html -name '*.js' | xargs sed -i "s BUILD_WEBSOCKET_HOST $BUILD_WEBSOCKET_HOST g"
find ./html -name '*.js' | xargs sed -i "s BUILD_PLATFORM_VERSION $BUILD_PLATFORM_VERSION g"

# 这里实现你的部署逻辑 deploy ./html

# export CICD_EXECUTION_SEQUENCE=${BUILD_NUMBER:-1}
# docker build . -t  hzero-front-sample:${CICD_EXECUTION_SEQUENCE}
# docker rm -f hzero-front-sample 2>/dev/null
# docker run --rm -it --name hzero-front-sample hzero-front-sample:${CICD_EXECUTION_SEQUENCE}

npx serve html -s # 或者 npx http-server html -P 测试本地打包的文件

```

### 发布

运行完打包之后 html 就是需要发布的文件，放到 nginx 的 html 目录下，然后配置 nginx 即可运行

#### NGINX 配置

```
   user  nginx;
    worker_processes  1;

    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;


    events {
        worker_connections  1024;
    }

    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;

        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

        access_log  /var/log/nginx/access.log  main;

        sendfile        on;

        keepalive_timeout  65;

        gzip on;
        gzip_buffers 32 4k;
        gzip_comp_level 6;
        gzip_min_length 200;
        gzip_types text/css text/xml application/javascript;

        server {
            listen       80;
            server_name  localhost;

            location \/[a-z.0-9]\.(js|css|gif|png|jpg)$ {
              expires    7d; # 开启 eTag 缓存
            }

            location / {
                root   /usr/share/nginx/html;
                index  index.html index.htm;
                try_files $uri /index.html; # 启动 Bowser 路由 配置
            }

            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   /usr/share/nginx/html;
            }

        }
    }
```


### CSS Modules

hzero-cli 会自动识别 CSS Modules 的使用，你把他当做 CSS Modules 用时才是 CSS Modules。

比如：

```js
// CSS Modules
import styles from './foo.css';

// 非 CSS Modules
import './foo.css';
```

### 添加自定义 babel 插件

- `.babelrc.js`

  ```js
    const babelConfigFactory = require('hzero-boot/lib/babelConfigFactory');
    const babelConfig = babelConfigFactory();
    
    babelConfig.plugins.push([
      "@babel/plugin-proposal-optional-chaining"
    ]);
    
    module.exports = babelConfig;

  ```


### dev 代理配置

- [webpack-dev-server proxy config](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md)

Learn more in the [official documentation](http://hzerodoc.saas.hand-china.com/zh/).
