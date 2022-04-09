import { param, ValidationChain } from 'express-validator';

export function validateReadShare(): ValidationChain[] {
  return [param('id').isMongoId()];
}
