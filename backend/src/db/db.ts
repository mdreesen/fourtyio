import { Pool } from 'pg';

export const db = new Pool({ idleTimeoutMillis: 100 });

type QueryResult<T> = void | T;

export async function dbq<T>(
  query: string,
  array: string[],
  rows: null | true | false | 1 | 0 = null
): Promise<QueryResult<T>> {
  if (!Array.isArray(array)) array = [];
  if (rows === null) {
    return (await db
      .query(query, array)
      .catch((err: Error) => console.log(err))) as QueryResult<T>;
  }
  if (rows === false || rows === 0)
    return await db
      .query(query, array)
      .then((res) => res.rows[0])
      .catch((err) => console.log(err));
  if (rows === true || rows === 1) {
    return (await db
      .query(query, array)
      .then((res) => res.rows)
      .catch((err) => console.log(err))) as QueryResult<T>;
  }
}
