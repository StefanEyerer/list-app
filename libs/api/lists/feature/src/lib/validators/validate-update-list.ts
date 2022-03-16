import { body, param, ValidationChain } from 'express-validator';

export function validateUpdateList(): ValidationChain[] {
  return [
    param('id').isMongoId().bail(),
    body('name').optional().isString().bail(),
    body('description').optional().isString().bail(),
    body('items').optional().isArray().bail(),
    body('items.*').optional().isObject().bail(),
  ];
}
