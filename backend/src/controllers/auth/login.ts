import type { Request, Response } from 'express';
import { dbq } from 'src/db/db';
import { post_login_query } from 'src/db/sql/login.queries';
import type { Users } from 'src/models/Users';

export async function login(
  { session, body: { username, password } }: Request,
  res: Response
) {
  try {
    if (!username || !password) {
      res.status(404).send({ msg: 'Please enter a username and password' });
      return;
    }

    const data = await dbq<Users>({
      query_string: post_login_query,
      query_params: [username, password],
      query_rows: 'one',
    });

    if (!data) {
      res.status(404).send({ msg: 'Wrong username or password' });
      return;
    }

    if (session.username == data.username) {
      res.status(200).send({
        msg: `${data.username} is already logged in...`,
      });
    }

    session.username = data.username;

    res.status(200).send({
      msg: `Hello, ${data.username}! You have logged in...`,
      data,
    });
  } catch (err) {
    err;
  }
}
