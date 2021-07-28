// 全局配置
// import { setLayout } from 'hzero-front/lib/customize/layout';
// import { getConfig } from 'choerodon-ui';
// import { AxiosStatic } from 'axios';
// import { extendsEnvConfig } from 'utils/iocUtils';

export const dvaAppInit = () => {
  // extendsEnvConfig({
  //     TODO_API: '/htodo',
  // });

  // const axios: AxiosStatic = getConfig('axios');
  // axios.interceptors.request.use(
  //   (config) => {
  //     return {
  //       ...config,
  //       headers: {
  //         ...config?.headers,
  //         get: {
  //           test: 'abcd',
  //           ...config?.headers?.get,
  //         },
  //       },
  //     };
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // 全局配置
  //@ts-ignore
  // setLayout('company-horizontal', async () => import('demo-common/src/layouts/CustomLayout.tsx'));
  require('./global.module.less');
};
