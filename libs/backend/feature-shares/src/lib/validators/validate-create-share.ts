import { body, ValidationChain } from 'express-validator';

export function validateCreateShare(): ValidationChain[] {
  return [body('listId').isMongoId()];
}
