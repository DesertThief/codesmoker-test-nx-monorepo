export interface Config {
  apiUrl: string;
  appName: string;
  version: string;
}

export const DEFAULT_CONFIG: Config = {
  apiUrl: 'http://localhost:3000/api',
  appName: 'Nx Monorepo App',
  version: '1.0.0',
};

export function getConfig(overrides?: Partial<Config>): Config {
  return { ...DEFAULT_CONFIG, ...overrides };
}

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export function log(level: LogLevel, message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
}
