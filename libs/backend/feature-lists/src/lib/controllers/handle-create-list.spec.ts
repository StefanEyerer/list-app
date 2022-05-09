/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@list-app/backend/shared/data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleCreateList } from './handle-create-list';

jest.mock('express-validator');

describe('handleCreateList()', () => {
  it('should send a 201 status code if list was created', async () => {
    const req = {
      body: { name: 'some name', description: 'some description' },
    } as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(prisma.list, 'create').mockResolvedValue({} as any);

    await handleCreateList(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });
  it('should send a 400 status code if validation errors occurred', async () => {
    const req = { body: {} } as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => false } as any);

    await handleCreateList(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
