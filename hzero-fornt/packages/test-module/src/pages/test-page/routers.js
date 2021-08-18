const config = [
  {
    path: '/test-module/test-page',
    component: () => import('./TestPagePage'),
    authorized: true,
    title: 'Hello-TestPage',
  },
];

export default config;
