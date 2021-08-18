import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const config: RoutersConfig = [
  {
    path: '/test-module/test-page2',
    component: () => import('./TestPage2Page.vue'),
    authorized: true,
    type: 'vue',
    title: 'Hello-TestPage2',
  },
];

export default config;
