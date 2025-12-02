import { getConfig, log } from '@codesmoker/shared';
import { capitalize, logWithLevel } from '@codesmoker/utils';

const config = getConfig({ appName: 'Nx API Server' });

log('info', `Starting ${config.appName} v${config.version}`);
log('info', `API URL: ${config.apiUrl}`);

logWithLevel('debug', capitalize('application initialized'));

console.log('\n🚀 Nx Monorepo API is ready!');
