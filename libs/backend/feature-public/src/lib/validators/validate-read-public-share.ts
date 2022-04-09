import { param, ValidationChain } from 'express-validator';

export function validateReadPublicShare(): ValidationChain[] {
  return [param('accessKey').isHexadecimal()];
}
