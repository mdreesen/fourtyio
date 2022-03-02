import connectRedis from 'connect-redis';
import { createClient } from 'redis';
import { redis } from '../env';
import session from 'express-session';

const RedisStore = connectRedis(session);

export const express_session = session({
  store: new RedisStore({
    client: createClient({
      host: redis.host,
      port: redis.port,
      password: redis.password,
    }),
  }),
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: redis.session.age,
  },
  name: redis.session.name,
  secret: redis.session.secret,
  saveUninitialized: false,
  resave: false,
});
