import { createClient } from 'redis';
import { redis } from 'src/env';

export const redisClient = createClient({
  legacyMode: true,
  url: redis.url,
});
