import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

function validateRequestSchema(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(405).json({ errors: errors.array() });
  }
  return next();
}

export { validateRequestSchema };