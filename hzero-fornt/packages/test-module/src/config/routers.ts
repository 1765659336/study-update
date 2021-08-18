import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';
import testPage2RouterConfig from '../pages/test-page2/routers';
import testPageRouterConfig from '../pages/test-page/routers';

const config: RoutersConfig = [
  // Insert New Router
  ...testPage2RouterConfig,
  ...testPageRouterConfig,
  {
    path: '/test-module/hello',
    component: () => import('../pages/hello/HelloTestModulePage'),
    authorized: true,
    title: 'Hello TestModule',
  },
];

export default config;
