const { PORT } = process.env;

/** general project cfg options from .env file */
export const cfg = { port: PORT ? +PORT : 7890 };

/** gets path to prj root */
export const rootdir = __dirname;
