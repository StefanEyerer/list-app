/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleCreateShare } from './handle-create-share';

jest.mock('express-validator');

describe('handleCreateShare()', () => {
  it('should send a 201 status code if share was created', async () => {
    const req = { body: { listId: 'someListId' } } as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.list, 'findFirst').mockResolvedValue({} as any);
    jest.spyOn(prisma.share, 'create').mockResolvedValue({} as any);

    await handleCreateShare(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });
  it('should send a 404 status code if list was not found', async () => {
    const req = { body: { listId: 'someListId' } } as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.list, 'findFirst').mockResolvedValue(null);

    await handleCreateShare(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
  it('should send a 400 status code if validation errors occurred', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => false } as any);

    await handleCreateShare(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
