import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const routerConfig: RoutersConfig = [
  {
    path: '/source_zip/3/f3121c1c631c443c9ef665f78061ce21/rich-text-form2',
    component: () =>
      import('../pages/source_zip/3/f3121c1c631c443c9ef665f78061ce21/rich-text-form2'),
    models: [],
    title: 'source_zip/3/f3121c1c631c443c9ef665f78061ce21/rich-text-form',
    authorized: true,
  },
  {
    path: '/demo-table',
    component: () => import('../pages/demo-table'),
    models: [],
    title: 'demoTable',
    authorized: true,
  }, // Insert New Router
  {
    path: '/hzero-boot/test1',
    component: () => import('../pages/test1/Test1Page'),
    authorized: true,
    title: '区块测试页',
  },
];
export default routerConfig;
