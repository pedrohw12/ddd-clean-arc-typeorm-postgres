// eslint-disable-next-line @typescript-eslint/no-var-requires
const TypeOrmConfig = require('./ormconfig');
import { AppConfig } from './app.config';

export const configs = [AppConfig, TypeOrmConfig];
