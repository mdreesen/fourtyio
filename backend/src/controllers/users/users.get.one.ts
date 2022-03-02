import type { Request, Response } from 'express';
import { dbq } from 'src/db/db';
import { get_one_users_query } from 'src/db/sql/users.queries';

export async function get_one_user(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const data = await dbq(get_one_users_query, [id], 0);

    if (!data) {
      res.status(404).send({ msg: 'no user found' });
      return;
    }

    res.status(200).send({ data });
  } catch (err) {
    err;
  }
}
