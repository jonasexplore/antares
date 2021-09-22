import 'dotenv/config';
import { Logger } from '@shared/utils/Logger';

import { app } from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  Logger.info(`🚀 Server has started at http://localhost:${PORT}`);
});
