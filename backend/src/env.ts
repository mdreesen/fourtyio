const { env } = process;

/** checks for environment state prod or dev */
const prod: boolean = env.NODE_ENV === 'prod' ? true : false;

/** application settings */
export const cfg = {
  rootdir: __dirname,
  server: { port: env.PORT ? +env.PORT : 7890 },
  redis: {
    host: prod ? env.REDIS_HOST! : 'localhost',
    port: prod ? +env.REDIS_PORT! : 6379,
    password: prod ? env.REDIS_PW! : undefined,
    get url(): string {
      return `redis://${this.host}:${this.port}`;
    },
  },
  session: {
    name: env.SESSION_NAME!,
    age: +env.SESSION_AGE!,
    secret: env.SESSION_SECRET!,
  },
};
