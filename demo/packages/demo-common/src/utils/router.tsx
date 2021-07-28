import { getConvertRouter } from 'hzero-boot/lib/utils/getConvertRouter';
import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';
import routers from '../config/routers';

const convertRouter = app =>
  getConvertRouter({
    hzeroRoutes: routers as RoutersConfig,
    options: { app },
  });

export function getRouterData(app) {
  return convertRouter(app)();
}
