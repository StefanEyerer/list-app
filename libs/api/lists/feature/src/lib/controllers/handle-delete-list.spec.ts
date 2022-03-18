/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from '@list-app/api/shared/data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleDeleteList } from './handle-delete-list';

jest.mock('express-validator');

describe('handleDeleteList()', () => {
  it('should send a 204 status code if list was deleted', async () => {
    const req = { params: { id: 1 } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(ListModel, 'deleteOne').mockResolvedValue({} as any);

    await handleDeleteList(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
  it('should send a 404 status code if list was not found', async () => {
    const req = { params: { id: 1 } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(ListModel, 'deleteOne').mockResolvedValue(null as any);

    await handleDeleteList(req, res);

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

    await handleDeleteList(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});