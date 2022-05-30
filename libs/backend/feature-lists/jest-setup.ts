import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset } from 'jest-mock-extended';

const mock = mockDeep<PrismaClient>();

jest.mock('@list-app/backend/shared/data-access', () => ({
  prisma: mock,
}));

beforeEach(() => {
  mockReset(mock);
});
