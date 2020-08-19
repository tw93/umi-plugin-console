// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';

export default function(api: IApi) {
  if (!api.userConfig.console) return;
  api.describe({
    key: 'console',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
  });
  const options = api.userConfig.console;
  Object.keys(options).forEach(name => {
    api[name](memo => {
      api.logger.log(options[name]);
      return memo;
    });
  });
}
