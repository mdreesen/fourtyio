import connectRedis, { Client } from 'connect-redis';
import { redis } from '../env';
import session from 'express-session';
import { redisClient } from 'src/db/redis';

const RedisStore = connectRedis(session);

export const express_session = session({
  store: new RedisStore({ client: (<unknown>redisClient) as Client }),
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
