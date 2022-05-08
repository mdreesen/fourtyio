import type { Request, Response } from 'express';
import type { Users } from 'src/models/Users';
import { dbq } from 'src/db/db';
import { get_one_user_query } from 'src/db/sql/users.queries';

export async function get_one_user({ params: { id } }: Request, res: Response) {
  try {
    const data = await dbq<Users>({
      query_string: get_one_user_query,
      query_params: [id],
      query_rows: 'one',
    });

    if (!data) {
      res.status(404).send({ msg: 'no user found' });
      return;
    }

    res.status(200).send({ data });
  } catch (err) {
    err;
  }
}
