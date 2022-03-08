import type { Request, Response } from 'express';
import { dbq } from 'src/db/db';
import { post_login_query } from 'src/db/sql/login.queries';
import type { Users } from 'src/models/Users';

export async function login(req: Request, res: Response) {
  const { username, password } = req.body;
  const { session } = req;

  try {
    if (!username || !password) {
      res.status(404).send({ msg: 'Please enter a username and password' });
      return;
    }

    const data = await dbq<Users>(post_login_query, [username, password], 0);

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
