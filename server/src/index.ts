import chalk from 'chalk';

import app from './app';
import { CONFIG } from './utils/config';

const startServer = async () => {
  app.listen(CONFIG.PORT, async () => {
    console.log(chalk.bgBlueBright(`Server running on the port: ${CONFIG.PORT}`));
    console.log(chalk.bgMagenta(`${CONFIG.ENVIRONMENT === 'development' ? 'mode development' : 'mode production'}`));
  });
};

startServer();
