import connectRedis from 'connect-redis';
import session from 'express-session';
import { client } from 'src/db/redis';
import { cfg } from 'src/env';

const RedisStore = connectRedis(session);

export const express_session = session({
  store: new RedisStore({ client }),
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: cfg.session.age,
  },
  name: cfg.session.name,
  secret: cfg.session.secret,
  saveUninitialized: false,
  resave: false,
});
