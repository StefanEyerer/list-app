import { param, ValidationChain } from 'express-validator';

export function validateReadList(): ValidationChain[] {
  return [param('id').isMongoId()];
}
