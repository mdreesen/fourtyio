import type { Request, Response } from 'express';
import { dbq } from 'src/db/db';
import { post_login_query } from 'src/db/sql/login.queries';
import type { PGQueryResult } from 'src/db/db';
import type { Users } from 'src/models/Users';

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;

  try {
    let data: PGQueryResult<Users> = {} as Users;
    if (username && password) {
      data = await dbq<Users>(post_login_query, [username, password], 0);
    }

    if (!data) {
      res.status(404).send({ msg: 'wrong username or password' });
      return;
    }

    req.session.username = data.username;

    res.status(200).send({
      msg: `Hello, ${data.username}! You have logged in...`,
      data,
    });
  } catch (err) {
    err;
  }
}
