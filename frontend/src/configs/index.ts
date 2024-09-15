import { development } from './development';
import { production } from './production';

const mode = process.env.NODE_ENV || 'development';

const configs = {
  development: development,
  production: production,
  test: development,
};

export default configs[mode];
