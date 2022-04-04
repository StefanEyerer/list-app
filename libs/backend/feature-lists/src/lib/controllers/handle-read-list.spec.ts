/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from '@list-app/backend-shared-data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleReadList } from './handle-read-list';

jest.mock('express-validator');

describe('handleReadList()', () => {
  it('should send a 200 status code if list was found', async () => {
    const req = { params: { id: 1 } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(ListModel, 'findOne').mockResolvedValue({ get: () => 'found' });

    await handleReadList(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('should send a 404 status code if list was not found', async () => {
    const req = { params: { id: 1 } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(ListModel, 'findOne').mockResolvedValue(null);

    await handleReadList(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
  it('should send a 400 status code if validation errors occurred', async () => {
    const req = { params: { id: 1 } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => false } as any);

    await handleReadList(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
