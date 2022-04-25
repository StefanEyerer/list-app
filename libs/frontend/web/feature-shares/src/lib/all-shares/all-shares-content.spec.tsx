import { deleteShare } from '@list-app/frontend/shared/data-access';
import { fireEvent, render, screen } from '@testing-library/react';
import { AllSharesContent } from './all-shares-content';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const mockSession = { data: { id_token: 'someToken' } };
jest.mock('next-auth/react', () => ({ useSession: () => mockSession }));
jest.mock('@list-app/frontend/shared/data-access', () => ({
  deleteShare: jest.fn().mockResolvedValue(null),
}));

describe('AllSharesContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render info text if no shares are present', () => {
    const someShares = { items: [] };

    render(<AllSharesContent shares={someShares} mutate={jest.fn()} />);

    expect(screen.queryByText('You have no shared lists yet.')).toBeTruthy();
  });
  it('should render name and description of shared lists if shared lists are present', () => {
    const someShares = {
      items: [
        {
          id: '1',
          accessKey: 'AccessKey 1',
          list: {
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
          },
        },
        {
          id: '2',
          accessKey: 'AccessKey 2',
          list: {
            id: '2',
            name: 'Name 2',
            description: 'Description 2',
          },
        },
      ],
    };

    render(<AllSharesContent shares={someShares} mutate={jest.fn()} />);

    expect(screen.queryByText('Name 1')).toBeTruthy();
    expect(screen.queryByText('Description 1')).toBeTruthy();
    expect(screen.queryByText('Name 2')).toBeTruthy();
    expect(screen.queryByText('Description 2')).toBeTruthy();
  });
  it('should copy access key if copy icon is clicked', () => {
    const someShares = {
      items: [
        {
          id: '1',
          accessKey: 'SomeAccessKey',
          list: {
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
          },
        },
      ],
    };

    render(<AllSharesContent shares={someShares} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('copyAccessKey'));

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('SomeAccessKey');
  });
  it('should copy public share link if link icon is clicked', () => {
    const someShares = {
      items: [
        {
          id: '1',
          accessKey: 'SomeAccessKey',
          list: {
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
          },
        },
      ],
    };

    render(<AllSharesContent shares={someShares} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('copyShareLink'));

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      `${window.location.origin}/public/shares/SomeAccessKey`
    );
  });
  it('should delete share if delete icon is clicked', () => {
    const someShares = {
      items: [
        {
          id: '1',
          accessKey: 'AccessKey 1',
          list: {
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
          },
        },
      ],
    };

    render(<AllSharesContent shares={someShares} mutate={jest.fn()} />);
    fireEvent.click(screen.getByTestId('delete'));

    expect(deleteShare).toHaveBeenCalledWith('1', 'someToken');
  });
});
