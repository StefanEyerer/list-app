/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from '@list-app/api/shared/data-access';
import { Request, Response } from 'express';
import * as validator from 'express-validator';
import { handleDeleteLists } from './handle-delete-lists';

jest.mock('express-validator');

describe('handleDeleteLists()', () => {
  it('should send a 204 status code if lists were deleted', async () => {
    const req = { body: { ids: [1, 2] } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => true } as any);
    jest.spyOn(ListModel, 'deleteMany').mockResolvedValue({} as any);

    await handleDeleteLists(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
  it('should send a 400 status code if validation errors occurred', async () => {
    const req = { body: { ids: [1, 2] } } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest
      .spyOn(validator, 'validationResult')
      .mockReturnValue({ isEmpty: () => false } as any);

    await handleDeleteLists(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });
});
