import { body, ValidationChain } from 'express-validator';

export function validateCreateList(): ValidationChain[] {
  return [body('name').isString(), body('description').optional().isString()];
}
