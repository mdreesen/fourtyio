import type { Request, Response } from 'express';

export async function get_login(req: Request, res: Response) {
  try {
    const { session } = req;
    if (!session.username) {
      res.status(404).json({ msg: 'No user session found...' });
      return;
    }

    const logged_in =
      session && session.username
        ? `${req.session.username} is logged in`
        : 'no user logged in...';

    res.status(200).json({ msg: logged_in });
  } catch (error) {
    console.log(error);
  }
}
