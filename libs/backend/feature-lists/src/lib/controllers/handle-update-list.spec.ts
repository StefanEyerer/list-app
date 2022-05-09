/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleUpdateList } from './handle-update-list';

jest.mock('express-validator');

describe('handleUpdateList()', () => {
  it('should send a 200 status code if list was updated', async () => {
    const req = {
      params: { id: 1 },
      body: { name: 'new name', description: 'new description' },
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.list, 'updateMany').mockResolvedValue({} as any);
    jest.spyOn(prisma.list, 'findFirst').mockResolvedValue({} as any);

    await handleUpdateList(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('should send a 404 status code if list was not found', async () => {
    const req = {
      params: { id: 1 },
      body: { name: 'new name', description: 'new description' },
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.list, 'updateMany').mockResolvedValue({} as any);
    jest.spyOn(prisma.list, 'findFirst').mockResolvedValue(null);

    await handleUpdateList(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
  it('should send a 400 status code if validation errors occurred', async () => {
    const req = {
      params: { id: 1 },
      body: { name: {} },
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => false } as any);

    await handleUpdateList(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
