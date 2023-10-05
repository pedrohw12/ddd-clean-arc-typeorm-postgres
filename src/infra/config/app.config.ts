import { ConfigType, registerAs } from '@nestjs/config';

//TODO: Add schema do load default variable values more ELEGANTLY
export const config = registerAs('app', () => ({
  port: 3000,
  api: {
    prefix: '/api/bitflowin',
  },
  cors: {
    isEnabled: true,
    origin: 'http://localhost:3000',
  },
  longPolling: {
    timeoutInSeconds: 10,
  },
  logRequest: {
    isEnabled: true,
  },
  defaults: {
    language: 'en-US',
  },
}));

export default config;
export const AppConfig = config.KEY;
export type AppConfig = ConfigType<typeof config>;
