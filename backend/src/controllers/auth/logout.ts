import type { Request, Response } from 'express';

export async function logout(req: Request, res: Response) {
  try {
    let { session } = req;
    const username = req.session.username;

    if (!session.username) {
      res.status(202).json({
        status: 'No user to logout',
      });
      return;
    }

    session.destroy(() => (session.cookie.expires = new Date()));

    res.status(200).json({
      msg: `${username} was logged out`,
    });
  } catch (error) {
    return console.log(error);
  }
}
