import { body, ValidationChain } from 'express-validator';

export function validateDeleteLists(): ValidationChain[] {
  return [body('ids').isArray({ min: 1 }), body('ids.*').isMongoId()];
}
