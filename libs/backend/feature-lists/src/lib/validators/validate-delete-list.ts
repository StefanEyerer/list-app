import { param, ValidationChain } from 'express-validator';

export function validateDeleteList(): ValidationChain[] {
  return [param('id').isMongoId().bail()];
}
