require('dotenv').config();
import 'module-alias/register';
import express, { json } from 'express';
import { custom_cors } from 'src/middleware/cors';
import { ep_log } from 'src/middleware/loggers';
import { cfg } from 'src/env';
import { router } from 'src/routes/router';
import { TypeOrmInit } from 'src/db/typeorm';
import { express_session } from 'src/middleware/redis.session';

const app = express();

app.use(custom_cors());

app.use(json());

app.use(ep_log);

(async function main() {
  try {
    app.use(express_session);
    app.use(...(await router()));

    await TypeOrmInit();

    app.listen(cfg.port, () => console.log(`@ http://localhost:${cfg.port}`));
  } catch (err) {
    console.log(err);
  }
})();
