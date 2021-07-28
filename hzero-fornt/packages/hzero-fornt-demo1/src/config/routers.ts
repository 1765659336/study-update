import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const routerConfig: RoutersConfig = [
  // Insert New Router
  {
    path: '/demo1/hello',
    component: () => import('../pages/hello/HelloDemo1Page'),
    authorized: true,
    title: 'Hello HzeroFornt Demo1',
  },
  {
    path: '/demo1/demo-page',
    component: () => import('../pages/hello/DemoPage'),
    authorized: true,
    title: 'Sample Demo1',
  },
  {
    path: '/demo1/zhiji',
    component: () => import('../pages/hello/zhiji'),
    authorized: true,
    title: 'zhijiLov',
  }
];

export default routerConfig ;
