import { param, ValidationChain } from 'express-validator';

export function validateDeleteShare(): ValidationChain[] {
  return [param('id').isMongoId()];
}
