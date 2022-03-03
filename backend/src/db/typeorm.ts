import { createConnection } from 'typeorm';

export async function TypeOrmInit() {
  try {
    // await createConnection({
    // type: pg.type,
    // host: pg.host,
    // database: pg.database,
    // username: pg.username,
    // password: pg.password,
    // port: pg.port,
    // logging: pg.logging,
    // entities: pg.entities,
    // synchronize: pg.synchronize,
    // });

    await createConnection();
    console.log('db connected');
  } catch (error) {
    console.log('connection failed', error);
  }
}
