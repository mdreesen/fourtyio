import connectRedis from 'connect-redis';
import session from 'express-session';
import { client } from 'src/db/redis';
import { sess } from 'src/env';

const RedisStore = connectRedis(session);

export const express_session = session({
  store: new RedisStore({ client }),
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: sess.age,
  },
  name: sess.name,
  secret: sess.secret,
  saveUninitialized: false,
  resave: false,
});
