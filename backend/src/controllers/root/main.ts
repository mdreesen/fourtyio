import type { Request, Response } from 'express';

export async function main(_req: Request, res: Response) {
  try {
    res.status(200).send({ status: 'good' });

    
  } catch (err) {
    err;
  }
}
