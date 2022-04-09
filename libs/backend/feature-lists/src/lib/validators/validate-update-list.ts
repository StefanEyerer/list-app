import { body, param, ValidationChain } from 'express-validator';

export function validateUpdateList(): ValidationChain[] {
  return [
    param('id').isMongoId(),
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('items').optional().isArray(),
    body('items.*').optional().isObject(),
  ];
}
