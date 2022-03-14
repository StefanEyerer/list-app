import { body, ValidationChain } from 'express-validator';

export function validateCreateList(): ValidationChain[] {
  return [
    body('name').isString().bail(),
    body('description').optional().isString().bail(),
  ];
}
