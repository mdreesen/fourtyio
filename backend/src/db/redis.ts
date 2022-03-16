import type { Client } from 'connect-redis';
import { createClient } from 'redis';
import { redis } from 'src/env';

export const redisClient = createClient({
  legacyMode: true,
  url: redis.url,
});

export const client = (<unknown>redisClient) as Client;
