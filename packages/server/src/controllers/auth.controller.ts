import { Request, Response } from 'express';
export const login = (req: Request, res: Response) => {
  res.send({
    message: 'behasil login',
  });
};
