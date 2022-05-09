/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleReadPublicShare } from './handle-read-public-share';

jest.mock('express-validator');

describe('handleReadPublicShare()', () => {
  it('should send a 200 status code if share was found', async () => {
    const req = { params: { accessKey: '1122eeff' } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.share, 'findFirst').mockResolvedValue({} as any);

    await handleReadPublicShare(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('should send a 404 status code if share was not found', async () => {
    const req = { params: { accessKey: '1122eeff' } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.share, 'findFirst').mockResolvedValue(null);

    await handleReadPublicShare(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
  it('should send a 400 status code if validation errors occurred', async () => {
    const req = { params: { accessKey: '1122eeff' } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => false } as any);

    await handleReadPublicShare(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
