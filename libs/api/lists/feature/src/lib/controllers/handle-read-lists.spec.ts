/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListModel } from '@list-app/api/shared/data-access';
import { Request, Response } from 'express';
import { handleReadLists } from './handle-read-lists';

describe('handleReadLists()', () => {
  it('should send a 200 status code if lists were found', async () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest.spyOn(ListModel, 'find').mockResolvedValue([{ get: () => 'found' }]);

    await handleReadLists(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
  it('should send a 200 status code if no lists were found', async () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnValue({ json: jest.fn() }),
    } as unknown as Response;

    jest.spyOn(ListModel, 'find').mockResolvedValue([]);

    await handleReadLists(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
});
