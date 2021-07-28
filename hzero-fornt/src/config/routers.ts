import { RoutersConfig } from "hzero-boot/lib/typings/IRouterConfig";
const routerConfig: RoutersConfig = [
  {
    path: "/demo-table",
    component: () => import("../pages/demo-table"),
    models: [],
    title: "demoTable",
    authorized: true,
  }, // Insert New Router
  {
    path: "/hzero-boot/test1",
    component: () => import("../pages/test1/Test1Page"),
    authorized: true,
    title: "区块测试页",
  },
];
export default routerConfig;
