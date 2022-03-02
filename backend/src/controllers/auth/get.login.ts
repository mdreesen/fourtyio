import type { Request, Response } from 'express';

export async function get_login(req: Request, res: Response) {
  try {
    const { session } = req;
    const logged_in =
      session && session.username
        ? `${req.session.username} is logged in`
        : 'no user logged in...';

    res.status(200).json({
      msg: logged_in,
    });
  } catch (error) {
    console.log(error);
  }
}
