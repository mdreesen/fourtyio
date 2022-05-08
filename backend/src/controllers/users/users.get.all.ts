import type { Request, Response } from 'express';
import type { Users } from 'src/models/Users';
import { dbq } from 'src/db/db';
import { get_all_users_query } from 'src/db/sql/users.queries';

export async function get_all_users(_req: Request, res: Response) {
  try {
    const data = await dbq<Users[]>({
      query_string: get_all_users_query,
      query_params: [],
      query_rows: 'all',
    });

    res.status(200).send({ status: 'good', data });
  } catch (err) {
    err;
  }
}
