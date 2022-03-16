const {
  NODE_ENV,
  PORT,
  REDIS_PORT,
  REDIS_HOST,
  REDIS_PW,
  SESSION_NAME,
  SESSION_AGE,
  SESSION_SECRET,
} = process.env;

const prod: boolean = NODE_ENV === 'prod' ? true : false;

/** general project cfg options from .env file */
export const cfg = { port: PORT ? +PORT : 7890 };

/** gets path to prj root */
export const rootdir = __dirname;

/** redis connection object */
export const redis = {
  host: prod ? REDIS_HOST! : 'localhost',
  port: prod ? +REDIS_PORT! : 6379,
  password: prod ? REDIS_PW! : undefined,
  get url(): string {
    return `redis://${this.host}:${this.port}`;
  },
};

export const sess = {
  name: SESSION_NAME!,
  age: +SESSION_AGE!,
  secret: SESSION_SECRET!,
};

export const redis_url = `redis://${redis.host}:${redis.port}`;
