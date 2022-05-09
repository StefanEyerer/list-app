/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import { handleReadShares } from './handle-read-shares';

describe('handleReadLists()', () => {
  it('should send a 200 status code if shares were found', async () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest.spyOn(prisma.share, 'findMany').mockResolvedValue([{} as any]);

    await handleReadShares(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('should send a 200 status code if no shares were found', async () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest.spyOn(prisma.share, 'findMany').mockResolvedValue([]);

    await handleReadShares(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
});
